import React from 'react'
import OfferCard from './OfferCard'
import Carousel from 'react-multi-carousel'
import himalaya from '../assets/Image 25.png'
import cream from '../assets/Image 24.png'
import huggies from '../assets/Image 28.png'
import huggiesBox from '../assets/8875608a.png'
import { FaArrowLeft ,FaArrowRight} from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";



const Carousal = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-[100px] bottom-1 w-[40px] h-[40px] transform ring-[#3333] ring-1 text-[15px]   text-center flex items-center font-bold text-[#3333] p-3 rounded-full z-10"
      >
      <FaArrowLeft />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-10 bottom-1 transform w-[40px] h-[40px] ring-1 ring-[#3333] text-customBlue font-normal text-[15px] p-3 rounded-full z-10"
      >
        <FaArrowRight/>

      </button>
    );
  };


  const CustomDot = ({ onClick, active }) => {
    return (
      <li>
        <button
          onClick={onClick}
          className={`custom-dot ${active ? 'active' : ''}`}
          style={{
            backgroundColor: active ? 'blue' : 'gray',
            borderRadius: '50%',
            width: '12px',
            height: '12px',
            margin: '0 5px',
            border: 'none',
            cursor: 'pointer',

          }}
        />
      </li>
    );
  }
  return (
    <div >
      <Carousel responsive={responsive} showDots={true} customDot={<CustomDot /> }
        dotListClass='absolute bottom-0 left-0 w-full flex justify-center ' className=' h-[60vh] '
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
       
      >

        <OfferCard imageTop={himalaya} imageBottom={cream} />
        <OfferCard imageTop={huggies} imageBottom={huggiesBox} />
        <OfferCard imageTop={himalaya} imageBottom={cream} />
        <OfferCard imageTop={huggies} imageBottom={huggiesBox} />
        <OfferCard imageTop={himalaya} imageBottom={cream} />


      </Carousel>
    </div>
  )
}

export default Carousal