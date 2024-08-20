import React, { useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import Carousal from "./Carousal";

const LimitedDeals = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [colour, setColour] = useState(false);
  const carouselRef = useRef(null);
  const numberOfCards = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        console.log("carouselre", carouselRef.current);
        const scrollPosition = carouselRef.current.scrollLeft;
        console.log("scroll position", scrollPosition);
        const cardWidth = carouselRef.current.offsetWidth * 0.11; // 80% of container width

        console.log("cardWidth", cardWidth);
        const newCard = Math.round(scrollPosition / cardWidth);
        console.log("calculated-value", newCard);
        setCurrentCard(newCard);
        console.log("newcard", currentCard);
      }
    };

    carouselRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      carouselRef.current?.removeEventListener("scroll", handleScroll);
  });

  const handleClick = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth * 0.12; // 80% of container width
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentCard(index);
    }
  };
  return (
    <div className="offers-container bg-navcolor py-[50px] px-[2%] mt-[20px]">
      <div className="content w-full flex justify-center flex-col items-center gap-2 mb-[30px] ">
        <h1 className="font-bold text-customBlue text-[28px]">
          Limited Time Deals
        </h1>
        <p className="text-[12px] ml-[20px] text-center">
          Get additional benefits from our wide range of healthcare products,
          only available for a limited period of time.
        </p>
      </div>
      <div className="carousal pl-[5%]">

        <Carousal/>
        
      </div>
     
     
    </div>
  );
};

export default LimitedDeals;
