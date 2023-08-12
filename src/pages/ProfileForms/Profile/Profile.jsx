import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.css";
import editIcon from "../../../assets/edit.svg";
import avatar from "../../../assets/boy.png";
import {Input, FormLabel, Heading, Text, Box, Image, Stack, useToast} from "@chakra-ui/react";
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore, query, where, getDocs, collection } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { Link, useNavigate } from 'react-router-dom'

const Profile = ({formData}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState('')
  const [avatar, setAvatar] = useState('');
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const userRef = collection(db, 'registered_users_data');
  const navigate = useNavigate();
  const toast = useToast();

  const getCurrentUser = async () => {
    try {
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        const q = query(userRef, where('user_id', '==', user.uid));
        const avatarRef = ref(storage, user.uid);

        if (user) {
          getDownloadURL(avatarRef).then((url) => {
            setAvatar(url);
          });

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

  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.heading}>
          <Heading fontWeight='medium' fontSize='35px'>Your Profile</Heading>
          <img src={editIcon} className={styles.editIcon} alt="edit-icon" />
        </div>

        <Box className={styles.profile_image} mx='auto' mb='10'>
          <Image src={avatar} alt="user-avatar" className={styles.avatar} objectFit='cover' />
        </Box>

        <Stack direction={['column', 'column', 'row']} justifyContent={['center', 'space-between']}>
          <Box w={[350, 400]}>
            <h3 className={styles.text}>Personal Details</h3>
            <form action="">
              <Box className={styles.form_control}>
                <FormLabel htmlFor="Level">Full Name</FormLabel>
                <Input
                  type="text"
                  value={userDetails[0]?.full_name}
                  disabled
                  bg='gray.100'
                  w='100%'
                  fontWeight='medium'
                />
              </Box>

              <div className={styles.form_control}>
                <FormLabel htmlFor="Faculty">Email</FormLabel>
                <Input type="text" bg='gray.100' value={userDetails[0]?.email} disabled color='black' fontWeight='medium' />
              </div>

              <div className={styles.form_control}>
                <FormLabel htmlFor="Department">Age</FormLabel>
                <Input type="text" bg='gray.100' value={`${userDetails[0]?.age} years`} disabled fontWeight='medium' />
              </div>

              <div className={styles.form_control}>
                <FormLabel htmlFor="Faculty">City </FormLabel>
                <Input type="text" bg='gray.100' value={userDetails[0]?.city} disabled fontWeight='medium' />
              </div>
            </form>
          </Box>

          <Box w={[350, 400]}>
            <h3 className={styles.text}>Educational Details</h3>
            <form action="">
              <div className={styles.form_control}>
                {userDetails[0]?.institution ? 
                  <>
                    <FormLabel htmlFor="Faculty">Institution</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.institution}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                  :
                  <>
                    <FormLabel htmlFor="Faculty">School Name</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.school_name}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                }
              </div>

              <div className={styles.form_control}>
                {userDetails[0]?.faculty ?
                  <>
                    <FormLabel htmlFor="Faculty">Faculty</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.faculty}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                  :
                  <>
                    <FormLabel htmlFor="Faculty">School Location</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.school_location}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                }
              </div>

              {userDetails[0]?.department &&
                <div className={styles.form_control}>
                  <FormLabel htmlFor="Level">Department</FormLabel>
                  <Input
                    type="text"
                    value={formData?.department}
                    disabled
                    bg='gray.100'
                    fontWeight='medium'
                  />
                </div>
              }

              <div className={styles.form_control}>
                {userDetails[0]?.level ?
                  <>
                    <FormLabel htmlFor="Faculty">Level</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.level}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                  :
                  <>
                    <FormLabel htmlFor="Faculty">Class</FormLabel>
                    <Input
                      type="text"
                      value={userDetails[0]?.class}
                      disabled
                      bg='gray.100'
                      fontWeight='medium'
                    />
                  </>
                }
              </div>

              <div className={styles.form_control}>
                <FormLabel htmlFor="admission year">Year of Admission</FormLabel>
                <Input
                  type="text"
                  value={userDetails[0]?.admission_year}
                  bg='gray.100'
                  disabled
                  fontWeight='medium'
                />
              </div>

              <div className={styles.form_control}>
                <FormLabel htmlFor="graduation year">
                  Expected year of Graduation{" "}
                </FormLabel>
                <Input
                  type="text"
                  value={userDetails[0]?.graduation_year}
                  bg='gray.100'
                  disabled
                  fontWeight='medium'
                />
              </div>
            </form>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default Profile;
