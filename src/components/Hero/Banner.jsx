import React from 'react'
import Banner1 from "../../assets/banner1.jpg"
import Banner2 from "../../assets/banner2.jpg"
function Banner() {
    return (
        <div className='containr grid grid-cols-[2fr_1fr_1fr] max-lg:grid-cols-1 max-lg:h-fit max-sm:gap-2 h-[33vw] overflow-hidden '>
            <div className='left bg-black relative   '>

                <div className="img  "><img className='object-contain' src={Banner1} alt="banner2" /></div>
                <div className='content flex flex-col gap-2 absolute z-10 top-[15%] text-white  left-[8%] '>
                    <h1 className='  text-[22px] font-bold'>MEGA WINTER OFFERS</h1>
                    <p className='text-[12px] '>Shop for 899* or above, and get Vaseline Lip Care (10 gms)+ <br></br> Vaseline Intensive Care Aloe Fresh (100 ml) + Aster Pharmacy<br></br>
                        Foot Care Cream (50gms) free</p>
                    <button className='bg-white rounded-full text-gray-500 text-[10px] py-[8px] px-[12px] max-w-[100px] mt-[10px]'>Order Now</button>
                </div>
                <div className="dots absolute bottom-[8%] left-10 z-30 flex gap-2  ">
                    <div className="dot w-2 h-2  rounded-full transition-colors ring-1 border-white bg-white ring-offset-1 "></div>
                    <div className="dot w-2 h-2  rounded-full transition-colors ring-1 ring-white"></div>
                    <div className="dot w-2 h-2  rounded-full transition-colors ring-1 ring-white"></div>

                </div>
            </div>
            <div className='center'>
                <div className="top bg-[#e4ebf3]  lg:h-[50%] px-[20px]  py-10 ">
                    <p className='font-semibold'>Get Flat
                    </p>
                    <h1 className='text-[28px]  text-customBlue font-bold'>15% off</h1>
                    <p className='font-semibold'>on first 3 medicine orders</p>
                    <button className='bg-transparent border border-black  rounded-full text-black mt-[20px] max-sm:w-[100px] text-[10px] py-[8px] px-[12px] max-w-[100px] '>Order Now</button>
                </div>
                <div className="botom md:h-[50%] bg-[#ddfbf3] lg:h-[50%] px-[20px] pt-[20px] max-lg:py-10">



                    <p className='font-semibold'>Locate Nearest</p>
                    <h1 className='text-[#09a37c] text-[28px] font-bold'>Pharmacy</h1>
                    <p className='font-semibold'>Get genuine medicines round the clock</p>
                    <button className='bg-transparent border border-black  rounded-full text-black mt-[20px] max-sm:w-[100px] text-[10px] py-[8px] px-[12px] max-w-[100px] '>Search Now</button>
                </div>
            </div>
            <div className='right relative'>
                <div className='img'>
                    <img src={Banner2} alt="banne2" className=' w-full object-contain  bg-repeat-x ' />
                </div>
                <div className='content absolute top-1 text-white  py-[20px] px-[20px] '>
                    <h1 className='font-bold max-sm:text-[28px] text-[20px] '>BABY CARE PRODUCTS</h1>
                    <p className='text-[12px] font-semibold'>Shop for 899* or above, and get 10% Off</p>
                    <button className='bg-transparent border border-white  rounded-full text-white mt-[20px] max-sm:w-[100px] text-[10px] py-[8px] px-[12px] max-w-[100px] '>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner