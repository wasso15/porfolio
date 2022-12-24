import React, { useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import { motion } from 'framer-motion'
import { MdVideoLibrary, MdPlaylistPlay, MdMenu, MdChevronLeft, MdChevronRight,MdLogout, MdClose } from "react-icons/md";


export const Cards = ({children}) => {
  const [width, setwidth]= useState(0); 
   

  useEffect(()=>{
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const carousel= useRef();
  

  return (
   <div className='mt-6 border'>
      <p className='text-[#222A35] ml-2 md:ml-16 py-1 '>{children} </p>
      
     <motion.div 
        ref={carousel}
        drag='x' dragConstraints={{right:0, left:-width}}
        className='w-[100%] md:w-[90%] m-auto flex overflow-scroll-x gap-5 cursor-grab
      '>
    
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>  
            
      </motion.div>

    </div>
  )
}


