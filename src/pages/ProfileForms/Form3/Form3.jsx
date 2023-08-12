import React, { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import Alert, { ErrorAlert } from "../FormAlert/Alert";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {Box, FormLabel, FormControl, Select, Button, Input, Heading, Text, useToast} from '@chakra-ui/react'
import ConfirmationModal from "../ConfirmationModal";

const Form3 = ({ onNext, onBack, formData, onSubmit, setFormData }) => {
  const toast = useToast();
  const [data, setData] = React.useState
    ({
      school_name: formData?.school_name,
      school_location: formData?.school_location,
      class: formData?.class,
      admission_year: formData?.admission_year,
      graduation_year: formData?.admission_year,
    });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, } = e.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
  };


  const openModal = () => {
    if (data.school_name && data.school_location && data.class && data.admission_year && data.graduation_year) {
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
        <h2>Your Profile</h2>
        <h4>Details with club</h4>
      </div>

      <div className={styles.form_container}>
        <FormControl action="">
          <div className={styles.form_control}>
            <FormLabel htmlFor="school_name">School Name</FormLabel>
            <Select
              name="school_name"
              id="school_name"
              onChange={handleChange}
              value={data.school_name}
            >
              <option value="select your class">Select your school</option>
              <option value="Polythecnic High School">
                Polythecnic High School
              </option>
              <option value="Al Qalam Schools">Al Qalam Schools</option>
              <option value="As-Sabaq College">As-Sabaq College</option>
            </Select>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="school_location">School's Location</FormLabel>
            <Select
              name="school_location"
              id="school_location"
              value={data.school_location}
              onChange={handleChange}
            >
              <option value="select your position">
                Select the location of your school
              </option>
              <option value="No 7, Farayola layout, Bodija Ibadan.">
                No 7, Farayola layout, Bodija Ibadan.
              </option>
              <option value="The polythecnic high school, Ijokodo, Ibadan">
                The polythecnic high school, Ijokodo, Ibadan.
              </option>
              <option value="Olounde estate, Eleyele/Eruwa road, Ologuneru Ibadan">
                Olounde estate, Eleyele/Eruwa road, Ologuneru Ibadan.
              </option>
            </Select>
          </div>

          <div className={styles.form_control}>
            <FormLabel htmlFor="class">Class</FormLabel>
            <Select
              name="class"
              id="class"
              onChange={handleChange}
              value={data.class}
            >
              <option value="select your class">Select your class</option>
              <option value="JSS1">JSS1</option>
              <option value="JSS2">JSS2</option>
              <option value="JSS3">JSS3</option>
              <option value="SS1">SS1</option>
              <option value="SS2">SS2</option>
              <option value="SS3">SS3</option>
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
              <FaArrowLeft style={{marginRight: 5}} /> Go Back
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

export default Form3;
