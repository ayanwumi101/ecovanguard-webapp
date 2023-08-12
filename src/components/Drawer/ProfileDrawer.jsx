import React from 'react'
import {
    Box, Text, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Avatar, AvatarBadge,
    Image, Heading
} from "@chakra-ui/react";


const ProfileDrawer = ({setOpenDrawer, currentUser, userDetails}) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const closeModal = () => {
        setOpenDrawer(false);
    }

    console.log(currentUser);

    const newDate = currentUser?.metadata.creationTime
    const signIn = currentUser?.metadata.lastSignInTime
    const date = new Date(newDate).toDateString();
    const newTime = new Date(signIn).toDateString();

  return (
    <Box>
          <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
            //   finalFocusRef={btnRef}
              size='md'
              closeOnOverlayClick={false}
          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton onClick={closeModal} />

                  <DrawerHeader mt='1'>
                      <Box w='140px' h='140px' borderRadius='50%' bg='#FAFAFA' mx='auto' display={'flex'} justifyContent='center' alignItems='center'>
                          <Avatar src='Test Union' size={'2xl'} name={userDetails[0]?.full_name} >
                              <AvatarBadge bg='green.500' boxSize='0.7em' />
                          </Avatar>
                      </Box>
                  </DrawerHeader>

                  <DrawerBody>
                      <Box fontSize={'16px'} mb='5'>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Username</Heading>
                          <Text>{userDetails[0]?.user_name}</Text>
                      </Box>

                      <Box fontSize={'16px'} mb='5'>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Fullname</Heading>
                          <Text>{userDetails[0]?.full_name}</Text>
                      </Box>

                      <Box fontSize={'16px'} mb='5'>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Email</Heading>
                          <Text>{currentUser?.email}</Text>
                      </Box>

                      <Box fontSize={'16px'} mb='5'>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Date Joined</Heading>
                          <Text>{date}</Text>
                      </Box>

                      <Box fontSize={'16px'} mb='5'>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Verification Status</Heading>
                          <Text>{currentUser?.emailVerified === false ? "Not Verified" : "Verified"}</Text>
                      </Box>

                      <Box fontSize={'16px'}>
                          <Heading fontWeight={'medium'} fontSize='20px' mb='2'>Last login date</Heading>
                          <Text>{newTime}</Text>
                      </Box>
                      
                  </DrawerBody>

                  <DrawerFooter textAlign='center'>
                      {/* <Button variant='outline' mx='auto' textAlign='center' w='150px' mr={3} color='white' bg='#00BFB2' fontWeight='medium' fontSize='13px'>
                          Verify
                      </Button> */}
                  </DrawerFooter>

              </DrawerContent>
          </Drawer>
    </Box>
  )
}

export default ProfileDrawer