import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './subpages/Hero'
import Publications from './subpages/Publications'


const index = () => {
  return (
    <Box>
      <Hero />
      <Box w='90%' mx='auto'>
        <Publications />
      </Box>
    </Box>
  )
}

export default index