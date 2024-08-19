import React from "react";

const Card = ({ image ,text }) => {
  return (
    <div className="card-container w-[300px] h-[300px] flex  flex-col   overflow-hidden">
      <div className="top    bg-navcolor py-[30px] flex justify-center w-[300px] h-[240px] ">
        <img
          src={image}
          alt="pampers"
          className="object-contain w-[150px] "
        />
      
      </div>
      <div className="contents ">
        <p className="text-customGreen font-bold text-[10px]">Body care</p>
        <p className="text-[14px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
