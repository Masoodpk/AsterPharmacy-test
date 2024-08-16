import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn,FaYoutube,FaWhatsapp } from "react-icons/fa";
import mainlogo from '../assets/aster logo.png'

function Navbar() {
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
<div className='Navbar flex justify-between w-full bg-[#e4ebf3] items-center px-10 py-[px]'>
<div className='nav-mainlogo ml-[50px] '>
<img className='w-[100px] ' src={mainlogo} alt="mainlogo" />

</div>
<div className='section f'>
<ul className='flex gap-[30px] font-bold text-[12px] items-center mr-[50px]'>
    <li>Nearest Pharmacy</li>
    <li>Products</li>
    <li>About Us</li>
    <li>Why Aster Pharmacy</li>
    <li>Careers</li>
    <li>Own Franchise</li>
    <li>How to Order?</li>
    <li><button className='bg-[#003377]'>Request Call Back</button></li>
</ul>
</div>

</div>


    </div>
  )
}

export default Navbar