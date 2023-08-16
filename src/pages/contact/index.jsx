import React, {useState} from "react";
import "./index.css";
import contactSrc from "../../assets/eco-contact.svg";
import InputComponent from "../../components/Input/input";
import ButtonLink from "../../components/Button/button";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Heading, Box, Text, Input, Button, FormLabel, Textarea, useToast, Checkbox, Spinner, Image, Stack } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade'
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import axios from 'axios'

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { message, firstname, lastname, email } = formData;
    if (message && firstname && lastname && email) {
      setSubmitting(true);
      try {
        // axios post to the url
        let req = await axios({
          url: `https://formspree.io/f/xbjvdrkk`,
          method: "post",
          headers: {
            Accept: "application/json",
          },
          data: { ...formData },
        });

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
        toast({
          title: "Success",
          description: "Message delivered. Thanks for your feedback!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        console.log("Error");
        // An alert to contact through a social medai, prolly twitter.
        toast({
          title: "Error submitting message",
          description: "Kindly reach us on twitter",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      console.log('please input something');
      toast({
        title: "Error",
        description: "Please fill all fields.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    return setTimeout(() => setSubmitting(false), 2000);
  };

  const inputTextHandler = (name, value) => {
    return setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  return (
    <Box w={['90%', '80%']} mx='auto'>
       <Box maxW='500px' mx='auto' textAlign='center' my='10'>
        <Zoom>
          <Heading mb="5" fontSize={30}>Contact Us</Heading>
        </Zoom>

        <Fade left>
          <Text fontSize={16} lineHeight={8}>
            In doubt of any issue or want to lodge a complaint? Or do you simply
            want to inform us? Let us know what you think. We would love to hear
            from you.{" "}
          </Text>
        </Fade>
       </Box>

        <Box w='100%' display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap' mt="8">
          <Box w={['450px', '450px']}>
            <Slide left>
              <form onSubmit={handleSubmit} method="post">
                <Box mb="3">
                  <FormLabel fontSize={15}>Firstname</FormLabel>
                  <Input
                    placeholder="Enter your firstname"
                    type="text"
                    fontSize={15}
                    name="firstname"
                    value={formData.firstname}
                    onChange={(e) => inputTextHandler("firstname", e.target.value)}
                    // required
                  />
                </Box>

                <Box mb="3">
                  <FormLabel fontSize={15}>Lastname</FormLabel>
                  <Input
                    placeholder="Enter your lastname"
                    type="text"
                    name="lastname"
                    fontSize={15}
                    value={formData.lastname}
                    onChange={(e) => inputTextHandler("lastname", e.target.value)}
                    // required
                  />
                </Box>

                <Box mb="5">
                  <FormLabel fontSize={15}>Your Email</FormLabel>
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    fontSize={15}
                    value={formData.email}
                    onChange={(e) => inputTextHandler("email", e.target.value)}
                    // required
                  />
                </Box>

                <Box>
                  <FormLabel fontSize={15}>what do you need help with</FormLabel>
                  <Textarea
                    placeholder="Type your message here"
                    name="message"
                    resize="none"
                    h="180px"
                    value={formData.message}
                    onChange={(e) => inputTextHandler("message", e.target.value)}
                  />
                </Box>
                <Button
                  type="submit"
                  w="100%"
                  h="50px"
                  my="3"
                  bg="#0397d6"
                  color="white"
                  isLoading={submitting}
                >
                  {submitting ? <Spinner size="md" /> : "Send Message"}
                </Button>
                <Box>
                  <Checkbox>I agree with the privacy policy</Checkbox>
                </Box>
              </form>
            </Slide>
            {/* <div className="contact__links"> */}

            {/* <Text mt="2" fontSize={16} w="100%" fontWeight='medium'>
              Reach out and follow us on social media
            </Text> */}

            {/* </div> */}
            {/* <Stack direction='row' justifyContent='center'>
              <i>
                <a href="https://www.linkedin.com/company/ecovanguard-club-ui/">
                  <FaLinkedin style={{fontSize: '25px'}} />
                </a>
              </i>
              <i>
                <a href="https://www.instagram.com/ui_ecovanguard_club/">
                  <FaInstagram style={{ fontSize: '25px' }} />
                </a>
              </i>
              <br />
              <br />
            </Stack> */}
          </Box>
          <Zoom>
            <Box w={['350px', '500px']} display={['none', 'block']}>
              <Image
                src={contactSrc}
                alt="Contact us illustration"
                w='100%'
              />
            </Box>
          </Zoom>
        </Box>
    </Box>
  );
};

export default Contact;
