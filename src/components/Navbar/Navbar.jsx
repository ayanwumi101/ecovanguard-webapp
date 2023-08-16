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
  useToast, Image, Stack, Flex, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, Icon
} from "@chakra-ui/react";
import { signOut, getAuth } from 'firebase/auth'
import { getFirestore, query, where, getDocs, collection, } from 'firebase/firestore'
import ProfileDrawer from "../Drawer/ProfileDrawer";
import {BiMenu} from 'react-icons/bi'
import {HiOutlineLogout} from 'react-icons/hi'
import {FaUserTag, FaUserTie, FaUserCog, FaUserLock, FaUsers, FaLinkedinIn, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook} from 'react-icons/fa'
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
          <Stack direction='column' justifyContent='space-between' h='100%'>
            <Box>
                <Flex alignItems='center' justifyContent='space-between' w='92%' mx='auto'>
                  <Link to="/" onClick={() => setShowSidebar(false)}>
                    <div className={styles.brand}>
                      <Image src={logo} alt="EcoVanguard Logo" className={styles.logo} />
                    </div>
                  </Link>
                  <span
                    className={styles.sidenav_btn}
                    onClick={() => setShowSidebar(false)}
                  >
                    <VscChromeClose className={styles.close_icon} />
                  </span>
                </Flex>
                <Box w='100%' h='0.5px' bg='lightgray' my='1'></Box>
                <SideNavLinks setShowSidebar={setShowSidebar} />
            </Box>

            <Box borderTop='1px solid lightgray' borderBottom='1px solid lightgray' h='70px'>
              <Stack direction='row' alignItems='center'>
                <Box as='a' href='https://twitter.com' onClick={() => setShowSidebar(false)} target="_blank" borderRight='1px solid lightgray' w='71px' h='70px' display='flex' alignItems='center' justifyContent='center' _hover={{bg: 'lightgray'}}>
                    <Icon as={FaTwitter} fontSize={30} color='#0397d6' />
                  </Box>
                  <Box as='a' target='_blank' href='https://instagram.com' onClick={() => setShowSidebar(false)} borderRight='1px solid lightgray' w='71px' h='70px' display='flex' alignItems='center' justifyContent='center' _hover={{ bg: 'lightgray' }}>
                    <Icon as={FaInstagram} fontSize={30} color='#0397d6' />
                  </Box>
                  <Box as='a' target='_blank' href='https://linkedin.com' borderRight='1px solid lightgray' onClick={() => setShowSidebar(false)} w='71px' h='70px' display='flex' alignItems='center' justifyContent='center' _hover={{ bg: 'lightgray' }}>
                    <Icon as={FaLinkedin} fontSize={30} color='#0397d6' />
                  </Box>
                  <Box as='a' target='_blank' href='https://wa.me/+2348127671686' borderRight='1px solid lightgray' onClick={() => setShowSidebar(false)} w='71px' h='70px' display='flex' alignItems='center' justifyContent='center' _hover={{ bg: 'lightgray' }}>
                    <Icon as={FaWhatsapp} fontSize={30} color='#0397d6' />
                  </Box>
                  <Box as='a' target="_blank" href='https://facebook.com' w='70px' h='70px' display='flex' onClick={() => setShowSidebar(false)} alignItems='center' justifyContent='center' _hover={{ bg: 'lightgray' }}>
                    <Icon as={FaFacebook} fontSize={30} color='#0397d6' />
                  </Box>
              </Stack>
            </Box>
          </Stack>
        </div>
      </div>
    </>
  );
};


export const SideNavLinks = ({setShowSidebar}) => {
  return (
    <Box w='100%'>
      <Stack fontSize={18}>
        <Link to='/about' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>About Us</Text></Link>
        <Link to='/projects' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>Projects</Text></Link>
        <Link to='/donate' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>Donate</Text></Link>
        <Link to='/blog' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>Blog</Text></Link>
        <Link to='/contact' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>Contact Us</Text></Link>
        <Link to='/signin' onClick={() => setShowSidebar(false)}><Text my='0' borderBottom='1px solid lightgray' py={4} pl='7' fontWeight='medium'>Account</Text></Link>
      </Stack>
    </Box>
  )
}


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
