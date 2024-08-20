import React from "react";
import pharmacistServing from "../assets/pharmacist-Serving.png";
import phramacist from "../assets/pharmacist.png";
import fastDeliver from "../assets/fast-delivery.png";
import stopWatch from "../assets/stopwatch.png";
import medicine from "../assets/medicine.png";
import phill from "../assets/pill.png";

const WhyAster = () => {
  return (
    <div className="main-contanierr bg-navcolor py-[40px] px-[8%] grid  lg:grid-cols-2 xl:grid-cols-2">
      <div className="left-image  flex  lg:pl-[50px] ">
        <img src={pharmacistServing} alt="" className="object-contain " />
      </div>
      <div className="right-contant pt-[20px] lg:ml-[20px]">
        <div className="headings">
          <h1 className="text-[6vw] md:text-[4vw] lg:text-[2vw] font-semibold text-customBlue">
            Why Aster Pharmacy
          </h1>
          <p className="text-[3.5vw] md:text-[2vw] lg:text-[0.8vw] mt-[10px]">
            We provide you genuine healthcare products round the clock and we
            Aster Pharmacy intend to <br /> make your lives easier.
          </p>
        </div>
        <div className="services grid mt-[20px] gap-4 lg:grid-cols-2  lg:text-[10px] xl:text-[14px]">
          <div className="smallServiceCards flex bg-white  items-center py-[20px] lg:py-[20px] pl-[10px]  xl:py-[30px]  gap-5">
            <img src={phramacist} alt="pharmacist" className="w-[50px]" />
            <h1>Trained & Caring Pharmacist</h1>
          </div>
          <div className="smallServiceCards flex bg-white  items-center py-[20px] pl-[10px] lg:py-[10px] xl:py-[30px]  gap-5">
            <img src={phill} alt="pharmacist" className="w-[50px]" />
            <h1>Genuine Medicines</h1>
          </div>
          <div className="smallServiceCards flex bg-white  items-center py-[20px] pl-[10px] lg:py-[10px]  xl:py-[30px] gap-5">
            <img src={medicine} alt="pharmacist" className="w-[50px]" />
            <h1>Exhaustive Range of Products</h1>
          </div>
          <div className="smallServiceCards flex bg-white  items-center py-[20px] pl-[10px] lg:py-[10px] xl:py-[30px]  gap-5">
            <img src={stopWatch} alt="pharmacist" className="w-[50px]" />
            <h1>Medicine Refill Reminders</h1>
          </div>
          <div className="smallServiceCards flex bg-white  items-center py-[20px] pl-[10px] lg:py-[10px]  xl:py-[30px] gap-5">
            <img src={fastDeliver} alt="pharmacist" className="w-[50px]" />
            <h1>Free Home Delivery</h1>
          </div>
        </div>
      
      </div>
     
    </div> 
  );
};

export default WhyAster;
