
import React, { useState } from 'react'
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react'

const ProjectCard = ({image, heading, institution, text, reverseFlex}) => {
  return (
    <Box>
      <Stack direction={reverseFlex ? ['column', 'row-reverse'] : ['column','row']} boxShadow='md' borderRadius='16px' w='100%' h={['auto', '400px']} alignItems='center'>
        <Box w={['350px', '630px']} h='100%' boxShadow='md' borderRadius={reverseFlex ? '0 16px 16px 0' : '16px 0 0 16px'}>
          <Image src={image} w='100%' h='100%' objectFit='cover' borderRadius={reverseFlex ? '0 16px 16px 0' : '16px 0 0 16px'} />
        </Box>
        <Box px='7' w={['350px', '600px']} h='auto'>
          <Box w={['310px', '500px']} pb={[8, 0]}>
            <Box mb='4'>
              <Heading mb='0' fontSize={[25, 30]}>{heading}</Heading>
              <Text color='rgba(0,0,0,0.6)' fontSize={18}>{institution}</Text>
            </Box>
            <Text fontSize={18} mb='5' lineHeight={8}>
              {text}
            </Text>
            <Button bg='#0397D6' color='white' w={['300px', '100%']} p='24px'>Join this campaign</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProjectCard