import { Box, Heading, Stack, Text, Icon, Flex, Image } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import client from '../../../client'
import { FaBookOpen, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import BlogCard from './BlogCard'

const PostDetails = ({posts}) => {
    const {slug} = useParams();
    const [singlePost, setSinglePost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"]{
                title,
                body,
                mainImage{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                "authorName": author -> name,
                "imageUrl": author -> image.asset -> url,
                publishedAt,
            }`
        ).then((data) => setSinglePost(data[0]));
        setLoading(false)
    }, [slug]);


    useEffect(() => {
        client
            .fetch(
                `*[_type == 'post']{
          title,
          slug,
          body,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          "authorName": author -> name,
          "authorImage": author -> image.asset -> url,
        }`
            )
            .then((data) => setBlogPosts(data))
            .catch(console.error);
    }, []);


  return (
    <Box>
        <HeroSection singlePost={singlePost} />
        <PostBody singlePost={singlePost} />
        <OtherPosts blogPosts={blogPosts} slug={slug} />
    </Box>
  )
}

export default PostDetails

export const HeroSection = ({singlePost}) => {
    return (
        <Box
            bgImage={singlePost?.mainImage?.asset?.url}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
            w='100%'
            h={[480, 480]}
            display='flex'
            alignItems='center'
            justifyContent='center'
            mb='12'
        >
            <Box backgroundColor='rgba(0,0,0,0.75)' zIndex='2' w='100%' h='100%' mx='auto' display='flex' alignItems='center' justifyContent='center'>
                <Box maxW='800px' px={[5, 0]}>
                    <Stack direction='row' spacing={3} alignItems='center' color='white' justifyContent='center' my='0'>
                        <Icon as={FaBookOpen} />
                        <Text fontSize={15}>15 Minutes</Text>
                    </Stack>
                    <Box textAlign='center' color='white' mb='2'>
                        <Heading fontSize={[35, 38]} mt='0'>{singlePost?.title}</Heading>
                        <Text maxW={550} mx='auto'>Find articles published about environmental based issues and events surrounding the club.</Text>
                    </Box>
                    <Box>
                        <Stack color='white' fontSize={16.5} fontWeight='medium' direction='row' alignItems='center' spacing={3} justifyContent='center'>
                            <Text>{singlePost?.authorName}</Text>
                            <Box w='5px' h='5px' borderRadius='50%' bg='white'></Box>
                            <Text>{new Date(singlePost?.publishedAt).toDateString()}</Text>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export const PostBody = ({singlePost}) => {
    return (
        <Box w='85%' mx='auto' lineHeight={8} fontSize={16} mb='12'>
            <BlockContent blocks={singlePost?.body} projectId='vyd7qavh' dataset='production' />
            <Box w='100%' mx='auto' my='8' h='1px' bg='gray'></Box>
            <Stack direction='row' alignItems={['flex-start', 'center']} justifyContent='space-between'>
                <Box>
                    <Text my='0'>Written by:</Text>
                    <Text my='0' fontWeight='medium'>{singlePost?.authorName}</Text>
                    <Text my='0'>{new Date(singlePost?.publishedAt).toDateString()}</Text>
                </Box>
                <Box>
                    <Stack direction={['column', 'row']} alignItems='center' spacing={5}>
                        <Text my='0' fontWeight='medium'>Share this article</Text>
                        <Stack direction='row' spacing={3} color='#0397D6'>
                            <Icon as={FaTwitter} fontSize={20} />
                            <Icon as={FaInstagram} fontSize={20} />
                            <Icon as={FaLinkedin} fontSize={20} />
                            <Icon as={FaWhatsapp} fontSize={20} />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}


export const OtherPosts = ({blogPosts, slug}) => {
    const filteredPosts = blogPosts.filter((post) => post.slug.current !== slug);
    return (
        <Box w={['100%', '85%']} mx='auto'>
        <Box mb='7'>
            <Heading fontSize={[25, 30]}>Check these articles.</Heading>
        </Box>
        <Box display='flex' mx='auto' justifyContent='space-between' alignItems='center' overflowX='auto' gap={10}>
                {filteredPosts.map((post) => {
                    const truncatedBody = post?.body?.[0]?.children[0]?.text.substring(0, 120) + '...';
                    return (
                    <Box w='300px' h='490px' borderRadius={16} mb='40px' boxShadow='lg'>
                        <Link to={`/blog/${post?.slug?.current}`}>
                            <Box w='300px'>
                                <Image src={post?.mainImage?.asset?.url} borderRadius='16px 16px 0 0' objectFit='cover' w='100%' h='250px' />
                            </Box>
                            <Box px='4' py='2'>
                                <Stack direction='row' spacing={3} alignItems='center' color='#0397D6'>
                                    <Icon as={FaBookOpen} />
                                    <Text fontSize={15}>15 Minutes</Text>
                                </Stack>
                                <Heading fontSize={20} my='0'>{post.title.substring(0, 31)}...</Heading>
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
                    </Box>)
                }
                )}
        </Box>
        </Box>
    )
}