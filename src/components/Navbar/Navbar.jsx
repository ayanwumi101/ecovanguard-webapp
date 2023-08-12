import React, { useState, useEffect } from "react";
import { VscGrabber, VscChromeClose } from "react-icons/vsc";
import { BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AccountVector from "../../assets/account-vector.svg";
import {
  Box, Avatar, AvatarBadge, Text, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useToast, Image, Stack
} from "@chakra-ui/react";
import { signOut, getAuth } from 'firebase/auth'
import { getFirestore, query, where, getDocs, collection, } from 'firebase/firestore'
import ProfileDrawer from "../Drawer/ProfileDrawer";
import {BiMenu} from 'react-icons/bi'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaUserTag, FaUserTie, FaUserCog, FaUserLock, FaUsers} from 'react-icons/fa'
import {MdManageAccounts} from 'react-icons/md'
import { set } from "date-fns";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation()
  const showNav = () => {
    setShowSidebar(true);
};

const pagesWithoutNavbar = ['/signin', '/signup', '/create_account/secondary_school', '/create_account/higher_institution'];
const hideNavbar = pagesWithoutNavbar.includes(location.pathname);

  return (
    <>
      {!hideNavbar && 
        <Box borderBottom='1.5px solid lightgray' boxShadow='md' pt='3.5'>
        <Box className={styles.navbar_container}>
          <header>
            <Box as='nav' display='flex' alignItems='center' justifyContent='space-between'>
              <a href="/">
                <div className={styles.brand}>
                  <Image src={logo} alt="EcoVanguard Logo" className={styles.logo} />
                </div>
              </a>
              <div>
                <div className={styles.links}>
                  <LinkList />
                </div>
                <div className={styles.icon} onClick={showNav}>
                  <BiMenu style={{fontSize: '40px', fontWeight: 'bold'}} />
                </div>
              </div>
                      
            </Box>
          </header>
          {showSidebar ? <SideNav setShowSidebar={setShowSidebar} /> : null}
        </Box>
        </Box>
      }
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
  const [userDetails, setUserDetails] = useState('');
  const [registeredUser, setRegisteredUser] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState('')
  const navigate = useNavigate();
  const userRef = collection(db, 'user_data');
  const membersRef = collection(db, 'registered_users_data');

  const handleLogout = () => {
      signOut(auth).then(() => {
        setUserDetails('');
        setCurrentUser([]);
        toast({
          title: "Logout Successful.",
          description: "You have been logged out successfully!.",
          status: "success",
          duration: 2000,
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
          await getDocs(q).then(async (snapshot) => {
            let user_data = [];
            snapshot.docs.map((item) => {
              user_data.push({ ...item.data(), id: item.id });
              return setUserDetails(user_data);
            })
          });
        }
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async() => {
    try{
      auth.onAuthStateChanged(async (user) => {
        if(user){
          const k = query(membersRef, where('user_id', '==', user.uid));
          await getDocs(k).then(async (snapshot) => {
            let user_data = [];
            snapshot.docs.map((item) => {
              user_data.push({ ...item.data(), id: item.id });
              console.log(user_data);
              return setRegisteredUser(user_data);
            })
          });
        }
      })
    }catch(error){
      console.log(error.message)
    }
  }


  useEffect(() => {
    getCurrentUser();
    getUserDetails();
  }, []);

  const showProfile = () => {
    setOpenDrawer(true)
  }


  let activeStyle = {
    borderBottom: "4px solid #4AAA42",
    borderRadius: 0,
  };

  let activeList = {
    marginBottom: 20,
  }

  return (
    <Box className={styles.lists} display='flex' alignItems='flex-start' gap={7}>
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

      <Box>
      {userDetails ?
        <Menu>
            <Stack direction='row' alignItems='center'>
                {/* <Text mr='1' fontWeight={'semibold'} textTransform='capitalize' display={{ base: 'none', md: 'block', lg: 'block' }}>{userDetails[0]?.user_name}</Text> */}
                <MenuButton as={'button'} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} border='none' outline='none'>
                  <Avatar src='Test Union' size={'sm'} name={userDetails[0]?.full_name} >
                    <AvatarBadge bg='green.500' boxSize='1.25em' />
                  </Avatar>
                </MenuButton>
            </Stack>

            <MenuList zIndex={'overlay'}>
              <MenuItem onClick={showProfile} _hover={{ bg: 'lightgray', color: 'white' }} display='flex' alignItems='center' gap={2} py='2'> <FaUserTie /> Profile</MenuItem>
              {registeredUser?.length > 0 &&
                <>
                <MenuDivider />
                <Link to='/profile'>
                  <MenuItem _hover={{ bg: 'lightgray', color: 'white' }} display='flex' alignItems='center' gap={2} py='2'><FaUserLock /> Account </MenuItem>
                </Link>
                </>
              }
              {!registeredUser?.length &&
                <>
                <MenuDivider />
                <Link to='/create_account'>
                  <MenuItem _hover={{ bg: 'lightgray', color: 'white' }} display='flex' alignItems='center' gap={2} py='2'><FaUserCog /> Register </MenuItem>
                </Link>
                </>
              }
              <MenuDivider />
              <Link to='/registered_members'><MenuItem _hover={{ bg: 'lightgray', color: 'white' }} display='flex' alignItems='center' gap={2} py='2'><FaUsers />Members List </MenuItem></Link>
              <MenuDivider />
              <MenuItem onClick={handleLogout} _hover={{bg: 'lightgray', color: 'white'}} display='flex' alignItems='center' gap={2} py='2'><HiOutlineLogout /> Logout</MenuItem>
            </MenuList>
        </Menu>
        : null }
        </Box>

        {!userDetails &&
        (<NavLink to="/signin">
          <li className={styles.login} style={{ height: '40px' }}>
            <img src={AccountVector} alt="account" width={27} height={10} />
            Account
            <BsChevronRight className={styles.right} />
          </li>
        </NavLink>) }
    </Box>
  );
};
