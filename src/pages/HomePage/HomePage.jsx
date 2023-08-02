import React from "react";
import "./style.css";
import logo1 from "../../assets/edit-box.svg";
import logo2 from "../../assets/delete.svg";
import ProjectImg1 from "../../assets/ProjectImg1.jpg";
import ProjectImg2 from "../../assets/waste-bin-rounded.png";
import EventImg1 from "../../assets/EventImg1.png";
import EventImg2 from "../../assets/EventImg2.png";
import ButtonLink from "../../components/Button/button";
import ImageSlider from "../../components/carousel/";
import InputComponent from "../../components/Input/input";
import { Link } from "react-router-dom";
import { Box, Heading, Image, Text, Button, Input, Flex, Stack  } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import ImgMsgBtn from "../../components/About-img-msg-btn";


function SimpleCarousel() {
  const slides = [
    {
      imgName: "environmental-reformation.jpg",
      title: "environmental reformation",
    },
    {
      imgName: "waste-management.jpg",
      title: "waste management",
    },
    {
      imgName: "eco-education.jpg",
      title: "eco-education",
    },
    {
      imgName: "greener-nature.jpg",
      title: "greener nature advocacy",
    },
  ];
  return (
    <section>
      <ImageSlider slides={slides} />
    </section>
  );
}

function SecondSection(props) {
  return (
    <div className="section2-wrapper">
      <div className="section2-container">
        <div className="center">
          <Heading mt='5'>What we do</Heading>
        </div>
        <div className="section2-body">
          <div className="top">
            <Slide left>
            <div className="sect2-msg msg1">
              <Image src={logo1} display='block' mx='auto' mb='4' alt="icon for education" />
              <div>
                <Heading textAlign='center' mb='3' fontWeight='medium' fontSize={32}>Education</Heading>
                  <Text fontSize={18} textAlign='justify' lineHeight={8}>
                  We educate secondary school and tertiary institution students
                  on the importance of proper waste management practices and
                  advocate for an eco-friendly environment and the
                  implementation of a circular economy.
                </Text>
              </div>
            </div>
            </Slide>

            <Slide right>
            <div className="sect2-msg msg2">
              <Image src={logo2} alt="" display='block' mx='auto' mb='4' />
              <div>
                  <Heading textAlign='center' mb='3' fontWeight='medium' fontSize={32}>Waste Management</Heading>
                  <Text lineHeight={8} textAlign='justify' fontSize={18}>
                  We advocate having a clean city which in turn leads to having
                  a greener earth leading to an eco-friendly environment and the
                  implementation of a circular economy.
                </Text>
              </div>
            </div>
            </Slide>

          </div>

          <div className="bottom">
          <Slide left>
            <div className="sect2-msg msg3">
              <Image src={logo1} alt="" display='block' mx='auto' mb='4' />
              <div>
                  <Heading textAlign='center' mb='3' fontWeight='medium' fontSize={32}>Education</Heading>
                  <Text textAlign='justify' lineHeight={8} fontSize={18}>
                  We educate secondary school and tertiary institution students
                  on the importance of proper waste management practices and
                  advocate for an eco-friendly environment and the
                  implementation of a circular economy.
                </Text>
              </div>
            </div>
          </Slide>

            <Slide right>
            <div className="sect2-msg msg4">
              <Image src={logo2} alt="" display='block' mx='auto' mb='4' />
              <div>
                  <Heading textAlign='center' mb='3' fontWeight='medium' fontSize={32}>Waste Management</Heading>
                  <Text textAlign='justify' lineHeight={8} fontSize={18}>
                  We advocate having a clean city which in turn leads to having
                  a greener earth leading to an eco-friendly environment and the
                  implementation of a circular economy.
                </Text>
              </div>
            </div>
            </Slide>
          </div>
        </div>
        <div className="center">
          <Link to="/about">
            <Button size='lg' bg='#0397d6' h='55px' color='white'>About the Club</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ThirdSection() {
  return (
    <Box className="section3-wrapper" mt='14' mb='16'>
      <div className="section3-container">
        <Zoom>
        <div className="sect3-header">
          <Heading>Our Members</Heading>
        </div>
        </Zoom>

        <div className="sect3-body">
          <Slide left>
          <div className="sec-sch">
            <div>73</div>
            <h3 style={{fontSize: '28px'}}>Secondary Schools</h3>
          </div>
          </Slide>

          <Zoom>
          <div className="all-members">
            <div className="center">73</div>
            <h3 style={{ fontSize: '28px' }}>All members</h3>
          </div>
          </Zoom>

          <Slide right>
          <div className="tert-inst">
            <div>73</div>
            <h3 style={{ fontSize: '28px' }}>Tertiary Institutions</h3>
          </div>
          </Slide>
        </div>
        <div className="center">
          <Link to="/signup">
            <Button size='lg' w='200px' h='55px' bg='#0397d6' color='white'>Join Us</Button>
          </Link>
        </div>
      </div>
    </Box>
  );
}

function FourthSection() {
  return (
    <div>
      <Heading textAlign='center' fontSize={[35, 40]} mb='14'>Our Projects</Heading>
      <Zoom>
      <ImgMsgBtn
        mainHeader={"Our Projects"}
        msgHeader={"EcoVanguard Projects"}
        msgBody1={
          "All Ecovanuard’s Projects are focused on one aim - to make the earth a better place for everyone to live in.With our projects, we want to make the environment- land, water and air more habitable and toxic free."
        }
        msgBtn={"See Projects"}
        btnLink="/projects"
        image={ProjectImg1}
        swap={true}
      />
      </Zoom>

      <Slide right>
      <ImgMsgBtn
        msgHeader={"Ongoing Project"}
        msgBody1={
          "The EcoVanguard club is currently working towards donating 200 pieces of this set of waste disposal system to the University of Ibadan. We believe this will aid proper waste management in the University environment and lead to an overall clean and healthy environment. "
        }
        msgBtn={"Fund Project"}
        btnLink="/donate"
        image={ProjectImg2}
        swap={false}
      />
      </Slide>

      <Zoom>
      <ImgMsgBtn
        mainHeader={"Events"}
        msgHeader={"Last Event"}
        msgBody1={
          "During the last “World Water Day” which happened on 26th March 2022, the Ecovanguard club members  in Ibadan led by the club’s Patron Engineer W.O Ajagbe attended their  first official outing the Engr Bola Ige annual lecture at the NSE headquarters Ibadan. read more..."
        }
        msgBtn={"Gallery"}
        btnLink="/gallery"
        image={EventImg1}
        swap={true}
      />
      </Zoom>

      <Zoom>
      <ImgMsgBtn
        mainHeader={"Our Next Day Out"}
        msgHeader={"Bodija Market"}
        msgBody1={
          "Ecovanguard club in conjuction with the CIA (Clean Ibadan Ambassador) will be visiting the Bodija Market to enlighten the marketers on the side effects of improper waste disposal on the society and the earth in general, we will also provide them with waste bins."
        }
        msgBtn={"Join this Campaign"}
        image={EventImg2}
        swap={false}
      />
      </Zoom>
    </div>
  );
}
function NewsletterComponent() {
  return (
    <div className="center">
      <Fade right>
        <Stack>
          <Box mb='2'>
            <Text style={{ color: "#3a3a3a" }} mb='3' fontSize={18}>
              Subscribe to our newsletter to get the latest update about nature and
              the ecosystem
            </Text>
          </Box>

          <Stack direction={['column', 'row']} w={['350px', '550px']} mx='auto' spacing={[4, 0]}>
            <Input
              type="email"
              placeholder="e.g ecovanguard@gmail.com"
              size='lg'
            />
            <Button type="submit" size='lg' bg='#0397d6' color='white'>Subscribe</Button>
          </Stack>
        </Stack>
     
      {/* <Box maxW='600px' mx='auto' flexWrap='wrap' px='2'>
       <Flex gap={4} alignItems='center'>
          
       </Flex>
      </Box> */}
      </Fade>
    </div>
  );
}
const HomePage = () => {
  return (
    <main>
      <SimpleCarousel />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <NewsletterComponent />
    </main>
  );
};

export default HomePage;
