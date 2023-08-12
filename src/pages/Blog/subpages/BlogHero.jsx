import React from 'react'
import {Box, Input, Image, Text, Heading, Icon, Stack} from '@chakra-ui/react'
import greenBg from '../../../assets/green2.jpg'

const BlogHero = () => {
  return (
    <Box 
        bgImage={greenBg} 
        backgroundRepeat='no-repeat' 
        backgroundSize='cover' 
        backgroundPosition='center' 
        w='100%' 
        h={[470, 450]} 
        display='flex'
        alignItems='center'
        justifyContent='center'
        mb='12'
    >
        <HeroText />
    </Box>
  )
}

export default BlogHero


export const HeroText = () => {
    return (
        <Box backgroundColor='rgba(0,0,0,0.6)' zIndex='2' w='100%' h='100%' mx='auto' display='flex' alignItems='center' justifyContent='center'>
            <Box maxW='600px' px={[5, 0]}>
                <Box textAlign='center' color='white' mb='6'>
                    <Heading fontSize={[30, 55]}>Our Blog</Heading>
                    <Text>Find articles published about environmental based issues and events surrounding the club.</Text>
                </Box>
                <Box>
                    <Input type='text' placeholder='Search' borderRadius={70} color='white' _placeholder={{color: 'white'}} />
                </Box>
            </Box>
        </Box>
    )
}