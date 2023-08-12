import React, {useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, Text, Heading, Box, Spinner, Image
} from '@chakra-ui/react'
import errorImg from '../../assets/errorImg.svg'

const ConfirmationModal = ({setShowModal, onSubmit}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true})
  const finalRef = React.useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try{
      await onSubmit();
      setLoading(false);
      setShowModal(false);
    }catch(err){
        console.log(err);
        setLoading(false);
    }
  }

  return (
      <>
          {/* <Modal onClose={onClose} isOpen={isOpen} isCentered closeOnOverlayClick={false}>
              <ModalOverlay />
              <ModalContent>
                  <ModalCloseButton onClick={() => setShowModal(false)} />
                  <ModalBody>
                      <Heading fontSize={25} textAlign='center' my='7'>Submission Confirmation</Heading>
                      <Box w='300px' mx='auto' textAlign='center'>
                          <Text>Are you sure you want to submit this form?</Text>
                      </Box>
                  </ModalBody>
                  <ModalFooter borderRadius='0px 0px 5px 5px'>
                      <Button onClick={() => setShowModal(false)} mr='7'>Cancel</Button>
                      <Button onClick={handleSubmit} colorScheme='teal'>
                            {loading ? <Spinner /> : 'Submit'}
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal> */}

          <Modal
              closeOnOverlayClick={false}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
          >
              <ModalOverlay />
              <ModalContent maxW="420px" bg="white" py="8" px="6">
                  <Box>
                      <ModalCloseButton onClick={() => setShowModal(false)} />
                      <ModalBody>
                          <Image src={errorImg} display="block" mx="auto" mb="3" />
                          <Box textAlign="center" mb="4">
                              <Heading fontWeight={600} fontSize="25px" mb="3">
                                Submission Confirmation!
                              </Heading>
                              <Text fontSize={14}>
                                  Are you sure you want to submit your registration?
                              </Text>
                          </Box>

                          <Box textAlign="center">
                              {/* <Link to="/"> */}
                                  <Button
                                      fontWeight="medium"
                                      fontSize={14}
                                      color="white"
                                      bg="#0397d6"
                                      onClick={handleSubmit}
                                  >
                                      {loading ? <Spinner /> : 'Yes Submit registration'}
                                  </Button>
                              {/* </Link> */}
                          </Box>
                      </ModalBody>
                  </Box>
              </ModalContent>
          </Modal>
      </>
  )
}

export default ConfirmationModal