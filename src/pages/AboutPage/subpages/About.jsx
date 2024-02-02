import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react'
import React from 'react'
import volunteer from '../../../../public/assets/volunteer.png'

const About = () => {
  return (
    <Box w={['90%','70%', '70%']} mx='auto' mb='14'>
        <Box mb='8'>
            <Heading fontSize={30}>Who are we?</Heading>
            <Text fontSize={16} lineHeight={7}>
                  EcoVanguard Club is a grassroot student-led group affiliated to the Clean Ibadan Ambassadors (CIA) programme. The purpose is to educate students both secondary school and Higher Institutions, on the importance of proper waste management practices and advocate for an eco-friendly environment and the implementation of a circular economy.
            </Text>
        </Box>
        <Box mb='8'>
            <Heading fontSize={30}>Our Story</Heading>
            <Text fontSize={16} lineHeight={7}>
                  Founded in 2020 by Engineer Dr. Wasiu O. Ajagbe, with the first president of the club being Khadija Kolapo, the club started with just 24 members, the club has now grown to over 240 active members across 3 Higher institutions and several secondary institutions. 
            </Text>
        </Box>

        <Box mb='12' position='relative'>
            <Heading fontSize={30}>Our Objectives</Heading>
            <Box>
                <Box borderRight='1px solid lightgray' h='170px' w={['95%','50%']} p='7' position='relative' top='10px' mb='5'>
                    <Box position='absolute' right='-20px' top='-10px' bg='#0397D6' color='white' w='40px' h='40px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center'><Text>1</Text></Box>
                    <Text fontSize={16} lineHeight={8} mt='6'>
                        Increase awareness among students and staff of the school on environmental issues.
                    </Text>
                </Box>
                <Box display='flex' justifyContent='flex-end' mb='5'>
                      <Box m='0' borderLeft='1px solid lightgray' h='170px' w={['90%','50%']} p='7' position='relative' right='0'>
                          <Box position='absolute' left='-20px' top='-10px' bg='#0397D6' color='white' w='40px' h='40px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center'><Text>2</Text></Box>
                          <Text fontSize={16} lineHeight={8}>
                              Assist faculty, staff, administration and students to become better stewards of the environment
                          </Text>
                      </Box>
                </Box>
                <Box borderRight='1px solid lightgray' h='170px' w={['95%','50%']} p='7' position='relative' mb='5'>
                    <Box position='absolute' right='-20px' top='-10px' bg='#0397D6' color='white' w='40px' h='40px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center'><Text>3</Text></Box>
                    <Text fontSize={16} lineHeight={8}>
                          Improve waste management practices in among the citizens of the federal republic of Nigeria. 
                    </Text>
                </Box>
                <Box display='flex' justifyContent='flex-end'>
                      <Box m='0' borderLeft='1px solid lightgray' h='170px' w={['95%','50%']} p='7' position='relative' right='0'>
                          <Box position='absolute' left='-20px' top='-10px' bg='#0397D6' color='white' w='40px' h='40px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center'><Text>4</Text></Box>
                          <Text fontSize={16} lineHeight={8}>
                              Introduce students and staff of the school to the concept of circular economy
                          </Text>
                      </Box>
                </Box>
            </Box>
        </Box>

        <Box style={{clear: 'both'}}>
            <Box mb='10'>
                <Heading fontSize={30} textAlign='center'>Membership</Heading>
            </Box>
              <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
                  <Box w='450px' mb='10'>
                      <Text fontSize={16} lineHeight={8}>
                          Ecovanguard club gives its member an opportunity to represent the earth, make the earth a greener healthier and cleaner world for its present and future residents
                      </Text>
                      <Button bg='#0397D6' color='white' fontWeight='normal' size='lg' fontSize={15}>Become a Memeber</Button>
                  </Box>
                  <Box w='400px'>
                      <Image src={volunteer} />
                  </Box>
              </Flex>
        </Box>
    </Box>
  )
}

export default About