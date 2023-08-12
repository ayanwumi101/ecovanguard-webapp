import { Box, Icon, Image, Text, Heading, Stack} from '@chakra-ui/react'
import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import featuredImage from '../../../assets/illustration.png'

const BlogCard = () => {
  return (
    <Box w='370px' h='540px' borderRadius={16} mb='30px' overflow='auto'>
        <Box>
            <Image src={featuredImage} borderRadius='16px 16px 0 0' objectFit='cover' w='100%' h='250px' />
        </Box>
        <Box px='4' py='2'>
              <Stack direction='row' spacing={3} alignItems='center'>
                  <Icon as={FaBookOpen} />
                  <Text fontSize={15}>15 Minutes</Text>
              </Stack>
            <Heading fontSize={20} my='0'>Leading cause of pollution in Nigeria</Heading>
            <Text fontSize={15} lineHeight={7}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta error voluptate illum eligendi ad hic consequuntur incidunt? Non, illum! Doloribus!  adipisicing elit. Soluta
            </Text>
            <Stack color='#0397D6' fontSize={15} direction='row' alignItems='center' spacing={3}>
                  <Text>Oluwapelumi Egunjobi</Text>
                  <Box w='5px' h='5px' borderRadius='50%' bg='#0397D6'></Box>
                  <Text>August 24, 2023.</Text>
            </Stack>
        </Box>
    </Box>
  )
}

export default BlogCard