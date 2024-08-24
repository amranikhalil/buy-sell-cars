// src/components/Carousel.js

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import myImage1 from "../Images/carousel-1.jpg";
import myImage2 from "../Images/carousel-2.jpg";


const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      className="w-full"
    >
      <div className="relative">
        <img
          src={myImage2}
          alt="Carousel 1"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-black text-white p-4">
        </div>
      </div>
      <div className="relative">
        <img
          src={myImage1}
          alt="arousel 2"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-black text-white p-4">
        </div>
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default CarouselComponent;
