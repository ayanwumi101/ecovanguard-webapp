import React from "react";
import ModalComponent from "./modal";
import styles from "./executive.module.css";
import { EXECUTIVES, getExecutiveById } from "./executives-details";
import { Heading, Text, Image, Box, Button } from "@chakra-ui/react";
import {Zoom, Slide, Fade} from 'react-reveal'

const Executive = () => {
  const [allStates, setAllStates] = React.useState({
    executiveId: null,
    executiveData: {},
    showModal: false,
  });
  const setId = (id) => {
    setAllStates({
      executiveId: id,
      executiveData: getExecutiveById(id),
      showModal: true,
    });
  };
  return (
    <section className={styles.executive}>
      <Zoom><Heading className="center" my='5'>Our Executives</Heading></Zoom>
      <Fade left>
        <Text fontSize={19} mb='6'>
          The club's operations have been successful, thanks to her amiable
          executives, all the way from the National Executives down to the state
          executives, they have all been representing the club quite well.{" "}
        </Text>
      </Fade>
      <Box as='section' mb='8'> 
        <Heading fontWeight='semibold' fontSize={21}>University of Ibadan Executives.</Heading>
        <br />
        <div className="center">
          <div className={styles.executive__photos}>
            {EXECUTIVES.map((img) => (
              <Zoom>
              <Box
                className={styles.executive__photos__box}
                key={img.name}
                mb='4'
                bg='rgb(245, 245, 245)'
                p='3'
                boxShadow='md'
                borderRadius={5}
              >
                <Image
                  src={img.src}
                  alt={`${img.position},
                    EcoVanguard club`}
                    w={300}
                    h={230}
                    borderRadius={5}
                    mb='3'
                />
                <Heading fontSize={18} fontWeight='semibold' mb='2'>{img.name} </Heading>
                <Text mb='2' fontSize={17}>{img.position}</Text>
                <Button onClick={() => setId(img.id)} bg='#0397d6' color='white' fontWeight='medium' fontSize={15}>View profile</Button>
              </Box>
              </Zoom>
            ))}
            <ModalComponent setAllStates={setAllStates} allStates={allStates} />
          </div>
        </div>
      </Box>
      <section>
        <Heading fontWeight='semibold' fontSize={21}>Lead City University Executives.</Heading>
      </section>
    </section>
  );
};

export default Executive;
