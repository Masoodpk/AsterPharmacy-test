import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import pampers from "../../assets/YZ23W.png";
import babycream from "../../assets/babycream.png";
import nanpro from "../../assets/nanpro.png";
import milk from "../../assets/milk.png";
import "react-multi-carousel/lib/styles.css";
function Products() {

  
  return (
    <div className="products-containet w-full ">
      <div className="headings flex justify-center flex-col items-center mt-[30px] mb-[30px]">
        <h1 className="text-customBlue text-[28px] font-bold">
          Our Product Range
        </h1>
        <p>
          We provide genuine and quality healthcare products and our wide range
          of products ensures we provide everything for all your healthcare
          needs
        </p>
      </div>
      <div className="section w-full py-[20px] pb-[50px]">
        <ul className=" max-sm:text-[9.1px] sm:text-[18px]   flex justify-center gap-2  text-[#3333336c]  font-semibold ">
          <li>Aster Products</li>
          <li>Medicine</li>
          <li className="text-customGreen underline underline-offset-8">Baby Care</li>
          <li>Personal Care</li>
          <li>Sports nutrition</li>
          <li>Medical Devices</li>
        </ul>
      </div>
     
      <div className="cards flex flex-col items-center sm:flex-row max-laptop:flex-wrap gap-4 justify-center ">
      
        <Card
          image={pampers}
          text="Pampers pure protection diapers size 6 35+lbs 42 ct pkg"
        />
        <Card
          image={nanpro}
          text="Nestle Nan pro 1 infant Forula Powder Upto 6 Month Refill"
        />
        <Card image={babycream} text="Himalayan Gentle Baby Wash" />
       
        <Card
          image={milk}
          text="LuvLap Fedding Bottle with Silicon Nipple Blue Green Pack of 2"
        />
        
      </div>
      
    
      <div className="button w-full flex justify-center mt-[20px] ">
        <button className="ring-1 ring-[#3333] rounded-full w-[150px] py-[10px] px-[10px] font-semibold text-customBlue">
          View All
        </button>
      </div>
    </div>
  );
}

export default Products;
