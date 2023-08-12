import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { FaCamera, FaArrowRight } from "react-icons/fa";
import TOWNS from "../../../data/towns";
import { Button, Input, FormControl, FormLabel, useToast, Select, Box, Heading } from "@chakra-ui/react";

const Form1 = ({ onNext, formData }) => {
  const toast = useToast();
  const [data, setData] = useState
  ({
    avatar: formData?.avatar ? formData?.avatar : null, 
    fullName: formData?.fullName ? formData.fullName : '', 
    email: formData?.email ? formData.email : '', 
    age: formData?.age ? formData.age : '', 
    city: formData?.city ? formData.city : '', 
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      setData((prevData) => ({ ...prevData, avatar: files[0] }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleNext = () => {
    if(data.age && data.avatar && data.fullName && data.email && data.city){
      onNext(data);
    }else{
      toast({
        title: 'Error!',
        description: "please fill all fields",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    }
  };
  

  return (
    <div className={styles.first_form_container}>
      <div className={styles.heading}>
        <Heading fontSize={25} fontWeight='medium'>Your Profile</Heading>
        <Heading fontSize={20} fontWeight='medium'>Personal Details</Heading>
      </div>
      <div className={styles.uploads_container}>
        <FormControl className={styles.form_container}>
          <div className={styles.image_upload}>
            <label htmlFor="upload" className={styles.upload}>
              <Input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                id="upload"
                name="avatar"
                onChange={handleChange}
              />
              <div className={styles.camera_container}>
                <FaCamera className={styles.camera} />
              </div>
            </label>
            <span>{data.avatar?.name}</span>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Input your full name"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              placeholder="Input your active email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              type="text"
              placeholder="Input your Age"
              name="age"
              value={data.age}
              onChange={handleChange}
            />
          </div>

          <Box mb='5'>
            <FormLabel>City or Town of Residence</FormLabel>
            <Select value={data.city} name='city' onChange={handleChange} placeholder="Select your city">
              {TOWNS.map((town) => <option key={town} value={town}>{town}</option>)}
            </Select>
          </Box>

          <Button type="submit" onClick={handleNext} bg='#0397d6' color='white' className={styles.submit_container} h='50px'>
            <span>Proceed</span>
            <FaArrowRight className={styles.arrow} />
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Form1;
