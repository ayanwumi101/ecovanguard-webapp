import React from 'react'
import { Box, Input, Image, Text, Heading, Icon, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import greenBg from '../../../assets/green2.jpg'
import { FaSearch } from 'react-icons/fa'


const Hero = ({ posts }) => {
    return (
        <Box
            bgImage={posts?.[0]?.mainImage?.asset?.url || greenBg}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
            w='100%'
            h={[470, 500]}
            display='flex'
            alignItems='center'
            justifyContent='center'
            mb='12'
        >
            <HeroText />
        </Box>
    )
}

export default Hero


export const HeroText = () => {
    return (
        <Box backgroundColor='rgba(0,0,0,0.8)' zIndex='2' w='100%' h='100%' mx='auto' display='flex' alignItems='center' justifyContent='center'>
            <Box maxW='600px' px={[5, 0]}>
                <Box textAlign='center' color='white' mb='6'>
                    <Heading fontSize={[35, 55]} fontWeight='medium'>Our Publications</Heading>
                    <Text>Find and download our latest publications from the club.</Text>
                </Box>
                {/* <Box>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={FaSearch} color='white' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Search' _placeholder={{ color: 'white' }} color='white' borderRadius='70px' />
                    </InputGroup>
                </Box> */}
            </Box>
        </Box>
    )
}