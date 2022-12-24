import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='flex items-center h-10  md:h-14 bg-LineTech'>
        <div className=' w-[85%] text-[13px] ml-5 '> @ Guylain Wasso </div>
        <div className='flex justify-between m-auto text-[20px] gap-2'>
            <FaLinkedin/>
            <FaTwitter/>
            <FaInstagram/>
            <FaGithub/>      
         </div>
    </div>
  )
}
