import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_DURATION_S = 1;

const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-50%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 100,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});
export const Hero = ({heroData}) => {
  return (
    <div className=' w-[90%] md:w-[85%] h-[65%] mx-auto mt-2 md:mt-16 flex flex-col md:flex-row '>
      
      <div className=' w-[100%] md:w-[65%] '> 
     ² <AnimatePresence> 
          <motion.div 
            key={heroData.title + "icon"}
            variants={getVariants("top")}
            initial={"initial"}
            exit={"initial"}
            animate={"animate"}       
            className='skill'>
              <p className='leading-none'>  {heroData.title} </p> 
          </motion.div> 
          <motion.div
          key={heroData.subTitle}
          variants={getVariants("bottom")}
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
