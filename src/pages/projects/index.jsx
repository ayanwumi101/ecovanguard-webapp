import React, { useState } from "react";
import { Heading, Text, Button, Box } from "@chakra-ui/react";
import Hero from "./subpages/Hero";
import OngoingProjects from "./subpages/OngoingProjects";
import ProjectsFooter from "./subpages/ProjectsFooter";
import ExecutedProjects from "./subpages/ExecutedProjects";

const Projects = () => {
  return (
   <Box>
      <Hero />
      <Box w='90%' mx='auto'>
        <OngoingProjects />
        <ExecutedProjects />
        <ProjectsFooter />
      </Box>
   </Box>
  );
};

export default Projects;
