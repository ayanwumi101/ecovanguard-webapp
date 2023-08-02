import React from 'react'
import {VStack, Box, Text, Heading, Button, FormControl, FormLabel, Input, Flex, Image} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
// import logo from '../../public/img/logo/iwello-desktop.svg'
// import { IconArrowLeft } from '@tabler/icons'


const NewPassword = () => {
  return (
    <VStack mt='9' mx='auto' maxW={'420px'} spacing={9} mb='5'>
        <Box>
            {/* <Image src={logo} alt='Iwello-logo'/> */}
        </Box>

        <Box textAlign={'center'}>
            <Heading size='lg' mb='4'>Set new password</Heading>
            <Text>Your new password must be different from the old passwords.</Text>
        </Box>

        <FormControl>
            <Box mb='6'>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='please input your password' />
            </Box>

            <Box mb='6'>
                <FormLabel>Confirm password</FormLabel>
                <Input type='password' placeholder='please confirm your password' />
            </Box>

            <Box>
                <Button type='submit' backgroundColor={'#6d40e5'} w='100%' letterSpacing={'1.5px'}>Reset Password</Button>
            </Box>
        </FormControl>

         <Box color='#6d40e5'>
            <Link href='/login'>
                <Flex gap='5' cursor={'pointer'}>
                    {/* <IconArrowLeft /> */}
                    <Text>Back to login</Text>
                </Flex>
            </Link>
        </Box>
    </VStack>
  )
}

export default NewPassword