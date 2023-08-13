import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Input, Heading, Box, Stack } from "@chakra-ui/react";
import Hero from './subpages/BlogHero'
import FeaturedPosts from "./subpages/FeaturedPosts";
import BlogPosts from "./subpages/BlogPosts";
import client from "../../client";

const Index = () => {
   const [posts, setPosts] = useState([]);

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
         .then((data) => setPosts(data))
         .catch(console.error);
   }, []);

  return (
   <Box as='section' >
      <Hero posts={posts} />
      <Box w='90%' mx='auto'>
       <Stack spacing={16}>
          <FeaturedPosts posts={posts} />
          <BlogPosts posts={posts} />
       </Stack>
      </Box>
   </Box>
  );
};

export default Index;
