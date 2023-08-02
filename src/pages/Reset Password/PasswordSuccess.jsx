import React from 'react'
import {Box, Text, Heading, Button, Flex, VStack, Image} from '@chakra-ui/react'
// import Image from 'next/image'
// import logo from '../../public/img/logo/iwello-desktop.svg'
// import { IconArrowLeft } from '@tabler/icons'
import {Link} from 'react-router-dom'


const PasswordSuccess = () => {
  return (
    <VStack mt='9' mx='auto' maxW='420px' spacing={9}>
        <Box>
            {/* <Image src={logo} alt='Iwello-logo' /> */}
        </Box>

        <Box textAlign={'center'}>
            <Heading size='lg' mb='5'>Password reset</Heading>
            <Text>Your password has been successfully reset, click the button below to login magically</Text>
        </Box>

        <Box w='420px' mx='auto'>
            <Link href='/login'><Button w='100%' letterSpacing={'1.5px'}>Continue to Login</Button></Link>
        </Box>

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

export default PasswordSuccess