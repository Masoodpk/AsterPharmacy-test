import React from "react";
import aboutus from "../assets/abou-us.png";

const AboutUs = () => {
  return (
    <div className="about-us  w-full bg-gradient-to-b from-[#155191]  to-[#029C78] ">
      <div className=" relative ">
        <div className="image  w-full">
          <img src={aboutus} alt="" className="object-contain" />
        </div>
        <div className="contentsss  absolute top-[18%] lg:top-[30%] lg:left-[5%]  pl-[10%] lg:pl-[120px] z-30 text-white font-bold ">
          <h2 className=" text-[.8vw] bg-gradient-to-b from-[#155191]  to-[#029C78] p-[5px] w-[8vw] lg:w-[130px] text-center">
            About US
          </h2>
          <h1 className="text-[3vw] lg:text-[2vw]">
            Your Friendly Neighbourhood <br />
            Pharmacy
          </h1>
          <p className="  mt-[10px] lg:mt-[20px] font-semibold text-[2vw] lg:text-[0.8vw]">
            Aster Pharmacy is one of the largest retail pharmacy groups in the
            middle east and is now <br />
            present in India. We opened India’s 1st friendly neighbourhood
            pharmacy in February <br /> 2021 and are rapidly expanding
          </p>
          <button className="ring-2 ring-white w-[22vw] lg:w-[150px] max-sm:py-[3px] py-[8px] rounded-full md:mt-[30px] mt-[10px] font-semibold text-[2vw] lg:text-[14px]">
            View More
          </button>
        </div>
      </div>
      <div className="datas flex gap-[10vw] text-center text-white pl-[15%] py-[30px] bg-gradient-to-b from-[#155191]  to-[#029C78]">
        <div>
          <h1 className="text-[2vw] text-white font-bold">144</h1>
          <p className="text-[0.8vw]">Outlets Across India</p>
        </div>
        <div>
          <h1 className="text-[2vw] text-white font-bold">35</h1>
          <p className="text-[0.8vw]">Years of Care & Experience</p>
        </div>
        <div>
          <h1 className="text-[2vw] text-white font-bold">12m</h1>
          <p className="text-[0.8vw]">Orders Delivered
          </p>
        </div>
        <div>
          <h1 className="text-[2vw] text-white font-bold">19.5m</h1>
          <p className="text-[0.8vw]">Customers in Year</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
