import React, { useState } from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn,FaYoutube,FaWhatsapp } from "react-icons/fa";
import mainlogo from '../assets/Asterpharmacy.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [navMobile,setNavMobile]=useState(false)

  const handleClick=()=>{
    setNavMobile(prev=>!prev)
    console.log(navMobile);
    
  }
  return (
    <div className='Nav-containr fixed w-full '>

<div className='nav-logos w-full flex justify-end max-sm:pr-[30px] md:pr-[60px] text-[#e4ebf3] py-[10px] max-sm:text-[10px] laptop:px-[80px] monitor:px-[100px] '>
    <ul className='flex gap-4  items-center  '>
    <li><FaFacebookF /></li>
    <li><FaInstagram /></li>
    <li><FaLinkedinIn  /></li>
    <li><FaYoutube /></li>
    <li><FaTwitter /></li>
    <li>|</li>
    <li className='font-medium '>  FREE HOME DELIVERY</li>
    <li className='flex items-center'><FaWhatsapp />+91 8904419944</li>
    </ul>
 
</div>
<div className='Navbar flex justify-between w-full  bg-[#e4ebf3] items-center laptop:px-[80px]  monitor:px-[100px] md:px-[60px]  py-[1%] '>
<div className='nav-mainlogo '>
<img className='w-[100px] object-contain' src={mainlogo} alt="mainlogo" />

</div>
<div className='section max-lg:hidden '>
<ul className='flex gap-[20px]  items-center laptop:gap-[30px] laptop:text-[14px] monitor:gap-[40px]  font-semibold text-[12px]'>
    <li>Nearest Pharmacy</li>
    <li>Products</li>
    <li>About Us</li>
    <li>Why Aster Pharmacy</li>
    <li>Careers</li>
    <li>Own Franchise</li>
    <li>How to Order?</li>
    <li><button className='bg-[#003377] px-[18px] py-[13px] max-w-[200px] rounded-full text-white' >Request Call Back</button></li>
</ul>
</div>
<div className='button lg:hidden fixed z-30 right-2'>

 { navMobile? <IoMdClose  onClick={handleClick} size={30}/> :<RxHamburgerMenu size={30} onClick={handleClick} /> }
</div>





</div>


{/* navbar mobile */} 

<nav className='relative w-full h-[100vh] pointer-events-auto lg:hidden top-[-115px]'>

<ul className={`absolute items-center right-0 bottom-0 bg-[#e4ebf3] pb-[75px] pl-[20px]  w-full rounded-t-[20px] transition-transform duration-300 ease-in-out ${
  navMobile? 'translate-y-0 ':'translate-y-full '
} shadow-md text-[18px] py-[25px] flex flex-col gap-4 cursor-pointer  `}>
<li className='w-full flex justify-center'>
  <hr  className='bg-[#3333] h-[4px] w-[50px] ' onClick={handleClick}/>
</li>


  <li>Nearest Pharmacy</li>
    <li>Products</li>
    <li>About Us</li>
    <li>Why Aster Pharmacy</li>
    <li>Careers</li>
    <li>Own Franchise</li>
    <li>How to Order?</li>
    <li><button className='bg-[#003377] max-sm:text-[14px]  px-[18px] py-[15px] max-w-[200px] rounded-full text-white ' >Request Call Back</button></li>

</ul>
</nav>


    </div>
  )
}

export default Navbar