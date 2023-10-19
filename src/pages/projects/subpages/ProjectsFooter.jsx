import React from 'react'
import {Box, Text, Button, Heading} from '@chakra-ui/react'
import world from '../../../assets/world.png'

const ProjectsFooter = () => {
  return (
    <Box 
      w='100%' 
      h='505px' 
      bgImage={world} 
      backgroundRepeat='no-repeat' 
      backgroundSize='cover'
      backgroundPosition='center'
      borderRadius='16px'
      mb='10'
      >
      <Box 
        backgroundColor='rgba(0,0,0,0.7)' 
        w='100%' h='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='16px'
      >
        <Box w={['350px', '511px']} textAlign='center' color='white'>
          <Heading fontSize={[35, 45]} m='0'>Volunteer with us</Heading>
          <Heading fontSize={[45, 55]} m='0'>Today</Heading>
          <Button w={['300px', '350px', '511px']} my='5' py='24px' bg='#0397D6' color='white'>Volunteer</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectsFooter