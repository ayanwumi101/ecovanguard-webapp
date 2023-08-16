import React from "react";
import ButtonLink from "../Button/button";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button, Box, Text, Image, Heading } from "@chakra-ui/react";

function ImgMsgBtn({
  msgHeader,
  msgBtn,
  btnLink = "",
  msgBody1,
  msgBody2,
  criteria,
  image,
}) {
  // swap = swap
  //   ? `${styles.section_container_swap}`
  //   : `${styles.section_container}`;
  return (
    <Box className={styles.section_wrapper} h="auto" mb="14">
      <Box className={styles.header} mb="12">
        <Heading>{msgHeader}</Heading>
      </Box>
      <div className={styles.section_container}>
        <div className={styles.section_message}>
          <Box className={styles.msgBody} mb="4" maxW="500px">
            <Text textAlign="justify" fontSize={16} lineHeight={9}>
              {msgBody1}
            </Text>
            <Text fontSize={16}>
              {msgBody2} <a href="#">{criteria}</a>
            </Text>
          </Box>
          <div className={styles.msgBtn}>
            <Link to={btnLink}>
              <Button bg="#0397d6" color="white" size="lg">
                {msgBtn}
              </Button>
            </Link>
          </div>
        </div>
        <Box className={styles.section_img} maxW="600px">
          <Image src={image} alt="Waste Disposal" w="100%" />
        </Box>
      </div>
    </Box>
  );
}

export default ImgMsgBtn;
