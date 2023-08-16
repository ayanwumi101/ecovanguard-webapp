import React from "react";
import ButtonLink from "../Button/button";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Heading, Text, Button, Box, Stack, Image } from "@chakra-ui/react";
import {Zoom, Slide, Fade} from 'react-reveal'

function ImgMsgBtn({
  msgHeader,
  msgBtn,
  msgBody1,
  msgBody2,
  btnLink = "",
  criteria,
  image,
  swap,
}) {
  swap = swap
    ? `${styles.section_container_swap}`
    : `${styles.section_container}`;
  return (
    <Box w='80%' mx='auto' mb={[14, 20]}>
          <Stack direction={['column-reverse', 'row']} justifyContent='space-between' alignItems='center'>
            <Zoom>
            <Box className={styles.section_img} mb='3' w={['320px', '500px']}>
                <Image src={image} alt="Waste Disposal" w='100%' />
              </Box>
            </Zoom>

            <Slide left>
              <Box className={styles.msgBody} mb='4' overflow='hidden' w={['320px', '500px']}>
                <Heading fontSize={[28, 30]} textAlign='center'>{msgHeader}</Heading>
                <Text mb='3' fontSize={16} lineHeight={9}>{msgBody1}</Text>
                <Text mb='3' fontSize={16} lineHeight={9}>
                  {msgBody2} <a href="#">{criteria}</a>
                </Text>
                <Box mx='auto'>
                  <Link to={btnLink}>
                    <Button bg='#0397d6' color='white' size='lg' w='200px' h='50px'>{msgBtn}</Button>
                  </Link>
                </Box>
              </Box>
            </Slide>
          </Stack>
    </Box>
  );
}

export default ImgMsgBtn;
