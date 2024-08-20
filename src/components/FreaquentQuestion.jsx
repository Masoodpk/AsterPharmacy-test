
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const FreaquentQuestion = () => {
    const datas = [
        "How to order medicines from Aster Pharmacy?",
        "Can I buy all kinds of medicines from Aster Pharmacy?",
        "How can I buy Aster Pharmacy products?",
        "Can I track the delivery status of my order?",
        "Does Aster Pharmacy deliver medicines on same day delivery?",
        "How can I buy Aster Pharmacy products?",
        "How to order medicines from Aster Pharmacy?"
    ]
  return (
    <div className='m-[5%] xl:mx-[8%]'>
        <div className="heading flex justify-center mb-[10%] max-sm:mb-[50px]">
            <h1  className='text-customBlue font-bold lg:text-[38px]'>Frequently Asked Question</h1>
        </div>
        <div className="cont ">
         {datas.map((data,index)=>(
            <div>
             <div className='flex justify-between gap-3'>
                <h1 className='max-sm:text-[12px]'>{data}</h1>
                <button className='rounded-full ring-1 w-[30px] h-[30px] text-customBlue p-[7px] '><FaPlus/></button>
             </div>
             <hr className='h-[1px] bg-[#3333] my-[30px]' />
             </div>
           
         ))}
         
        </div>
    </div>
  )
}

export default FreaquentQuestion