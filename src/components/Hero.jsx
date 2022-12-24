import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

export const Hero = ({heroData}) => {
  return (
    <div className=' w-[90%] md:w-[85%] h-[65%] mx-auto mt-2 md:mt-16 flex flex-col md:flex-row '>
      
      <div className=' w-[100%] md:w-[65%] '> 
      <AnimatePresence> 
          <motion.div 
            key={heroData.title + "icon"}
            initial={"initial"}
            exit={"initial"}
            animate={"animate"}       
            className='skill'>
            <p className='leading-none'>  {heroData.title} </p> 
          </motion.div> 
          <motion.div
          key={heroData.subTitle}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
          className=' subTitle w-[100%] md:w-[70%] leading-tight text-[14px] md:text-[18px] text-white/90 mt-4  '> 
             {heroData.subTitle}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className=' rounded-lg mr-26  hidden md:block'> 
          <img className=" w-full h-full object-cover rounded-lg "src='https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671541442/My_Website/hero_img_vlwwlk.jpg'/>
       </div>
    </div>
  )
}
