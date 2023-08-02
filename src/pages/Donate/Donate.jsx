import React from "react";
import earth from "../../assets/earth.svg";
import InputComponent from "../../components/Input/input";
import styles from "./styles.module.css";
import ButtonLink from "./../../components/Button/button";
import { Box, Heading, Text, Input, FormLabel, FormControl, Button, Checkbox } from "@chakra-ui/react";
import {Zoom, Fade} from 'react-reveal'

const Donate = () => {
  return (
    <Box className={styles.donate_container}>

      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
          <Fade left>
          <div className={styles.hero_text}>
            <h2>Our Aim</h2>
            <p>
              Getting the earth to <strong> greenest </strong> it has ever been
              through proper waste management and Eco-education before 2030.
            </p>
          </div>
          </Fade>
          <Zoom>
          <div className={styles.hero_image}>
            <img src={earth} alt="Earth" width="370" height="305" />
          </div>
          </Zoom>
        </div>
      </div>

      <Zoom><Heading className="center" my='5'>Donate to Nature</Heading></Zoom>

      <div className={styles.donation_sub_container}>
        <div className={styles.donation}>
          <div className={styles.questions}>
            <div className={styles.first}>
              <Zoom><Heading fontWeight='semibold' fontSize='25px' mb='3'>How can you help nature?</Heading></Zoom>
              <Fade left>
                <Text fontSize={17.5} mb='5' lineHeight={8}>
                  The least you can personally do for nature is ensuring that
                  every environment you find yourself is kept clean.
                </Text>
              </Fade>
              <Fade left>
                <Text fontSize={17.5} mb='4' lineHeight={8}>
                  You can do more by volunteering for the community development
                  and cleaning.
                </Text>
              </Fade>
              <Fade left>
                <Text fontSize={17.5} mb='5' lineHeight={8}>
                  Another way you can help nature is by funding organisations
                  whose sole purpose is to ensure the greenness and
                  Eco-friendliness of earth. Organizations like EcoVanguard.
                </Text>
              </Fade>
            </div>
            <div className={styles.second}>
              <Zoom><Heading fontWeight='semibold' fontSize='25px' mb='3'>How would my donations be spent</Heading></Zoom>
              <Fade left>
                <Text fontSize={17.5} mb='5' lineHeight={8}>
                  At EcoVanguard, our priorities are teaching the future
                  generation how to ensure proper waste management is carried out
                  and and creating an Eco-friendly environment through clean
                  cities.
                </Text>
              </Fade>

             <Fade left>
                <Text fontSize={17.5} mb='5' lineHeight={8}>
                  We ensure you that your donations will be spent on projects that
                  fulfil these purposes.
                </Text>
             </Fade>
            </div>
          </div>

          <div className={styles.card_details}>
            <Zoom>
            <form>
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <Input
                placeholder="Input the amount you want to donate"
                type="search"
                id="amount"
                mb='4'
                className={styles.input_size}
              />
              <div>
                <FormLabel htmlFor="name">Card Name</FormLabel>
                <Input
                  placeholder="Input card name"
                  type="search"
                  id="name"
                  mb='4'
                  className={styles.input_size}
                />
              </div>
             
              <div>
                <FormLabel htmlFor="amount">Card Number</FormLabel>
                <Input
                  placeholder="1234 5678 9012 3456"
                  type="number"
                  id="number"
                  className={styles.input_size}
                  bgImage="mastercard.svg"
                  mb='4'
                />
              </div>
              
              <div className={styles.card_pin}>
                <div>
                  <FormLabel htmlFor="amount">Expiry date</FormLabel>
                  <Input
                    type="number"
                    placeholder="MM / YY"
                    required
                    min="1"

                  />
                </div>

                <div>
                  <FormLabel htmlFor="number">CVV</FormLabel>
                  <Input
                    type="number"
                    placeholder="123"
                    required
                    min="1"
                  />
                </div>
              </div>
              <br />
              <div className={styles.card_save}>
                <Checkbox mb='3'>Save my card for later</Checkbox>
                {/* <FormLabel htmlFor="save" className="check">
                  Save my card
                </FormLabel>
                <div>
                  <input type="checkbox" id="save" required />
                </div> */}
              </div>
              <div>
                <Button type="submit" className={styles.donate_btn} bg='#0397d6' color='white' mb='4'>
                  Donate
                </Button>
                <Text className="center" fontSize={17}>
                  Powered by{" "}
                  <a
                    href="https://paystack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paystack
                  </a>
                </Text>
              </div>
            </form>
            </Zoom>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Donate;
