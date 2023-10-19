import { Box, Image, Heading, Text, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import greenBg from '../../../assets/green2.jpg'

const PublicationCard = () => {
  return (
    <Box>
        <Box w='265px' h='450px' py='20px' px='20px' border='1px solid #0397D6' borderRadius='16px' mb='8'>
            <Box w='100%' h='250px' mb='2'>
                <Image src={greenBg} w='100%' h='100%' objectFit='cover' />
            </Box>
            <Box textAlign='center'>
                <Text my='0' fontSize={14} color='rgba(0,0,0,0.6)' fontWeight='semibold'>August 23rd, 2023</Text>
                <Heading fontWeight='medium' my='0' fontSize={17.5} lineHeight={7} letterSpacing={0.5} mb='2'>Issue 2.0 of the Ecovanguard weekly publications</Heading>
                <Button w='100%' bg='#0397D6' color='white' fontWeight='medium'>Download</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default PublicationCard