import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Heading, Image} from '@chakra-ui/react'
import {Typewriter} from 'react-simple-typewriter'

export default function ImageSlider({ slides }) {
  const IMAGE_SLIDES = slides;
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Slider {...sliderSettings}>
        {IMAGE_SLIDES.map((imgObject) => (
          // added a div container because Slider adds inline styling to to the top element, and that disables any custom inline styling
          <div key={imgObject.title}>
            <Box
              className="carousel__bg-image"
              style={{ backgroundImage: `url(/assets/${imgObject.imgName})` }}
              display='flex'
              justifyContent='center'
              alignItems='center'
              h={['450px', '530px', '530px']}
              objectFit='contain'
              backgroundSize='cover'
            >
              <Box w='600px' mx='auto'>
                <Heading fontSize={[35, 40, 55]} lineHeight='70px' className='carousel__text'>
                  <Typewriter
                    words={['environmental reformation', 'waste management', 'eco-education', 'greener nature advocacy']}
                    loop='infinitely'
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </Heading>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
