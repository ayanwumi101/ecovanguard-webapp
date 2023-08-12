import React from "react";
import { Routes, Route } from "react-router-dom";
import { Input, Heading, Box, Stack } from "@chakra-ui/react";
import Hero from './subpages/BlogHero'
import FeaturedPosts from "./subpages/FeaturedPosts";
import BlogPosts from "./subpages/BlogPosts";

const Index = () => {
  return (
   <Box as='section' >
      <Hero />
      <Box w='90%' mx='auto'>
       <Stack spacing={16}>
          <FeaturedPosts />
          <BlogPosts />
       </Stack>
      </Box>
   </Box>
  );
};

export default Index;
