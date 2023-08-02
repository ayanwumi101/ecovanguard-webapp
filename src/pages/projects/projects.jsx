import React, { useState } from "react";
import styles from "./styles.module.css";
import image1 from "../../assets/boy.png";
import image2 from "../../assets/girl.png";
import image3 from "../../assets/me.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image from "../../assets/project_image.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import ButtonLink from "../../components/Button/button";
import { Heading, Text, Button } from "@chakra-ui/react";

const Projects = () => {
  const [assets, setassets] = useState([image1, image2, image3]);
  const cards = [1, 2, 3];

  const [prevIndex, setPrevIndex] = useState(0);
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);

  const prevImage = () => {
    setassets((prev) => {
      const last = prev[prev.length - 1];
      const others = prev.slice(0, prev.length - 1);
      return [last, ...others];
    });
  };

  const nextImage = () => {
    setIndex((index + 1) % assets.length);
    setPrevIndex((prevIndex + 1) % assets.length);
    setNextIndex((nextIndex + 1) % assets.length);
  };

  return (
    <div className={styles.projects_container}>
      <div className={styles.heading}>
        <Zoom><Heading>Eco-Projects</Heading></Zoom>
      </div>

      <main>
        <section className={styles.visitation}>
          <Heading fontWeight='semibold' fontSize={25}>Next visitation</Heading>

          <div className={styles.action_btns}>
            <button onClick={prevImage} className={styles.prev_btn}>
              <FaChevronLeft />
            </button>
            <button onClick={nextImage} className={styles.next_btn}>
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.carousel_container}>
            <Fade left>
              <div className={styles.prev_image}>
                <img
                  src={assets[prevIndex]}
                  alt="Ecovanguard project "
                  className={styles.carousel_image}
                />
              </div>
            </Fade>
            <Zoom>
              <div className={styles.active_image}>
                <img
                  src={assets[index]}
                  alt="Ecovanguardproject "
                  className={styles.carousel_image}
                />
              </div>
            </Zoom>
            <Fade right>
              <div className={styles.next_image}>
                <img
                  src={assets[nextIndex]}
                  alt="EcoVanguard project"
                  className={styles.carousel_image}
                />
              </div>
            </Fade>
          </div>

          <div className={styles.caption}>
            <Heading fontWeight='semibold' fontSize={22} mb='5'>The Bodija Market</Heading>
          </div>

          <div className={styles.caption_details}>
            <div className={styles.description}>
              <Text fontSize={17}>Waste Management Awareness Campaign</Text>
              <Text fontSize={17}>24th May, 2022</Text>
            </div>

            <div className={styles.campaign}>
              <Button bg='#0397d6' size='lg' color='white'>Join This Campaign</Button>
            </div>
          </div>
        </section>

        <section className={styles.cards_container}>
          <Heading fontWeight='semibold' fontSize={25} mb='10'>Ongoing Projects</Heading>
          <div className={styles.cards}>
            {cards.map((card) => {
              return (
                <div className={styles.card} key={card}>
                  <img
                    src={image3}
                    alt="Ongoing EcoVanguard project"
                    className={styles.card_img}
                  />
                  <div className={styles.card_text}>
                    <p>
                      <strong>Project :</strong> Planting of 200 palm trees
                    </p>
                    <p>
                      <strong>Beneficiary :</strong> University of Ibadan
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.completed_projects}>
          <Heading fontWeight='semibold' fontSize={25} mb='6'>Executed Projects</Heading>
          <div className={styles.completed}>
            <Zoom>
            <div className={styles.project_image}>
              <img
                src={image}
                className={styles.project_img}
                alt="Completed Project "
              />
            </div>
            </Zoom>

            <Fade right>
            <div className={styles.project_description}>
              <Text mb='3' fontSize={17} lineHeight={8}>
                EcoVanguard in a bid to create a greener earth by ensuring
                proper waste management and educating the future generations.
              </Text>
              <Text mb='3' fontSize={17} lineHeight={8}>
                We have successfully completed a total of 19 projects to aid
                proper waste management in our communities and the impact of
                these projects are being felt in the society.
              </Text>
              <div className="center">
                <Button size='lg' bg='#0397d6' color='white'>All Projects</Button>
              </div>
            </div>
            </Fade>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
