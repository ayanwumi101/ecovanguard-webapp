import React from 'react'
import {Box, Text, Heading, Button, Flex, VStack, Image} from '@chakra-ui/react'
// import {IconArrowLeft} from '@tabler/icons'
// import Image from 'next/image'
import {Link} from 'react-router-dom'
// import logo from '../../public/img/logo/iwello-desktop.svg'

const Confirmation = () => {
  return (
    <VStack maxW={'420px'} mx='auto' spacing={9} mt='9'>
        <Box>
            {/* <Image src={logo} alt='iwello-logo' /> */}
        </Box>

        <Box textAlign={'center'}>
            <Heading size='lg' mb='5'>Check Your Email</Heading>
            <Text>We sent a password reset link to ayanwunmi101@gmail.com </Text>
        </Box>

        <Box w='420px' mx='auto'>
            <Button type='submit' letterSpacing={'1.5px'} w={'100%'}>Open gmail app</Button>
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

export default Confirmation