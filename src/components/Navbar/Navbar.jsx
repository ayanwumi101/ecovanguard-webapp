import React, { useState, useEffect } from "react";
import { VscGrabber, VscChromeClose } from "react-icons/vsc";
import { BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AccountVector from "../../assets/account-vector.svg";
import {
  Box, Avatar, AvatarBadge, Text, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useToast, Image
} from "@chakra-ui/react";
import { signOut, getAuth } from 'firebase/auth'
import { getFirestore, query, where, getDocs, collection, } from 'firebase/firestore'
import ProfileDrawer from "../Drawer/ProfileDrawer";
import {BiMenu} from 'react-icons/bi'


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation()
  const showNav = () => {
    setShowSidebar(true);
};

  return (
    <>
    <Box borderBottom='1.5px solid lightgray' boxShadow='md' pt='3.5'>
    <Box className={styles.navbar_container}>
      <header>
        <nav>
          <a href="/">
            <div className={styles.brand}>
              <Image src={logo} alt="EcoVanguard Logo" className={styles.logo} />
            </div>
          </a>

              {location.pathname === '/signin' || '/signup' && 
              <>
                <div className={styles.links}>
                  <LinkList />
                </div>
                <div className={styles.icon} onClick={showNav}>
                  <BiMenu style={{fontSize: '40px', fontWeight: 'bold'}} />
                </div>
              </>
              }       
        </nav>
      </header>
      {showSidebar ? <SideNav setShowSidebar={setShowSidebar} /> : null}
    </Box>
    </Box>
      
    </>
  );
};

export default Navbar;

const SideNav = ({ setShowSidebar }) => {
  return (
    <>
      <div className={styles.sidenav_modal}>
        <div className={styles.sidenav_container}>
          <span
            className={styles.sidenav_btn}
            onClick={() => setShowSidebar(false)}
          >
            <VscChromeClose className={styles.close_icon} />
          </span>
          <LinkList onClick={() => setShowSidebar(false)} />
        </div>
      </div>
    </>
  );
};


const LinkList = () => {

  const toast = useToast()
  const auth = getAuth();
  const db = getFirestore();
  const [currentUser, setCurrentUser] = useState([]);
  const [userDetails, setUserDetails] = useState('')
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState('')
  const navigate = useNavigate();
  const userRef = collection(db, 'user_data');

  const handleLogout = () => {
      signOut(auth).then(() => {
        setUserDetails('');
        setCurrentUser([]);
        toast({
          title: "Logout Successful.",
          description: "You have been logged out successfully!.",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: 'left-accent',
          position: 'top-right',
        });

      })
  }

  const getCurrentUser = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setCurrentUser(user);
          const q = query(userRef, where('user_id', '==', user.uid));
          getDocs(q).then(async (snapshot) => {
            let user_data = [];
            snapshot.docs.map((item) => {
              user_data.push({ ...item.data(), id: item.id });
              console.log(user_data);
              return setUserDetails(user_data);
            })
          });
        }
      })
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    getCurrentUser()
  }, []);

  const showProfile = () => {
    setOpenDrawer(true)
  }


  let activeStyle = {
    borderBottom: "4px solid #4AAA42",
    borderRadius: 0,
    // height: '70px'
    // paddingBottom: 25,
  };

  let activeList = {
    marginBottom: 20,
  }

  return (
    <ul className={styles.lists}>
      {openDrawer && <ProfileDrawer currentUser={currentUser} userDetails={userDetails} setOpenDrawer={setOpenDrawer} />}
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Contact us
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          About us
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Projects
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/donate"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Donate
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <li>
          Blog
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>

<>
  {userDetails ?
      <Menu>
          <Text mr='2' fontWeight={'semibold'} textTransform='capitalize' display={{ base: 'none', md: 'block', lg: 'block' }}>{userDetails[0]?.user_name}</Text>
          <MenuButton as={'button'} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} border='none' outline='none'>
            <Avatar src='Test Union' size={'sm'} name={userDetails[0]?.full_name} >
              <AvatarBadge bg='green.500' boxSize='1.25em' />
            </Avatar>
          </MenuButton>

          <MenuList zIndex={'overlay'}>
            <MenuDivider />
            <MenuItem onClick={showProfile}> Profile</MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
      </Menu>
      : null }
</>

      {!userDetails &&
      (<NavLink to="/signin">
        <li className={styles.login} style={{ height: '40px' }}>
          <img src={AccountVector} alt="account" width={27} height={10} />
          Account
          <BsChevronRight className={styles.right} />
        </li>
      </NavLink>) }
    </ul>
  );
};
