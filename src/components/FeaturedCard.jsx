import React, { useEffect, useState } from 'react'


const FeaturedCard = ({color,image,text}) => {
 
  return (
    <div className={`featured-card-container h-[80px] m-[1%] bg-navcolor items-center gap-8 rounded-[5px]  py-[8px]  justify-center flex w-[250px]`}>

        <div className="img">
        <img src={image} alt="nvea" className='w-[60px]' />
        </div>
        <div className="heading">
         <h1>{text}</h1>
        </div>
        
        
 </div>
  )
}

export default FeaturedCard