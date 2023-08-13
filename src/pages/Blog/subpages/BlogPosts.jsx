import { Box, Heading, Flex } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import client from '../../../client'
import BlockContent from '@sanity/block-content-to-react'

const BlogPosts = ({posts}) => {
  console.log(posts);
  return (
    <Box>
        <Box mb='5'>
          <Heading fontSize={30}>Recent Articles</Heading>
        </Box>
       <Flex justifyContent='space-between' flexWrap='wrap'>
        {posts.map((post) => <BlogCard post={post} />)}
       </Flex>
    </Box>
  )
}

export default BlogPosts