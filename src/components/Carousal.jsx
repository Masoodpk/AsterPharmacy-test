import React from 'react'
import OfferCard from './OfferCard'
import Carousel from 'react-multi-carousel'
import himalaya from '../assets/Image 25.png'
import cream from '../assets/Image 24.png'
import huggies from '../assets/Image 28.png'
import huggiesBox from '../assets/8875608a.png'

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
      items: 3
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
        className="absolute right-[55px] bottom-0 w-[50px] h-[50px] transform  bg-blue-500 text-white p-3 rounded-full z-10"
      >
        ←
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 bottom-0 transform w-[50px] h-[50px] bg-blue-500 text-white p-3 rounded-full z-10"
      >
        →

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
      <Carousel responsive={responsive} showDots={true} customDot={<CustomDot />}
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