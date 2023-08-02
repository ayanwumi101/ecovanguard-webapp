import React, {useState, useEffect} from 'react'
import client from '../../client'
import {useParams, Link} from 'react-router-dom'
import styles from './styles.module.css'
import BlockContent from '@sanity/block-content-to-react';
import {FaArrowLeft} from 'react-icons/fa'
import { Heading, Text, Box, Image, Button } from '@chakra-ui/react';

const SinglePost = () => {

  const [singlePost, setSinglePost] = useState([]);
  const [loading, setLoading] = useState(true);
  const {slug} = useParams();

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
  }, [slug])
console.log(singlePost);
  return (

    <>
    {loading ? <h2>Loading ....</h2> : 
        <div className={styles.single_post_container}>
            <div className={styles.single_image_container}>
                {singlePost.mainImage && singlePost.mainImage.asset &&(
                    <Image src={singlePost.mainImage.asset.url} objectFit='cover' alt={singlePost.title} title={singlePost.title} />
                )}
            </div>

            {/* <div className={styles.hero_text}>
                <Heading fontSize={55} fontWeight='semibold'>{singlePost.title}</Heading>
            </div> */}


        <div className={styles.singlePost_details}>
            <div className={styles.heading}>
                <Heading>{singlePost.title}</Heading>
                <div className={styles.author_details}>
                    <Image src={singlePost.imageUrl} alt={singlePost.authorName} className={styles.author_image} />
                    <Text className={styles.author}>By: {singlePost.authorName}</Text>
                </div>
                <Text className={styles.posted}>Posted On: {new Date(singlePost.publishedAt).toDateString()}</Text>
            </div>

            <Box>
                <BlockContent blocks={singlePost.body} projectId='vyd7qavh' dataset='production' className={styles.content} />
            </Box>

            <Link to='/blog'>
            <Button className={styles.back_button} color='white' bg='#0397D6'>
                <FaArrowLeft/>
                <span>Back</span>
            </Button>
            </Link>
        </div>
        </div>}
    </>
  )
}

export default SinglePost