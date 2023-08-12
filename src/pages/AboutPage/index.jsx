import React from "react";
import AboutImgMsgBtn from "../../components/About-img-msg-btn";
import "./style.css";
import membership from "../../assets/woman.svg";
import executives from "../../assets/man.svg";
import ourMissionLogo from "../../assets/delete.svg";
import ourVisionLogo from "../../assets/google_icon.svg";
import { Heading, Text, Box } from "@chakra-ui/react";
import { Zoom, Fade, Slide } from "react-reveal";


function AboutFirstSection() {
  return (
    <div className="abt-section1-wrapper">
      <div className="abt-section1-container">
        <Zoom>
        <div className="center">
          <Heading my='5'>About EcoVanguard</Heading>
        </div>
        </Zoom>
        <div className="abt-section1-body">
          <Fade left>
          <div className="abt-section1-firstMessage">
            <Heading fontWeight='semibold' fontSize='22px'>About the Club</Heading>
            <Text fontSize={18} lineHeight={8}>
              EcoVanguard Club is a grassroots student-led club affiliated to
              the Clean Ibadan Ambassadors (CIA) programme. The purpose is to
              educate both the secondary and higher institution students on the
              importance of proper waste management; advocate for an
              eco-friendly environment and the implementation of a circular
              economy. The youths are the future. Introducing them early to
              these concepts prepares them as change-makers who are capable of
              creating a zero-waste future.
            </Text>
          </div>
          </Fade>

          <div className="abt-section1-secondMessage">
            <Zoom><Heading fontWeight='semibold' fontSize='22px' mb='4'>Club Objectives</Heading></Zoom>
            <Slide left>
            <ol style={{fontSize: '18px'}}>
              <li>
                Increase awareness among students and staff of the school on
                environmental issues.
              </li>
              <li>
                Assist faculty, staff, administration and students to become
                better stewards of the environment.
              </li>
              <li>Improve waste management practices in Ibadan.</li>
              <li>
                Introduce students and staff of the school to the concept of
                circular economy.
              </li>
            </ol>
            </Slide>
          </div>

          <Box className="abt-section1-thirdMessage" overflow='hidden' p='2'>
            <Slide right><Heading fontWeight='semibold' fontSize='22px' mb='5'>What We Do</Heading></Slide>
            <Box>
              <ol>
                <li>
                  <Slide left><Heading fontWeight='semibold' fontSize='19px' mb='2'>Eco-Education</Heading></Slide>
                  <Zoom>
                  <Text fontSize={18} lineHeight={8}>
                    An eco-friendly environment should be paramount to
                    everybody. As such, we enlighten and educate individuals and
                    students on the importance of maintaining a greener
                    environment. EcoVanguard also has the mandate to inform the
                    public of the dangers of keeping a poor environment. Also,
                    we do not relent in making available on our various
                    platforms the best practices of maintaining our environment
                    to become more habitable for all and sundry.
                  </Text>
                  </Zoom>
                </li>
                <li>
                  <Slide left><Heading fontWeight='semibold' mb='2' fontSize='19px'>Environmental Reformation</Heading></Slide>
                  <Zoom>
                  <Text fontSize={18} lineHeight={8}>
                    Environmental degradation in the world is becoming more
                    rampant and conscious efforts are expected to be taken in
                    order to eliminate this and reform the environment.
                    EcoVanguard members come together to interact together to
                    develop more environmentally friendly technologies and
                    innovative techniques for resource and waste management. We
                    promote the concept of sustainable development in our own
                    little way.
                  </Text>
                  </Zoom>
                </li>
                <li>
                  <Slide left><Heading fontWeight='semibold' mb='2' fontSize='19px'>Waste Management</Heading></Slide>
                  <Zoom>
                    <Text fontSize={18} lineHeight={8}>
                      Suitable waste management practices have become challenging
                      due to our consumption behaviour and changing socioeconomic
                      condition. We therefore educate the public on the best
                      mechanisms employable in the disposal and management of our
                      wastes. We also encourage individuals to employ the usual Rs
                      of waste management to ensure a more friendly environment.
                    </Text>
                  </Zoom>
                </li>
                <li>
                  <Slide left><Heading fontWeight='semibold' mb='2' fontSize='19px'>General Earth Advocacy</Heading></Slide>
                  <Zoom>
                    <Text fontSize={18} lineHeight={8}>
                      Greener Earth is our main focus and can be best achieved by
                      collective efforts. We advocate for a greener environment
                      free from dangerous gases, polluted air, poisonous water and
                      a harsh land. Through our voices and actions, we are hopeful
                      of being able to push for the desired earth.
                    </Text>
                  </Zoom>
                </li>
              </ol>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

function AboutSecondSection() {
  return (
    <Box className="abt-section2-wrapper" mb='8' overflow='hidden'>
      <Fade right>
      <div className="abt-section2-container">
        <div className="abt-section2-card">
          {/* <img src={ourMissionLogo} alt="Our Mission" /> */}
          <Heading className="our-mission" mb='3' fontWeight='semibold' fontSize={25}>Our Mission</Heading>
            <Text className="card-message" fontSize={18} lineHeight={8}>
            To make the environment an enabling one foe all and sundry through
            wider advocacy and strict compliance.
          </Text>
        </div>

        <div className="abt-section2-card">
          {/* <img src={ourVisionLogo} alt="Our Vision" /> */}
          <Heading className="our-vision" mb='3' fontWeight='semibold' fontSize={25}>Our Vision</Heading>
          <Text className="card-message" fontSize={18} lineHeight={8}>
            To be the world class changing club in maintaining a healthy
            environment while building a perfect only one earth.{" "}
          </Text>
        </div>
      </div>
      </Fade>
    </Box>
  );
}

function AboutThirdSection() {
  return (
    <Box overflow='hidden'>
      <AboutImgMsgBtn
        msgHeader={"Membership"}
        msgBody1={
          "During our ten months of existence,the club currently have 1,1735 members across the country,with 425 members being students of tertiary institutiions and 1310 being secondary school students."
        }
        msgBody2={
          "This is because of the very fair eligibility criteria we have for students who are interested in joining the club. You can read our"
        }
        criteria={"eligibility criteria here"}
        msgBtn={"Join us now"}
        btnLink="/signup"
        image={membership}
      />

      <AboutImgMsgBtn
        msgHeader={"Executives"}
        msgBody1={
          "The club ensured the election of executives who have the club's best interest at heart. Our executives are people who are nature conscious, and dream and work towards achieving a cleaner and greener earth. "
        }
        msgBody2={
          "They are people of great leadership character and mentality. Together with them,we will make the earth green again."
        }
        msgBtn={"Know the Executives"}
        btnLink="/executives"
        image={executives}
        swap={true}
      />
      <AboutImgMsgBtn
        msgHeader={"Locations"}
        msgBody1={
          "During our ten months of existence,the club which started at the University of Ibadan,Oyo state, has now spread the waste management and greener earth campaign to sixteen other states within Nigeria."
        }
        msgBody2={
          "Ecovanguard now have  branches in 19 tertiary institutions and 73 secondary schools."
        }
        msgBtn={"Meet us Today"}
        btnLink="/location"
        image={membership}
      />

      <AboutImgMsgBtn
        msgHeader={"Partners"}
        msgBody1={
          "Starting with the CIA (Clean Ibadan Ambassadors) with whom the club partnered with during her creation, the club has now partnered with 12 other prominent organizations who care about the nature and also share the dream of the club."
        }
        msgBtn={"Our partners"}
        btnLink="/partners"
        image={membership}
        swap={true}
      />
    </Box>
  );
}

const AboutPage = () => {
  return (
    <>
      <AboutFirstSection />
      <AboutSecondSection />
      <AboutThirdSection />
    </>
  );
};

export default AboutPage;
