import React, {useState} from 'react'
import Form1 from './Form1/Form1';
import Form3 from './Form3/Form3';
import {
 Box, useToast
} from '@chakra-ui/react'
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, } from 'firebase/storage'
import { useNavigate } from 'react-router-dom';
import FormHeader from "./FormHeader";
import Stepper from './Stepper'


const FormContainer2 = () => {
  const toast = useToast();
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = async() => {
    try{
      const avatarRef = ref(storage, auth.currentUser.uid);
      await uploadBytes(avatarRef, formData.avatar).then(() => {
        console.log('avatar uploaded');
      });

      const colref = collection(db, 'registered_users_data');
      await addDoc(colref, {
        full_name: formData.fullName,
        email: formData.email,
        age: formData.age,
        city: formData.city,
        school_name: formData.school_name,
        school_location: formData.school_location,
        class: formData.class,
        admission_year: formData.admission_year,
        graduation_year: formData.graduation_year,
        user_id: auth.currentUser.uid,
      }).then(() => {
        setFormData({});
        toast({
          title: 'Success!',
          description: "You have successfully registered as an ecovanguard member",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top'
        });
        navigate('/profile');
        localStorage.removeItem('formData');
      });

    }catch(error){
      console.log(error)
    }
  };

  React.useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  console.log(formData);

  return (
    <Box w='100%' mx='auto'>
      <Box mb='8'>
        <FormHeader step={step} />
        <Stepper step={step} />
      </Box>
      {step === 1 && <Form1 onNext={handleNext} formData={formData} />}
      {step === 2 && <Form3 onNext={handleNext} onBack={handleBack} onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />}
    </Box>
  )
}

export default FormContainer2