import React, {useState} from 'react'
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react'
import eco from '../../../assets/eco.png'
import ProjectCard from './ProjectCard'
import globe from '../../../assets/globe.png'
import plastic from '../../../assets/plastic.png'

const OngoingProjects = () => {
  return (
    <Box>
      <Box mb='7'>
        <Heading fontSize={[28, 30]}>OngoingProjects</Heading>
      </Box>

      <Stack spacing={[10, 20]}>
        <ProjectCard
          image={eco}
          heading='Tree Planting'
          institution='University of Ibadan'
          text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          reverseFlex={false}
        />
        <ProjectCard
          image={globe}
          heading='Ecovanguard Club'
          institution='University of Ibadan'
          text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          reverseFlex={true}
        />
        <ProjectCard
          image={plastic}
          heading='Zero Plastic 2030'
          institution='University of Ibadan'
          text='The Ecovanguard clubs are environmental education focused clubs that are designed to teach environmental education to students of secondary schools.'
          reverseFlex={false}
        />
      </Stack>
    </Box>
  )
}

export default OngoingProjects


