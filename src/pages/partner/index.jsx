import React from "react";
import "./index.css";
import ministryLogo from "../../assets/ministry-of-tech.jpg";
import nieeLogo from "../../assets/niee.jpg";
import urbanLogo from "../../assets/ibadan-urban.jpg";
import museumLogo from "../../assets/waste-museum.jpg";
import uiLogo from "../../assets/ui.jpg";
import leadLogo from "../../assets/lead-city.jpg";
import nseLogo from "../../assets/nse.jpg";
import nse2Logo from "../../assets/nse2.jpg";
import envLogo from "../../assets/fme.jpg";
import qalamLogo from "../../assets/al-qaalam.jpg";
import polyLogo from "../../assets/poly-high.jpg";
import fmeeLogo from "../../assets/fmee.jpg";
import Modal from "./modal";
import { Box, Heading, Text, Stack, HStack, Flex, Image } from "@chakra-ui/react";


const Partner = () => {
  return (
    <section>
      <div className="partner__bg-image">
        {/* <Zoom> */}
          <h4 className="heading">partners of nature</h4>
        {/* </Zoom> */}
        <Modal />
      </div>
      <main className="partners">
        {/* <Zoom> */}
          <Heading className="center" mt="8">
            Our Partners
          </Heading>
        {/* </Zoom> */}
        <Box className="partners__grid" maxW="850px" mx="auto" mt="10">
          {/* <Fade left> */}
            <Stack
              direction={['column', 'row']}
              spacing={6}
              // justifyContent='space-between'
              mb="6"
              bg="rgb(245, 245, 245)"
              p="7"
              borderRadius={10}
              justifyContent={['center', 'flex-start']}
              alignItems={['center', 'flex-start']}
            >
              <Image
                src={ministryLogo}
                alt="Federal Ministry of Science, Technology and Innovation's logo"
                w={['50%', '15%']}
                
                // width="120"
                // height="120"
              />
              <div className="partners__grid__box__text">
                <Heading fontWeight={600} fontSize="22px" mb="2">
                  Federal Ministry of Science, Technology and Innovation
                </Heading>
                <Text>Governmental Body</Text>
              </div>
            </Stack>
          {/* </Fade> */}

          {/* <Fade right> */}
            <Box
              mb="6"
              className="partners__grid__box"
              p="7"
              borderRadius={10}
              bg="rgb(245, 245, 245)"
            >
              <img
                src={nieeLogo}
                alt="Nigeria Institution of Environmental Engineers's logo"
                width="120"
                height="120"
              />
              <div className="partners__grid__box__text">
                <Heading fontWeight={600} fontSize="22px" mb="2">
                  Nigeria Institution of Environmental Engineers
                </Heading>
                <Text>Professionals Association</Text>
              </div>
            </Box>
          {/* </Fade> */}
{/* <Fade left> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <img
              src={urbanLogo}
              alt="Ibadan Urban Flood Management Project's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                Ibadan Urban Flood Management Project
              </Heading>
              <Text>Environmental protection Agency</Text>
            </div>
          </Box>
          {/* </Fade> */}

          {/* <Fade right> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <img
              src={museumLogo}
              alt="The Waste Museum (egbindoro), Ibadan's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                The Waste Museum (Egbindoro), Ibadan
              </Heading>
              <Text>Waste management organisation</Text>
            </div>
          </Box>
          {/* </Fade> */}

{/* <Fade left> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <Image
              src={uiLogo}
              alt="University Of Ibadan's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                University Of Ibadan
              </Heading>
              <Text>Nigerian University</Text>
            </div>
          </Box>
          {/* </Fade> */}

          {/* <Fade right> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <img
              src={leadLogo}
              alt="Lead City University's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                Lead City University, Ibadan
              </Heading>
              <Text>Nigerian University</Text>
            </div>
          </Box>
          {/* </Fade> */}

          {/* <Fade left> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <img
              src={nseLogo}
              alt="Nigeria Society of Engineers's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                Nigeria Society of Engineers
              </Heading>
              <Text>Professionals Association</Text>
            </div>
          </Box>
          {/* </Fade> */}

          {/* <Fade right> */}
          <Box
            mb="6"
            className="partners__grid__box"
            p="7"
            borderRadius={10}
            bg="rgb(245, 245, 245)"
          >
            <img
              src={envLogo}
              alt="Federal Ministry of Environment's logo"
              width="120"
              height="120"
            />
            <div className="partners__grid__box__text">
              <Heading fontWeight={600} fontSize="22px" mb="2">
                Federal Ministry of Environment
              </Heading>
              <Text>Governmental Body</Text>
            </div>
          </Box>
          {/* </Fade> */}
        </Box>
        <aside className="partners__list">
          <Heading className="center" mt="10" mb="8">
            All Partners
          </Heading>

          {/* <Zoom> */}
          <section>
            <Heading fontSize="25px" fontWeight="medium" mb="3">
              Education
            </Heading>
            <Flex justifyContent="space-between" mb="8" flexWrap='wrap'>
              <Image
                src={uiLogo}
                alt="University Of Ibadan's logo"
                width="150"
                height="150"
                m="4"
              />{" "}
              <Image
                src={leadLogo}
                alt="Lead City University's logo"
                width="150"
                height="150"
                m="4"
              />
              <Image
                src={qalamLogo}
                alt="Al-qalam school's logo"
                width="150"
                height="150"
                m="4"
              />
              <Image
                src={polyLogo}
                alt="Polytechnic high school's logo"
                width="150"
                height="150"
                m="4"
              />
            </Flex>
          </section>
          {/* </Zoom> */}

          {/* <Zoom> */}
          <section>
            <Heading fontSize="25px" fontWeight="medium" mb="3" mt="8">
              Governmental Bodies
            </Heading>
            <Flex justifyContent="space-between" mb="10" flexWrap='wrap'>
              <Image
                src={fmeeLogo}
                alt="Lead City University's logo"
                width="150"
                height="150"
                m="4"
              />
              <Image
                src={ministryLogo}
                alt="Federal Ministry of Science, Technology and Innovation's logo"
                width="150"
                height="150"
                m="4"
              />
              <Image
                src={envLogo}
                alt="Federal Ministry of Environment's logo"
                width="150"
                height="150"
                m="4"
              />
            </Flex>
          </section>
          {/* </Zoom> */}

          {/* <Zoom> */}
          <section>
            <Heading fontSize="25px" fontWeight="medium" mb="7">
              Non-governmental Organisations
            </Heading>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <Image
                src={museumLogo}
                alt="The Waste Museum (egbindoro), Ibadan's logo"
                width="150"
                height="150"
                m='4'
              />
              <Image
                src={nse2Logo}
                alt="Nigeria Society of Engineers's logo"
                width="150"
                height="150"
                m='4'
              />
              <Image
                src={urbanLogo}
                alt="Ibadan Urban Flood Management Project's logo"
                width="150"
                height="150"
                m='4'
              />
              <Image
                src={nieeLogo}
                alt="Nigeria Society of Engineers's logo"
                width="150"
                height="150"
                m='4'
              />
            </Flex>
          </section>
          {/* </Zoom> */}

        </aside>
      </main>
    </section>
  );
};

export default Partner;
