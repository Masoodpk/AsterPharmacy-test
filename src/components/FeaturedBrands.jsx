import React from "react";
import FeaturedCard from "./FeaturedCard";
import Carousel from "react-multi-carousel";
import { brandResponsive } from "./constents.js";
import Niviea from "../assets/NIVIEA.png";
import Mama from "../assets/mamaearth.png";
import Huggies from "../assets/huggies-1.png";
import Himalaya from "../assets/Image 21.png";
import Savlon from "../assets/savlon.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FeaturedBrands = () => {
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
  //
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
    <div className="featured brand mt-[30px] py-[3%] px-[2%] pb-[10%]">
      <div className="featured-heading flex items-center flex-col justify-center">
        <h1 className="font-bold text-customBlue text-[26px]">
          Featured Brand
        </h1>
        <p className="font-semibold max-sm:text-[3vw] ml-[20px] text-center">
          Your-go-to online pharmacy store is home to some of the <br />most
          recognized and trusted brands.
        </p>
      </div>

      <div className="featured-card-carousal px-[3%] py-[2%]  ">
        <Carousel
          responsive={brandResponsive}
          arrows={false}
          // showDots={true}
          // customDot={<CustomDot/>}
          className="py-[3%] pb-[10%]"
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
        >
          <FeaturedCard color={"customNivia"} image={Niviea} text="NIVEA" />
          <FeaturedCard color={"customMama"} image={Mama} text="MAMAEARTH" />
          <FeaturedCard
            color={"customHimalaya"}
            image={Himalaya}
            text="HIMALAYA"
          />
          <FeaturedCard
            color={"customHuggies"}
            image={Huggies}
            text="HUGGIES"
          />
          <FeaturedCard color={"customSavlon"} image={Savlon} text="SAVLON" />
        </Carousel>
        <div className="radiobuttonDemo flex justify-center m-[-10px]">
          <div className="span-tags flex gap-3 ">
            <span  className=" bg-blue-300"></span>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
