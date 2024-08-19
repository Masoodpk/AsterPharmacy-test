import React from 'react'
import demoImg from '../assets/image 20.png'
import himalaya from '../assets/Image 25.png'
import cream from '../assets/Image 24.png'
const OfferCard = ({imageTop,imageBottom}) => {
  console.log("imagetop ", imageTop)
  console.log("imageBottom",imageBottom)
  return (
    <div className='card-container  bg-green-500 max-w-[400px]   h-[250px] rounded-[5px]  '>
      <div className="card-content relative bg-white h-[220px] shadow-lg  ">
        <div className="absolute cardleft px-[20px]">
          <img src={imageTop} alt="" className='w-[150px] object-contain' />
          <div className="headings">
            <p className='text-customGreen font-semibold text-[10px]'>Baby Care</p>
            <h1 className='text-[16px]'>Get upto <span className='text-customGreen font-semibold'>40% Off</span> on <br /> Himalaya Products</h1>
          </div>

        </div>
        <div className="carRight absolute right-0 ">
          <img src={imageBottom} alt="cream" className='w-[200px]' />

        </div>

      </div>


    </div>
  )
}

export default OfferCard