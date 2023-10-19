import React from 'react'
import {Box, Text, Heading, Stack, Image, Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import exec from '../../../assets/exec.png'

const ExecutedProjects = () => {
  return (
    <Box my='14'>
      <Heading fontSize={[30,25]}>Executed Projects</Heading>
      <Box w='100%' overflow='auto'>
        <Stack direction='row' justifyContent='space-between' spacing={[8, 0]} alignItems='center'>
          <ExecutedProjectCards
            image={exec}
            heading='Zero Plastic 2030'
            institution='University of Ibadan'
            text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          />

          <ExecutedProjectCards
            image={exec}
            heading='Zero Plastic 2030'
            institution='University of Ibadan'
            text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          />

          <ExecutedProjectCards
            image={exec}
            heading='Zero Plastic 2030'
            institution='University of Ibadan'
            text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default ExecutedProjects


export const ExecutedProjectCards = ({image, heading, institution, text}) => {
  return (
    <Box w='370px' minH='500px' borderRadius={5} mb='40px' boxShadow='lg'>
      {/* <Link to={`/blog/${post?.slug?.current}`}> */}
        <Box w={['350px', '370px']}>
          <Image src={image} borderRadius='16px 16px 0 0' objectFit='cover' w='100%' h='250px' />
        </Box>
        <Box px='5' py='6'>
          <Box>
            <Heading fontSize={20} my='0'>{heading}</Heading>
            <Text color='rgba(0, 0, 0, 0.6)' fontSize={16}>{institution}</Text>
          </Box>
          <Box mb='2'>
            <Text fontSize={15.5} lineHeight={7}>
              {text}
            </Text>
          </Box>
        </Box>
      {/* </Link> */}
    </Box>
  )
}