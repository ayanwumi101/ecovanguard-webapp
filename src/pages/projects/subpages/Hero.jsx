import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'
import projectImg from '../../../assets/projects.png'

const Hero = () => {
  return (
    <Box
      bgImage={projectImg}
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
    <Box backgroundColor='rgba(0,0,0,0.6)' zIndex='2' w='100%' h='100%' mx='auto' display='flex' alignItems='center' justifyContent='center'>
      <Box maxW='600px' px={[5, 0]}>
        <Box textAlign='center' color='white' mb='6'>
          <Heading fontSize={[35, 55]}>Our Projects</Heading>
          <Text>Find articles published about environmental based issues and events surrounding the club.</Text>
        </Box>
      </Box>
    </Box>
  )
}