import React from 'react'
import { MdClose} from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";


export const DropMenu = ({open, setOpen}) => {
    window.addEventListener('click', (e)=>{
        console.log(e.target); 
        setOpen(false)

      })
  return (
    <>
         {open && <div className=' bg-white rounded w-[290px] h-[300px] absolute right-10 top-[75px] text-[#222A35]'>

                <ul className='dropMenuList'>

                    <li className='mt-4'>Réalisation</li>
                    <li>Récompense</li>
                    <li> Blog</li>
                    <li>Contact</li>
                    <div className=' w-[80%] m-auto border-b-2 p-0'></div>
                    <li className='flex justify-between w-[80%] m-auto text-[25px]'>
                        <FaLinkedin/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaGithub/>
                    </li>

                </ul>
            </div>}
    </>
  )
}
