import React from 'react'
import { Box, Heading, Image, Icon, Text, Stack } from '@chakra-ui/react'
import { FaBookOpen } from 'react-icons/fa'
import featuredImage from '../../../assets/illustration.png'

const FeaturedPosts = () => {
  return (
    <Box>
        <Box mb='5'>
            <Heading fontSize={30}>Featured Articles</Heading>
        </Box>
        <FeaturedPost />
    </Box>
  )
}

export default FeaturedPosts

export const FeaturedPost = () => {
    return (
        <Box>
            <Stack direction={['column', 'row']} justifyContent={['center', 'space-between']}>
                <Box w={[325, 450, 600]} h='400px' mb='2'>
                    <Image src={featuredImage} w='100%' h='400px' objectFit='cover' borderRadius={12} />
                </Box>

                <Box w={[325, 450, 550]} h='400' overflow='auto'>
                    <Box>
                        <Stack direction='row' spacing={3} alignItems='center'>
                            <Icon as={FaBookOpen} />
                            <Text fontSize={15}>15 Minutes</Text>
                        </Stack>
                    </Box>
                    <Heading fontSize={[25, 30]}>Recycle today: Preaching the gospel of recycling.</Heading>
                    <Text fontSize={18} lineHeight={8}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dignissimos! Officiis tempore, ratione magnam quae, cumque nostrum sapiente laudantium dignissimos autem sed, distinctio architecto! Corporis quibusdam animi recusandae pariatur modi? lorem
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dignissimos! Officiis tempore, ratione magnam quae, cumque nostrum sapiente laudantium dignissimos autem sed, distinctio architecto!
                    </Text>

                    <Stack color='#0397D6' fontSize={16} direction='row' alignItems='center' spacing={5}>
                        <Text>Oluwapelumi Egunjobi</Text>
                        <Box w='5px' h='5px' borderRadius='50%' bg='#0397D6'></Box>
                        <Text>August 24, 2023.</Text>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}