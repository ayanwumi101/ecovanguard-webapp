import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import {BsBoxArrowDownRight} from 'react-icons/bs'
import { Link } from "react-router-dom";
import ButtonLink from "./../../components/Button/button";
import {Box, Button, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import {Zoom, Fade, Slide, Bounce} from 'react-reveal'

const FormOption = () => {
  return (
    <>
      <Box maxW='800px' mx='auto' my='5'>
        <Box mb='8' p='4'>
          <Box textAlign='center' lineHeight='20px' >
            <Bounce><Heading fontWeight='medium' fontSize={[28, 35]}>Become a Registered EcoVanguard Member</Heading></Bounce>
          </Box>

          <Fade left>
            <Box textAlign='justify' overflow='hidden'>
              <Text lineHeight={8} fontSize={18}>
                Are you interested in protecting the one thing you have in common
                with everyone? Are you ready to take a step ahead and be a part of
                the greener environment movement? Or you are intrigued by the beauty
                of nature? Why not seize the moment and take the environment to the
                next level? Join us today!
              </Text>
            </Box>
          </Fade>
          {/* <Heading>Be a member today!</Heading> */}
        </Box>

        <Heading textAlign='center' mb='8' fontWeight='medium'>Register As</Heading>
        <div className={styles.options}>
          <Link to="/create_account/secondary_school">
            <VStack mb='7'>
              <div>
                <AiOutlineUsergroupAdd className={styles.option_icon} />
              </div>
              <Button _hover={{ color: 'white' }} h='50px'>High school student</Button>
            </VStack>
          </Link>

          <Link to="/create_account/higher_institution">
            <VStack mb='7'>
              <div>
                <AiOutlineUser className={styles.option_icon} />
              </div>
              <Button _hover={{color: 'white'}} h='50px'>University student</Button>
            </VStack>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default FormOption;
