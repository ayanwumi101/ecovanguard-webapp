import { Box, Input, Image, Text, Heading, Stack, InputGroup, InputLeftElement, FormControl, Icon, Button, FormLabel } from '@chakra-ui/react'
import greenBg from '../../assets/green2.jpg'
import { FaSearch } from 'react-icons/fa'
import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import {MdLockOutline} from 'react-icons/md'

const index = () => {
  return (
    <Box
      bgImage={greenBg}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='center'
      w='100%'
      h={["auto", '100%']}
      display='flex'
      alignItems='center'
      justifyContent='center'
      // py='10'
    >
      <HeroText />
    </Box>
  )
}

export default index



export const HeroText = () => {
  const btns = ['Donate Once', 'Recurring']
  const [position, setPosition] = React.useState(0);

  const handleClick = (index) => {
    setPosition(index);
  }
  return (
    <Box backgroundColor='rgba(0,0,0,0.8)' zIndex='2' w='100%' h='100%' mx='auto' display='flex' alignItems='center' justifyContent='center'>
      <Box w={['100%', '80%']} mx='auto' display='flex' alignItems='center' justifyContent={['center', 'space-between']} py='12' flexWrap='wrap'>
        <Box w='500px' px={[5, 0]} mb={[10, 0]}>
          <Box color='white' mb='6'>
            <Heading fontSize={[35, 55]} fontWeight='medium'>Donate</Heading>
            <Text>
              Help us achieve our goal to educate both the secondary and higher 
              institution students on the importance of proper waste management.
            </Text>
          </Box>
          <Box w='100%' h='1px' bg='white' my='8'></Box>
          <Stack color='white' spacing={3}>
            <Heading mt='0' mb='2' fontSize={20} fontWeight='medium'>For more information</Heading>
            <Stack direction='row' spacing={2.5} alignItems='center' fontSize={17.5}>
              <Icon as={BsTelephone} />
              <Text my='0'>+2345599556688</Text>
            </Stack>
            <Stack direction='row' spacing={2.5} alignItems='center' fontSize={17.5}>
              <Icon as={AiOutlineMail} />
              <Text my='0'>helloleapafrica@gmail.com</Text>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Box h='auto' w={['350px', '450px']} border='1px solid #fff' borderRadius='16px' padding='30px'>
              <Box border='1px solid #0397D6' borderRadius='8px' w='100%'>
                {btns.map((btn, index) => <Button onClick={() => handleClick(index)} w='50%' color='white' bg={index === position ? '#0397D6' : 'none'} borderRadius={index === 0 ? '6px 0px 0px 6px' : '0px 6px 6px 0px'}>{btn}</Button>)}
              </Box>
              <Box>
                <DonationForms position={position} />
                <Button w='100%' bg='#0397D6' color='white' py='24px'>Donate Once</Button>
              </Box>
          </Box> 
          <Box color='white' fontSize={14} display='flex' my='5' alignItems='center' justifyContent='center' gap={1}>
            <Icon as={MdLockOutline} fontSize={23} /> 
            <Text m='0'>Powered by <a href='https://paystack.com' target='_blank'><b>PAYSTACK</b></a></Text>
          </Box> 
        </Box>
      </Box>
    </Box>
  )
}

export const DonationForms = ({position}) => {
  return (
    <Box w={['290px', '340px']} mx='auto' my='6' color='white'>
      <FormControl>
        <Box mb='4' >
          <FormLabel color='white' fontWeight='medium'>First name</FormLabel>
          <Input type='text' />
        </Box>
        <Box mb='4'>
          <FormLabel color='white' fontWeight='medium'>Last name</FormLabel>
          <Input type='text' />
        </Box>
        <Box mb='4'>
          <FormLabel color='white' fontWeight='medium'>Email Address</FormLabel>
          <Input type='email' />
        </Box>
        <Box mb='4'>
          <FormLabel color='white' fontWeight='medium'>Amount</FormLabel>
          <Input type='number' />
        </Box>
       {position === 1 && 
        <>
          <Box mb='4'>
            <FormLabel color='white' fontWeight='medium'>Interval</FormLabel>
            <Input type='text' />
          </Box>
          <Box mb='4'>
            <FormLabel color='white' fontWeight='medium'>How many payment</FormLabel>
            <Input type='text' />
          </Box>
       </>
       }
      </FormControl>
    </Box>
  )
}