import React from 'react'
import { FaPhone, FaVoicemail} from "react-icons/fa";
import { MdMail, MdPhone} from "react-icons/md";


export const Maps = () => {
  return (
    <div>
         <div className=" p-6 rounded-lg ml-6 md:ml-9 max-w-md text-[#222A35] ">
            <p> Kinshasa Republique democratique du congo </p>
            <div className=' border h-[360px] mt-3 '>
                
            </div>
            <div className='mt-3'>
            <div className='flex'>
                   
                   <MdPhone className='text-[25px]'/> <span className='pl-3'> +243811907343</span>
              </div>
                <div className='flex'>
                   
                     <MdMail className='text-[25px]'/> <span className='pl-3'> wassoguylain15@gmail.com</span>
                </div>


            </div>

         </div>
    </div>
  )
}
