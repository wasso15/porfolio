import React from 'react'; 
import {FaAngleRight} from "react-icons/fa";

export const Card = () => {
  return (
    <div>

       <div className=' w-[90vw] md:w-[340px] h-[135px] ml-5 mb-3 bg-white rounded-xl  text-[#222A35] flex shadow-xl  '>
             <img  className="w-[55%] h-full rounded-l-sm pointer-events-none" src="https://bit.ly/2EApSiC" alt="Room Image"/>
             
             <div className='flex flex-col justify-between'>
                
                <div className=' pt-4 pl-4'>
                    <h3 className='font-bold'> Mon Porfolio </h3>
                    <p className=' text-[11px] font-medium pt-1 '> Site web  présentant  mes differentes  réalisations </p>
                </div>
                
                <div className=' flex justify-center gap-5 pointer-events-none' >
                    <img className=' h-5 w-5 object-cover'src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671570332/My_Website/Tailwind_CSS_Logo_jcfa1f.svg" alt="" />
                    <img className=' h-5 w-5 object-cover'src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671570333/My_Website/React-icon.svg_rgqn1n.png" alt="" />
                    <img className=' h-5 w-5 object-cover'src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671570332/My_Website/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67_g3sqjk.png" alt="" />
                </div>
                <div className=' bg-[#222A35] text-white text-xs h-8 rounded-br-lg flex items-center border cursor-pointer '> 
                    <div className=' w-[80%] flex items-center justify-between'>
                        <span className='pl-4'> Acceder </span>
                        <FaAngleRight className='text-[#FFCC01] text-lg'/>
                    </div>
               </div>
             </div>

       </div>
    </div>
  )
}
