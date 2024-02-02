import React from "react";
import "./style.css";
import logo1 from "../../assets/edit-box.svg";
import logo2 from "../../assets/delete.svg";
import ProjectImg1 from "../../assets/ProjectImg1.jpg";
import ProjectImg2 from "../../assets/waste-bin-rounded.png";
import EventImg1 from "../../assets/EventImg1.png";
import EventImg2 from "../../assets/EventImg2.png";
import ButtonLink from "../../components/Button/button";
import ImageSlider from "../../components/carousel/";
import InputComponent from "../../components/Input/input";
import { Link } from "react-router-dom";
import { Box, Heading, Image, Text, Button, Input, Flex, Stack  } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import ImgMsgBtn from "../../components/About-img-msg-btn";
import leaf from '../../assets/leaf.png'
import globe from '../../assets/globes.png'
import monitor from '../../assets/monitor.png'
import ecoEducation from '../../../public/assets/eco-education.jpg'
import reformation from '../../../public/assets/environmental-reformation.jpg'
import nature from '../../../public/assets/greener-nature.jpg'
import volunteer from '../../../public/assets/volunteer.png'
import PublicationCard from "../Publications/subpages/PublicationCard";



function SimpleCarousel() {
  const slides = [
    {
      imgName: "environmental-reformation.jpg",
      title: "environmental reformation",
    },
    {
      imgName: "waste-management.jpg",
      title: "waste management",
    },
    {
      imgName: "eco-education.jpg",
      title: "eco-education",
    },
    {
      imgName: "greener-nature.jpg",
      title: "greener nature advocacy",
    },
  ];
  return (
    <section>
      <ImageSlider slides={slides} />
    </section>
  );
}



const HomePage = () => {
  return (
    <main style={{width: '100%', overflow: 'hidden', margin: 0, padding: 0, boxSizing: 'border-box'}}>
      <SimpleCarousel />
      <Quote />
      <WhatWeDo />
      <Slider />
      <Volunteer />
      <Publications />
    </main>
  );
};

export default HomePage;


const Quote = ( ) => {
  return (
    <Box w={['95%','70%']} mx='auto' my='14'>
      <Heading color='#4AAA42' fontSize={['70px','120px']} fontWeight={900} m='0' p='0'>“</Heading>
      <Heading fontSize={[25, 56]} fontWeight='medium' mt='0' p='0' textAlign='center' lineHeight={['40px','70px']}>
          Every small eco-friendly choice <br /> you make today can create a <br /> greener and brighter tomorrow for <br /> our planet
      </Heading>
      <Heading color='#4AAA42' fontSize={['70px','120px']} fontWeight={900} m='0' p='0' textAlign='right'>“</Heading>

      <Box textAlign='center'>
        <Heading m='0' fontSize={[24,24]} fontWeight='medium'>Testimony Akpunwoke</Heading>
        <Text color='#787579' fontSize={16}>President, Ecovanguard Club.</Text>
      </Box>
    </Box>
  )
}



const WhatWeDo = () => {
  return (
    <Box w={['90%', '70%']} mx='auto' mb='16'>
      <Box mb='8' textAlign={['center', 'left']}>
        <Heading fontSize={32}>What we do</Heading>
      </Box>

      <Box h={['auto', 'auto', '700px']} display='flex' justifyContent='space-between' flexWrap='wrap'>
        <Box w='400px' h='100%'>
          <Flex flexDirection='column'>
            <Box w='100%' h='230px'>
              <Heading fontWeight='medium' fontSize={26} m='0'>Eco-education</Heading>
              <Text fontSize={16} lineHeight={8}>
                An eco-friendly environment should be paramount to everybody. As such, 
                we enlighten and educate individuals and students on the importance of 
                maintaining a greener environment.
              </Text>
            </Box>
            <Box w='100%' h='230px'>
              <Image src={reformation} w='100%' boxShadow='md' objectFit='contain' borderTopLeftRadius='60px' borderBottomRightRadius='60px' />
            </Box>
            <Box w='100%' h='230px'>
              <Heading fontWeight='medium' fontSize={26}>Greener Earth Advocacy</Heading>
              <Text fontSize={16} lineHeight={8}>
                Greener Earth is our main focus and can be best achieved by collective efforts. Through our voices and actions, we are hopeful of being able to push for the desired earth. 
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box position='relative' display={['none', 'none', 'block']}>
          <Box w='1px' h='100%' bg='lightgray' position='absolute'></Box>
          <Box display='flex' flexDirection='column' justifyContent='flex-start' h='100%' position='absolute' left='-27px'>
            <Box w='100px' h='220px'>
              <Image src={monitor} />
            </Box>
            <Box h='220px'>
              <Image src={globe} />
            </Box>
            <Box>
              <Image src={leaf} />
            </Box>
          </Box> 
        </Box>
        
        <Box w='400px' h='100%'>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Box w='100%' h='230px' m='0'>
              <Image src={ecoEducation} w='100%' boxShadow='md' objectFit='contain' borderTopLeftRadius='60px' borderBottomRightRadius='60px' />
            </Box>
            <Box w='100%' h='230px' mb='6'>
              <Heading fontWeight='medium' fontSize={26}>Environmental Reformation</Heading>
              <Text fontSize={16} lineHeight={8}>
                Environmental degradation in the world is becoming more rampant and conscious efforts are expected to be taken in order to eliminate this and reform the environment.
              </Text>
            </Box>
            <Box w='100%' h='230px'>
              <Image src={nature} w='100%' boxShadow='md' objectFit='contain' borderTopLeftRadius='60px' borderBottomRightRadius='60px' />
            </Box>
          </Flex>
        </Box>
      </Box>
      
    </Box>
  )
}


const Slider = () => {
  const schools = ['Assabaq College', 'Imam Zubair', 'University of Ibadan', 'Lead City University']
  return (
    <Box w='100%' mb='14'>
      <Box textAlign='center'>
        <Heading fontSize={[30,35]}>20+ Institutions Represented</Heading>
      </Box>

      <Box bg='#4AAA42' overflow='auto' w='100%' h='77px' display='flex' alignItems='center'>
        {/* <marquee behavior="" direction=""> */}
        <Flex alignItems='center' w='80%' mx='auto' justifyContent={['space-between','space-between']}>
          
          {schools.map((item) => {
            return (
              
                <Box textAlign='center' w='180px' ><Text color='white' w={['180px']} fontSize={18}>{item}</Text></Box>
              
            )
          })}
          
        </Flex>
        {/* </marquee> */}
      </Box>
    </Box>
  )
}


const Volunteer = () => {
  return (
    <Box w={['90%', '70%']} mx='auto' mb='14'>
      <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
        <Box w='450px' mb='12'>
          <Text fontSize={16} lineHeight={8}>
            Ecovanguard club gives its member an opportunity to represent the earth, make the earth a greener healthier and cleaner world for its present and future residents
          </Text>
          <Button bg='#0397D6' color='white' fontWeight='normal' size='lg' fontSize={15}>Become a Memeber</Button>
        </Box>
        <Box w='400px'>
          <Image src={volunteer} />
        </Box>
      </Flex>
    </Box>
  )
}


const Publications = () => {
  return (
    <Box mb='14' w={['95%', '70%']} mx='auto'>
      <Box textAlign='center' mb='10'>
        <Heading fontSize={34}>Recent Publications</Heading>
      </Box>
      <Box>
        <Flex justifyContent={['center','space-between']} alignItems='center' flexWrap='wrap'>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </Flex>
      </Box>
    </Box>
  )
}