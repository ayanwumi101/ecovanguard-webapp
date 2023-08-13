import React from 'react'
import { Box, Heading, Image, Icon, Text, Stack } from '@chakra-ui/react'
import { FaBookOpen } from 'react-icons/fa'
import featuredImage from '../../../assets/illustration.png'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'react-router-dom'

const FeaturedPosts = ({posts}) => {
  return (
    <Box>
        <Box mb='5'>
            <Heading fontSize={30}>Featured Articles</Heading>
        </Box>
        <FeaturedPost posts={posts} />
    </Box>
  )
}

export default FeaturedPosts

export const FeaturedPost = ({posts}) => {
    return (
        <Link to={`/blog/${posts?.[1]?.slug?.current}`}>
        <Box>
            <Stack direction={['column', 'row']} justifyContent={['center', 'space-between']} alignItems='center' h={['auto', 400]}>
                <Box w={[330, 450, 600]} h='400px' mb='2'>
                    <Image src={posts?.[0]?.mainImage?.asset?.url || featuredImage } w='100%' h='400px' objectFit='cover' borderRadius={12} />
                </Box>

                <Box w={[330, 450, 550]} h={['auto', 400]} overflow='auto'>
                    <Box>
                        <Stack direction='row' spacing={3} alignItems='center' color='#0397D6'>
                            <Icon as={FaBookOpen} />
                            <Text fontSize={15}>15 Minutes</Text>
                        </Stack>
                    </Box>
                    <Heading fontSize={[25, 28]} my='0'>{posts?.[0]?.title}</Heading>
                    <Text fontSize={16} lineHeight={8}>
                        <BlockContent blocks={posts?.[1]?.body} projectId='vyd7qavh' dataset='production' />
                    </Text>

                    <Stack color='#0397D6' fontSize={16} direction='row' alignItems='center' spacing={5}>
                        <Text>{posts?.[0]?.authorName}</Text>
                        <Box w='5px' h='5px' borderRadius='50%' bg='#0397D6'></Box>
                        <Text>{new Date(posts?.[0]?.publishedAt).toDateString()}</Text>
                    </Stack>
                </Box>
            </Stack>
        </Box>
        </Link>
    )
}