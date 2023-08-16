import { Box, Icon, Image, Text, Heading, Stack} from '@chakra-ui/react'
import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import featuredImage from '../../../assets/illustration.png'
import { Link } from 'react-router-dom'


const BlogCard = ({post}) => {
  const truncatedBody = post?.body?.[0]?.children[0]?.text.substring(0, 120) + '...';
  return (
    <Box w='370px' h='510px' borderRadius={16} mb='40px' boxShadow='lg'>
      <Link to={`/blog/${post?.slug?.current}`}>
        <Box maxW='370px'>
            <Image src={post?.mainImage?.asset?.url} borderRadius='16px 16px 0 0' objectFit='cover' w='100%' h='250px' />
        </Box>
        <Box px='4' py='2'>
              <Stack direction='row' spacing={3} alignItems='center' color='#0397D6'>
                  <Icon as={FaBookOpen} />
                  <Text fontSize={15}>15 Minutes</Text>
              </Stack>
            <Heading fontSize={20} my='0'>{post.title.substring(0,31)}...</Heading>
            <Box mb='2'>
                <Text fontSize={15} lineHeight={7}>
                  {truncatedBody}
                </Text>
            </Box>
            <Stack color='#0397D6' fontSize={15} direction='row' alignItems='center' spacing={3}>
                  <Text>{post?.authorName}</Text>
                  <Box w='5px' h='5px' borderRadius='50%' bg='#0397D6'></Box>
                  <Text>{new Date(post?.publishedAt).toDateString()}</Text>
            </Stack>
        </Box>
      </Link>
    </Box>
  )
}

export default BlogCard