import React from "react";
import DialogComponent from "../../components/Dialog";
import "./modal.css";


// to ensure the image src passed as a prop from executive.js maintains a valid import in this file, I didn't create a folder for the modal.js and modal.css files
import ButtonLink from "../../components/Button/button";
import { Button, Text, Heading, Image, Box } from "@chakra-ui/react";

const ModalComponent = ({
  setAllStates,
  allStates: { executiveData, showModal },
}) => {
  const closeModal = () => {
    setAllStates((prevState) => {
      return {
        ...prevState,
        showModal: false,
      };
    });
  };
  let Alt = `${executiveData.position}, EcoVanguard club`;
  return (
    <>
      {showModal && (
        
        <DialogComponent
          label="EcoVanguard club's executives details"
          closeDialog={closeModal}
        >
          {/* <Zoom> */}
          <div className="dialog__container">
            <Box className="dialog__img" mb='5'>
              <Image src={executiveData.src} alt={Alt} width={400} height={300} mb='3' display='block' mx='auto' borderRadius={10} />
              {/* semantic styles from App.css: normal-weight... */}
                <Heading className="normal-weight disable-margin-top" fontWeight='semibold' fontSize={20} textAlign='center' mb='3'>
                  {executiveData.name}
                </Heading>
                <Heading fontSize={19} textAlign='center' fontWeight='semibold' mb='3' ontWeight='semibold' className="normal-weight disable-margin-top">{Alt}</Heading>
                <Text textAlign='center' fontSize={17}>{executiveData.title} at University of Ibadan</Text>
            </Box>
            <div className="dialog__details">
              {/* semantic styles from App.css: normal-weight... */}
              <Text fontSize={17} lineHeight={8}>{executiveData.about}</Text>
            </div>
          </div>
          <br />
          <div className="center">
            <Button bg='#0397d6' size='lg' color='white' onClick={closeModal}>Close</Button>
          </div>
          {/* </Zoom> */}
        </DialogComponent>
      )}
    </>
  );
};

export default ModalComponent;
