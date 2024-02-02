import React from "react";
import AboutImgMsgBtn from "../../components/About-img-msg-btn";
// import "./style.css";
import membership from "../../assets/woman.svg";
import executives from "../../assets/man.svg";
import ourMissionLogo from "../../assets/delete.svg";
import ourVisionLogo from "../../assets/google_icon.svg";
import { Heading, Text, Box } from "@chakra-ui/react";
import Hero from "./subpages/Hero";
import About from "./subpages/About";


const AboutPage = () => {
  return (
    <Box as='section'>
      <Hero />
      <About />
    </Box>
  );
};

export default AboutPage;
