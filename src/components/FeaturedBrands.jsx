import React from 'react'
import FeaturedCard from './FeaturedCard'
import Carousel from 'react-multi-carousel'
import { responsive } from './constents.js'
import Niviea from '../assets/NIVIEA.png'
import Mama from "../assets/mamaearth.png"
import Huggies from "../assets/huggies-1.png"
import Himalaya from "../assets/Image 21.png"
 import Savlon from "../assets/savlon.png"

const FeaturedBrands = () => {
//  
  return (
    <div className='featured brand mt-[30px] py-[3%]'>
        <div className="featured-heading flex items-center flex-col justify-center">
            <h1 className='font-bold text-customBlue text-[26px]'>Featured Brand</h1>
            <p className='font-semibold'>Your-go-to online pharmacy store is home to some of the most recognized and trusted brands.</p>
        </div>

        <div className="featured-card-carousal px-[3%] py-[2%]  ">
            <Carousel responsive={responsive} >
        <FeaturedCard color={"customNivia"} image={Niviea} text="NIVEA" /> 
        <FeaturedCard  color={"customMama"} image={Mama} text="MAMAEARTH" />
        <FeaturedCard color={"customHimalaya"} image={Himalaya} text="HIMALAYA"/>
        <FeaturedCard color={"customHuggies"} image={Huggies} text= "HUGGIES"/>
        <FeaturedCard color={"customSavlon"} image={Savlon} text="SAVLON"/>
        </Carousel>

        </div>
       
    </div>
  )
}

export default FeaturedBrands