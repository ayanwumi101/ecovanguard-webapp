import { Box, Heading, Stack, Text, Icon } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import client from '../../../client'
import { FaBookOpen, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const PostDetails = ({posts}) => {
    const {slug} = useParams();
    const [singlePost, setSinglePost] = useState([]);
    const [loading, setLoading] = useState(true);

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

  return (
    <Box>
        <HeroSection singlePost={singlePost} />
        <PostBody singlePost={singlePost} />
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
            h={[470, 450]}
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
        <Box w='85%' mx='auto' lineHeight={8} fontSize={16}>
            <BlockContent blocks={singlePost?.body} projectId='vyd7qavh' dataset='production' />
            <Box w='100%' mx='auto' my='8' h='1px' bg='gray'></Box>
            <Stack direction='row' alignItems={['flex-start', 'center']} justifyContent='space-between'>
                <Box>
                    <Text my='0'>Written by:</Text>
                    <Text my='0' fontWeight='medium'>{singlePost?.authorName}</Text>
                    <Text my='0' fontWeight='medium'>{new Date(singlePost?.publishedAt).toDateString()}</Text>
                </Box>
                <Box>
                    <Stack direction={['column', 'row']} alignItems='center' spacing={5}>
                        <Text my='0' fontWeight='medium'>Share this article</Text>
                        <Stack direction='row' spacing={3} color='#0397D6'>
                            <Icon as={FaTwitter} />
                            <Icon as={FaInstagram} />
                            <Icon as={FaLinkedin} />
                            <Icon as={FaWhatsapp} />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}