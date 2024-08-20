import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className='gradient bg-gradient-to-b from-[#155191]  to-[#029C78]'>
      <div className="container text-white py-[50px] px-[30px] gap-8 grid lg:grid-cols-3 lg:px-[80px]   ">
        <div className="left flex flex-col gap-3 lg:gap-10">
          <div className="mainpart">
            <h1 className='main heading text-3xl font-bold'>
              Aster
            </h1>
            <span className='text-[16px] font mt-[-5px] font-semibold'>PHARMACY</span>
            <p className='text-[8px] mb-[10px] '>We'll Treat You Well</p>
            
            <p className='text-[12px] lg:text-[10px]'>Aster Pharmacy is one of the largest retail pharmacy groups in the middle <br />
              east and is now present in India. We opened India’s 1st friendly <br />
              neighbourhood pharmacy in February 2021 and are rapidly expanding.</p>

          </div>

          <div className="addres flex flex-col gap-3 lg:gap-7 text-[10px]">
            <h1 className='font-bold lg:text-[16px]'>Office Address</h1>

            <div className="officeadress flex text-[10px] gap-3">
              <IoLocationSharp size={15} />
              <p className="text">Aster Pharmacy AwfIs,<br />
                Renaissance Centre, 27-27/1, Kalinga Rao Road,<br />
                Mission Road Sampangi Ramanagar, Bengaluru, Karnataka 560027</p>
            </div>
            <div className="phone flex items-center  gap-3">
              <FaPhoneAlt size={12} />
              <p>1800-102-3186</p>

            </div>
            <div className="mail flex items-center gap-3">
              <MdOutlineMailOutline size={15} />
              <p>customarcare@asterparmacy.in</p>
            </div>

          </div>
          <span className="seperator w-full h-[1px] bg-white lg:hidden"></span>


        </div>
    {/* Links */}
        <div className="center text-[10px] lg:text-[13px] lg:ml-[20%] flex flex-col gap-2 ">
          <ul className='flex flex-col gap-2 lg:gap-7'>
            <li className='font-semibold'>LINKS</li>
            <li>Nearest Pharmacy</li>
            <li>About Us</li>

            <li>Products</li>
            <li>Why Aster Pharmacy</li>
            <li>   Carrers</li>
            <li>Partner with us</li>






          </ul>
          <span className="seperator w-full h-[1px] bg-white lg:hidden"></span>
        </div>
        <div className="right text-[12px] flex flex-col gap-5">


          <h1 className='font-semibold text-[14px]'>Stay Connected</h1>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste deserunt quia ipsam maxime corrupti sunt impedit, fuga repudiandae enim doloribus explicabo totam, illo, autem fugiat quis aperiam nemo facere</p>

          <div className="input flex items-center w-[220px] my-[20px] border-b-2 gap-2">
            <MdOutlineMailOutline className='lg:text-[20px]' />
            <input type="text" className='bg-transparent text-white' placeholder='Enter your email address' />
            <FaArrowRight />

          </div>
          <h1 className='font-semibold my-[10px] ml-[3px] lg:text-[14px]'>Follow Us</h1>
          <ul className='links flex gap-2'>
            <li className='w-6 h-6 ring-1 ring-white p-[6px] rounded-full'><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedinIn /></li>
            <li><FaYoutube /></li>
            <li><FaTwitter /></li>
          </ul>
        </div>
      


      </div>
      <div className="footer bg-white text-black flex  flex-col md:flex-row md:justify-between text-[10px] py-[30px] px-[20px]">
          <p>© 2022 Aster Pharmacy. All Rights Reserved | Crafted by Skepper</p>
          <span className='flex gap-3'>
          <p>Site Map </p>
          <p>Privacy Policy</p>
          </span>
        </div>
    </div>
  )
}

export default ContactUs