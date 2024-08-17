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

<div className='nav-logos w-full flex justify-end pr-[30px] text-[#e4ebf3] py-[10px] max-sm:text-[10px] '>
    <ul className='flex gap-4  items-center mr-[60px] '>
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
<div className='Navbar flex justify-between w-full  bg-[#e4ebf3] items-center   monitor:px-[100px] md:px-[50px] px-[3%] '>
<div className='nav-mainlogo '>
<img className='w-[100px] ' src={mainlogo} alt="mainlogo" />

</div>
<div className='section max-lg:hidden '>
<ul className='flex gap-[20px]  items-center laptop:gap-[30px] laptop:text-[14px] monitor:gap-[40px] font-semibold text-[12px]'>
    <li>Nearest Pharmacy</li>
    <li>Products</li>
    <li>About Us</li>
    <li>Why Aster Pharmacy</li>
    <li>Careers</li>
    <li>Own Franchise</li>
    <li>How to Order?</li>
    <li><button className='bg-[#003377] px-[18px] py-[15px] max-w-[200px] rounded-full text-white' >Request Call Back</button></li>
</ul>
</div>
<div className='button lg:hidden fixed z-30 right-2'>

 { navMobile? <IoMdClose  onClick={handleClick} size={30}/> :<RxHamburgerMenu size={30} onClick={handleClick} /> }
</div>

{navMobile && (
  <div className=' relative px-[30px] w-full top-0 bg-red-900'>
    <ul className='absolute z-20  right-0 w-full '>
    <li>Nearest Pharmacy</li>
    <li>Products</li>
    <li>About Us</li>
    <li>Why Aster Pharmacy</li>
    <li>Careers</li>
    <li>Own Franchise</li>
    <li>How to Order?</li>
    <li><button className='bg-[#003377] px-[18px] py-[15px] max-w-[200px] rounded-full text-white' >Request Call Back</button></li>
    </ul>
  </div>
)}

</div>


    </div>
  )
}

export default Navbar