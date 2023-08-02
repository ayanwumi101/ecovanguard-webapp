import { Heading } from "@chakra-ui/react";
import React from "react";
import "./index.css";

const Location = () => {
  return (
    <section>
      <div className="location__map-image"></div>
      <div className="location">
        <Heading className="location__heading" mb='5'>Our Locations</Heading>
        <div className="location__buttons">
          <span>Ibadan</span>
        </div>
      </div>
    </section>
  );
};

export default Location;
