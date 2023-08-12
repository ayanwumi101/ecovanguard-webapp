import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import Alert, { ErrorAlert } from "../FormAlert/Alert";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Box, FormLabel, FormControl, Select, Button, Input, Heading, Text, useToast } from '@chakra-ui/react'
import ConfirmationModal from "../ConfirmationModal";

const Form2 = ({ onNext, onBack, formData, onSubmit, setFormData }) => {
  const toast = useToast();
  const [data, setData] = React.useState
    ({
      institution: formData?.institution,
      faculty: formData?.faculty,
      department: formData?.department,
      level: formData?.level,
      admission_year: formData?.admission_year,
      graduation_year: formData?.admission_year,
    });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };


  const openModal = () => {
    if (data.institution && data.faculty && data.department && data.level && data.admission_year && data.graduation_year) {
      setFormData((prevData) => ({ ...prevData, ...data }));
      setShowModal(true);
    } else {
      toast({
        title: 'Error!',
        description: "please fill all fields",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    }
  }


  return (
    <div className={styles.details_container}>
      {showModal && <ConfirmationModal setShowModal={setShowModal} onSubmit={onSubmit} />}
      <div className={styles.heading}>
        <Heading fontSize={30} fontWeight='medium'>Your Profile</Heading>
        <Heading fontSize={22} fontWeight='medium'>Details with club</Heading>
      </div>

      <div className={styles.form_container}>
        <FormControl action="">
          <div className={styles.form_control}>
            <FormLabel htmlFor="institution">Institution</FormLabel>
            <Select
              name="institution"
              id="institution"
              onChange={handleChange}
              value={data.institution}
              placeholder="Select your institution"
            >
              <option value="Polythecnic High School">
                University of Ibadan
              </option>
              <option value="Al Qalam Schools">Lead City University</option>
            </Select>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="faculty">Faculty</FormLabel>
            <Input
              placeholder="Input your faculty"
              name="faculty"
              id="faculty"
              value={data.faculty}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="department">Department</FormLabel>
            <Input
              name="department"
              id="department"
              onChange={handleChange}
              value={data.department}
              placeholder="Input your department"
            />
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="level">Level</FormLabel>
            <Select
              name="level"
              id="level"
              onChange={handleChange}
              value={data.level}
              placeholder="Select your level"
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
            </Select>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="admission_year">Year of Admission</FormLabel>
            <Select
              name="admission_year"
              id="admission_year"
              onChange={handleChange}
              value={data.admission_year}
            >
              <option value="select your position">
                Select your admission year
              </option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="graduation_year">Expected Year of Graduation</FormLabel>
            <Select
              name="graduation_year"
              id="graduation_year"
              onChange={handleChange}
              value={data.graduation_year}
            >
              <option value="select your position">
                Select your expected graduation year
              </option>
              <option value="20">2022</option>
              <option value="2016">2023</option>
              <option value="2017">2024</option>
              <option value="2018">2025</option>
              <option value="2019">2026</option>
              <option value="2020">2027</option>
              <option value="Other">Other</option>
            </Select>
          </div>

          <div className={styles.submit_container}>
            <Button onClick={onBack}>
              <FaArrowLeft style={{ marginRight: 5 }} /> Go Back
            </Button>
            <Button type="submit" onClick={openModal}>
              Submit <FaArrowRight style={{ marginLeft: 5 }} />
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default Form2;
