import { Box, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import BlogCard from './BlogCard'


const BlogPosts = () => {
  return (
    <Box>
        <Box mb='5'>
          <Heading fontSize={30}>Recent Articles</Heading>
        </Box>
       <Flex justifyContent='space-between' flexWrap='wrap'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
       </Flex>
    </Box>
  )
}

export default BlogPosts