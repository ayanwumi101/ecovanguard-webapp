import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import image from "../../assets/tree.svg";
import GoogleIcon from "../../assets/google_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import InputComponent from "../Input/input";
import ButtonLink from "../Button/button";
import { app } from "../../firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  useToast,
  Input,
  Button,
  Text,
  Heading,
  FormLabel,
  Box,
} from "@chakra-ui/react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const toast = useToast();

  const handleClick = () => {
    signInWithRedirect(auth, provider);
    // navigate("/")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (username && fullname && email && password) {
      try {
        const cred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await addDoc(collection(db, "user_data"), {
          user_name: username,
          full_name: fullname,
          user_id: cred.user.uid,
          email: email,
          date_joined: new Date().toDateString(),
        }).then(() => {
          setUsername("");
          setFullname("");
          setEmail("");
          setPassword("");
          navigate("/signin");
          signOut(auth);
          console.log("user signed out");
        });

        await sendEmailVerification(cred.user).then(() => {
          console.log("email sent");
        });

        toast({
          title: "Account created.",
          description: "Account created successfully!.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error!",
          description: error.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      toast({
        title: "Error!",
        description: "Please fill all fields correctly",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="signIn-wrapper">
      <Box mt="12">
        <div className="signIn-header">
          <Heading mb="5">Sign up to saving Nature</Heading>
          <Box mb="5">
            <Text>
              Already a member? <Link to="/signin">Sign in</Link>
            </Text>
          </Box>
        </div>

        <div className="signIn-container">
          <div className="signIn-form">
            <form>
              <Box className="details">
                <Box mb="3">
                  <FormLabel htmlFor="fullName">Username</FormLabel>
                  <Input
                    // className={"input-style"}
                    type="text"
                    name="fullName"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Input your username"
                    required
                  />
                </Box>

                <Box mb="3">
                  <FormLabel htmlFor="fullName">Full Name</FormLabel>
                  <Input
                    // className={"input-style"}
                    type="text"
                    name="fullName"
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    placeholder="Input your Full name"
                    required
                  />
                </Box>

                <Box mb="3">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Input your active e-mail"
                    required
                  />
                </Box>
                <Box mb="3">
                  <Box className="signIn-password no-margin-bottom">
                    <FormLabel htmlFor="password">Password</FormLabel>
                  </Box>
                  <Input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Input your password"
                    required
                  />
                </Box>
              </Box>
              <div className="policy-checkBox margin-block">
                <input type="checkbox" id="agree" checked />
                <FormLabel htmlFor="agree" className="check">
                  <Text fontSize={14}>
                    I agree to Ecovanguard's privacy policy
                  </Text>
                </FormLabel>
              </div>
              <div>
                <Button
                  className="full-width"
                  bg="#0397d6"
                  color="white"
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </div>
            </form>
            <div>
              <Button
                className="link-btn"
                onClick={handleClick}
                _hover={{ color: "white" }}
              >
                <img src={GoogleIcon} alt="Google icon" className="icons" />
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className={"signIn-img"}>
            <img
              src={image}
              alt="a vector, green tree with recycle bin"
              width={800}
              height={800}
            />
            <Text fontSize={18}>
              With your proper waste management, the earth can become greener
              than ever
            </Text>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Signup;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const toast = useToast();

  // auth.onAuthStateChanged((user) => {
  //   return setUser(user);
  // });

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password).then(() => {
          setEmail("");
          setPassword("");
          navigate("/");
        });
        toast({
          title: "Login Successful.",
          description: "successfully logged in!.",
          status: "success",
          duration: 2000,
          isClosable: true,
          variant: "top-accent",
          position: "top-right",
        });
      } catch (error) {
        console.log(error.message);
        toast({
          title: "Error!",
          description: error.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      toast({
        title: "Error!",
        description: "Please fill all fields correctly",
        status: "error",
        duration: 2000,
        isClosable: true,
        variant: "left-accent",
        position: "top",
      });
    }
  };

  const handleClick = () => {
    signInWithRedirect(auth, provider);
    // navigate("/")
  };

  return (
    <>
      <div className="signIn-wrapper">
        <Box mt="10">
          <div className="signIn-container">
            <div className="signIn-form">
              <div className="signIn-header">
                <Heading mb="3">Sign up to saving Nature</Heading>
                <Box mb="8">
                  <Text>
                    Not a member? <Link to="/signup">Sign up</Link>
                  </Text>
                </Box>
              </div>
              <form>
                <Box className="details">
                  <Box mb="3">
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Input your active e-mail"
                      required
                    />
                  </Box>
                  <Box mb="3">
                    <Box className="signIn-password no-margin-bottom">
                      <FormLabel htmlFor="password">Password</FormLabel>
                    </Box>
                    <Input
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Input your password"
                      required
                    />
                  </Box>
                </Box>
                <div>
                  <Button
                    className="full-width"
                    bg="#0397d6"
                    color="white"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </Button>
                </div>
                {/* <div>
                  <Button
                    className="link-btn"
                    onClick={handleClick}
                    _hover={{ color: "white" }}
                  >
                    <img src={GoogleIcon} alt="Google icon" className="icons" />
                    Sign in with Google
                  </Button>
                </div> */}
                <Box
                  className="policy-checkBox margin-block"
                  textAlign="right"
                  position="relative"
                >
                  <Link to="/password">
                    <Text
                      color="#0397d6"
                      textAlign="right"
                      position="absolute"
                      right="0"
                      fontSize={15}
                    >
                      Forgot password?
                    </Text>
                  </Link>
                  {/* <input type="checkbox" id="agree" checked />
                  <FormLabel htmlFor="agree" className="check">
                    <Text fontSize={14}>
                      I agree to Ecovanguard's privacy policy
                    </Text>
                  </FormLabel> */}
                </Box>
              </form>
            </div>
            <div className={"signIn-img"}>
              <img
                src={image}
                alt="a vector, green tree with recycle bin"
                width={800}
                height={800}
              />
              <Text fontSize={18}>
                With your proper waste management, the earth can become greener
                than ever
              </Text>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
