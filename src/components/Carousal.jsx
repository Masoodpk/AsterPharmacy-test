import React, { useState } from "react";
import OfferCard from "./OfferCard";
import Carousel from "react-multi-carousel";
import himalaya from "../assets/Image 25.png";
import cream from "../assets/Image 24.png";
import huggies from "../assets/Image 28.png";
import huggiesBox from "../assets/8875608a.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { bcresponsive } from "./constents.js";

import "react-multi-carousel/lib/styles.css";

const Carousal = () => {
  const [color, setColor] = useState(false);

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="custom-button flex justify-end gap-3 mt-[20px] max-md:hidden">
        <button
          onClick={previous}
          className="transform w-[40px] h-[40px] ring-1 ring-[#3333] text-[#3333] font-normal text-[15px] p-3 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="transform w-[40px] h-[40px] ring-1 ring-[#3333] text-[15px] text-customBlue text-center flex items-center font-bold p-3 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    );
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        onClick={onClick}
        className={`w-3 h-3 rounded-full mx-1 ${
          active ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
    );
  };

  return (
    <div>
      <Carousel
        responsive={bcresponsive}
        // showDots={true}
        // customDot={<CustomDot />}
        // dotListClass="absolute bottom-0"
        arrows={false}
        renderButtonGroupOutside={true}
        // customDot={<CustomDot />}
        customButtonGroup={<CustomButtonGroup />}
        className="py-[30px]"
      >
        <OfferCard imageTop={himalaya} imageBottom={cream} />
        <OfferCard imageTop={huggies} imageBottom={huggiesBox} />
        <OfferCard imageTop={himalaya} imageBottom={cream} />
        <OfferCard imageTop={huggies} imageBottom={huggiesBox} />
        <OfferCard imageTop={himalaya} imageBottom={cream} />
      </Carousel>
      <div className="radiobuttonDemo flex justify-center m-[-10px]">
          <div className="span-tags flex gap-3">
            <span  className="  ring-1 bg-blue-400"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full ring-1"></span>
          </div>
        </div>
    </div>
  );
};

export default Carousal;
