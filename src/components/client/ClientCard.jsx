import React from 'react'
import starFull from '../../assets/star-full.png'
import starHalf from '../../assets/star-half.png'
import starEmpty from '../../assets/star-empty.png'
const ClientCard = ({text}) => {





    
  return (
    <div className='card-container border px-[10px] py-[20px] m-[2%] h-[250px] flex flex-col gap-4'>
        <div className="images flex mb-[10px] gap-2">
            <img src={starFull} alt="" className='h-[20px]'/>
            <img src={starFull} alt="" className='h-[20px]'/>
            <img src={starFull} alt="" className='h-[20px]'/>
            <img src={starHalf} alt="" className='h-[20px]' />
            <img src={starEmpty} alt=""  className='h-[20px]'/>
           
        </div>
        <p className='text-[14px]'>{text}</p>
        <p className='text-custom-green mt-[50px]'>Jhon Ray</p>
        <p className='text-[10px]'>Mubai</p>

    </div>
  )
}

export default ClientCard