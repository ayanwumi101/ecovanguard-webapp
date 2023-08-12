import React, {useState, useEffect} from 'react'
import {
    Box, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Heading, Text
} from '@chakra-ui/react'
import { signOut, getAuth } from 'firebase/auth'
import { getFirestore, query, where, getDocs, collection, } from 'firebase/firestore'


const Members = () => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  const [currentUser, setCurrentUser] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [registeredUser, setRegisteredUser] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState('')
  const userRef = collection(db, 'user_data');
  const membersRef = collection(db, 'registered_users_data');
  const [numbering, setNumbering] = useState(0);

  const getCurrentUser = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setCurrentUser(user);
          // const q = query(userRef, where('user_id', '==', user.uid));
          await getDocs(userRef).then(async (snapshot) => {
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

  const setMembersId = () => {
    for (let index = 0; index < userDetails?.length; index++) {
      const formattedNumber = String(index + 1).padStart(3, '0'); // Format the index with leading zeros
      setNumbering(formattedNumber);
    }
    return numbering
  }


  useEffect(() => {
    getCurrentUser();
    getUserDetails();
    setMembersId();
  }, []);


  return (
    <Box w='90%' mx='auto' my='50px'>
        <Box textAlign='center' mb='10'>
            <Heading fontSize={[25, 30]} fontWeight='medium'>Registered Ecovanguard Members</Heading>
            <Text>Below is the list of temporarily/permanantly registered evovanguard members and their details</Text>
        </Box>
        <Box minH='300px'>
            <TableContainer>
              <Table variant='simple'>
                <Thead bg='lightgray' py='8'>
                  <Tr py='8'>
                    <Th fontSize={14}>S/N</Th>
                    <Th fontSize={14}>Full Name</Th>
                    <Th fontSize={14}>Username</Th>
                    <Th fontSize={14}>Email</Th>
                    <Th fontSize={14}>Age</Th>
                    <Th fontSize={14}>Institution/High School</Th>
                    <Th fontSize={14}>Level/Class</Th>
                    <Th fontSize={14}>Date Joined</Th>
                    <Th fontSize={14}>Status</Th>
                    <Th fontSize={14}>Membership ID</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {userDetails?.map((userDetail, index) => {
                    const specificUser = registeredUser?.find((item) => item?.user_id === userDetail?.user_id);
                    return (
                      <Tr fontSize={16} fontWeight='normal' _hover={{ bg: 'gray.100' }}>
                        <Td>{index + 1}</Td>
                        <Td>{userDetail.full_name}</Td>
                        <Td>{userDetail.user_name}</Td>
                        <Td>{userDetail?.email}</Td>
                        <Td>{specificUser?.age ? specificUser?.age : 'Nill'}</Td>
                        <Td>
                          {specificUser?.institution || specificUser?.school_name ? (
                            specificUser?.institution || specificUser?.school_name
                          ) : (
                            'Nill'
                          )}
                        </Td>
                        <Td>
                          {specificUser?.level || specificUser?.class ? (
                            specificUser?.level || specificUser?.class
                          ) : (
                            'Nill'
                          )}
                        </Td>
                        <Td>{userDetail?.date_joined}</Td>
                        <Td>{specificUser ? 'Registered Member' : 'Not Registered'}</Td>
                        <Td>{`ECOVANGUARD/UI/${numbering}`}</Td>
                      </Tr>
                    )
                  })}

                </Tbody>
              </Table>
            </TableContainer>
        </Box>
      </Box>
  )
}

export default Members