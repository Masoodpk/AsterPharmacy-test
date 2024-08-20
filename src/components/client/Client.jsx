import React from "react";
import ClientCard from "./ClientCard";
import Carousel from "react-multi-carousel";
import { responsive } from "../constents";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Client = () => {
  const marginSmall = true

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


  return (
    <div className="clent-container py-[5%] px-[2%]">
      <div className="content-client flex flex-col lg:flex-row lg:pr-[8%] gap-4 justify-between ml-[5%]">
        <div className="left-content ">
          <h1 className="text-customBlue text-[22px] font-semibold lg:text-[28px]">What Our Client Says</h1>
          <p className="text-[12px] mt-[5px] ">
            Our Clients send us bunch of smilies with our services and we love
            them
          </p>
        </div>
        <div className="rignt-content">
          <button className=" ring-2 ring-[#3333] text-customBlue py-[10px] px-[15px] font-semibold rounded-full text-[12px]">
            Write a review
          </button>
        </div>
      </div>
      <div className="client-cards py-[3%] ">
        <Carousel responsive={responsive} renderButtonGroupOutside={true} arrows={false} customButtonGroup={<CustomButtonGroup/>}>
        <ClientCard
          text="I am extremely grateful for Aster Pharmacy for 
        delivering the medicines right on time."
        />
        <ClientCard text={"Thank you, Aster Pharmacy, for quick delivery"} marginSmall />
        <ClientCard
          text="You can definitely trust on Aster Pharmacy, they can deliv
                 medicines lightning fast."
        />
        <ClientCard text={"Thank you, Aster Pharmacy, for quick delivery"}  marginSmall  />
        <ClientCard text={"Thank you, Aster Pharmacy, for quick delivery"} marginSmall />
        </Carousel>

        <div className="radiobuttonDemo flex justify-center ">
          <div className="span-tags flex gap-3">
            <span  className="  ring-1 bg-blue-400"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full  ring-1"></span>
            <span className="h-3 w-3 rounded-full ring-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
