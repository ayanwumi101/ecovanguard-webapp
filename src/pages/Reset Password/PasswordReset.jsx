import React from "react";
import {
  Box,
  FormControl,
  Text,
  Input,
  Spinner,
  Heading,
  VStack,
  FormLabel,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
// import {IconArrowBack, IconArrowLeft} from '@tabler/icons'
import { Link } from "react-router-dom";
import Confirmation from "./Confirmation";
import NewPassword from "./NewPassword";
import PasswordSuccess from "./PasswordSuccess";

const PasswordReset = () => {
  return (
    <VStack mx={"auto"} maxW="420px" mt="9" spacing={10}>
      <Box>{/* <Image src={logo} alt='Iwello-Logo' /> */}</Box>

      <Box textAlign={"center"}>
        <Heading size={"lg"} mb="4">
          Forgot Password?{" "}
        </Heading>
        <Text>No worries, we will send you a password reset instruction</Text>
      </Box>

      <FormControl mt="9">
        <Box mb="5">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="please input your email" />
        </Box>
        <Box>
          <Button
            type="submit"
            backgroundColor={"#6d40e5"}
            w="100%"
            letterSpacing={"1.5px"}
          >
            Reset Password
          </Button>
        </Box>
      </FormControl>

      <Box color="#6d40e5">
        <Link to="/signin">
          <Flex gap="5" cursor={"pointer"}>
            {/* <IconArrowLeft /> */}
            <Text>Back to login</Text>
          </Flex>
        </Link>
      </Box>
    </VStack>
  );
};

export default PasswordReset;
