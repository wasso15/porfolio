import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';



export const Gallery = () => {
  const [width, setwidth]= useState(0); 
  const carousel= useRef();  
  useEffect(()=>{
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
      <>
        
              <motion.div ref={carousel} className=' cursor-grab overflow-hidden w-full md:w-[80%] mx-auto h-[45%] md:h-[45%]' whileTap={"grabbing"}>
              <p className=' text-xs   md:text-sm pb-1 pl-2 text'> Vainqueur du challenge GenU </p>
              <motion.div drag='x' dragConstraints={{right:0, left:-width}} className='flex pb-1 '>
                
                      <motion.div className='  min-w-max md:w-[210px] h-[40vw] md:h-[210px] p-2 '>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621432/My_Website/1665416134189_1_iats3m.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>

                      <motion.div className=' min-w-max md:w-[210px] h-[40vw] md:h-[210px] p-2'>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621431/My_Website/1665416134098_kqhpzr.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>
                      
                      <motion.div className=' min-w-max md:w-[210px] h-[40vw] md:h-[210px] p-2 '>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671628688/My_Website/311380481_1955378901326946_2908222229314796026_n_nx1cru.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>
              </motion.div>
            </motion.div>


            <motion.div ref={carousel} className=' cursor-grab overflow-hidden w-full md:w-[80%] mx-auto h-[45%] md:h-[45%] ' whileTap={"grabbing"}>
              <p className=' text-xs   md:text-sm pb-1 pl-2'> Finaliste de la Hackanthon Media App </p>
              <motion.div drag='x' dragConstraints={{right:0, left:-width}} className='flex pb-1 '>
                
                      <motion.div className=' min-w-max md:w-[210px] h-[38vw] md:h-[210px] p-2 '>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4425_wqstv0.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>

                      <motion.div className=' min-w-max md:w-[210px] h-[40vw] md:h-[210px] p-2'>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621434/My_Website/_VAN4436_kndbz4.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>
                      
                      <motion.div className=' min-w-max md:w-[210px] h-[40vw] md:h-[210px] p-2'>
                          <img 
                          src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4263_penyaz.jpg"
                          className=" w-full h-full pointer-events-none rounded-md "
                          alt=""/>
                      </motion.div>
              </motion.div>
            </motion.div>
      </>

  )
}




{/* <div className='flex flex-col md:flex-row  gap-6'>
            <div className=' w-full md:w-1/2 flex flex-col justify-end items-center md:items-end mx-auto md:mx border'> 
              <p className=' text-xs   md:text-sm'> Vainqueur du challenge GenU </p>
              
              <div className="md:flex  w-[90vw] md:w-[70%] border-4 py-2 overflow-y-hidden">
                    <div className='flex'>

                        <div className=" w-24 md:w-1/2 p-1 md:p-2">
                            <img alt="gallery" className=" object-cover object-center w-50 h-40 rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621432/My_Website/1665416134189_1_iats3m.jpg"/>
                        </div>
                        <div className="w-24  md:w-1/2 p-1 md:p-2">
                            <img alt="gallery" className=" object-cover object-center w-50 h-40 md:w-full md:h-full rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621431/My_Website/1665416134098_kqhpzr.jpg"/>
                        </div>
                        <div className="w-24  md:w-1/2 p-1 md:p-2">
                            <img alt="gallery" className=" object-cover object-center w-full h-full rounded-lg"
                            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671628688/My_Website/311380481_1955378901326946_2908222229314796026_n_nx1cru.jpg"/>
                        </div>

                    </div>
                    
             </div>
             <ButtonSecondary > En Savoir Plus </ButtonSecondary>
            </div>

            <div className='w-1/2'> 
                <div>
                <p> Finaliste de la Hackanthon Media App </p>
                    <div className="flex flex-wrap w-[60%] py-2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4425_wqstv0.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621434/My_Website/_VAN4436_kndbz4.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4263_penyaz.jpg"/>
                        </div>
                    </div>
                    <ButtonSecondary > En Savoir Plus </ButtonSecondary>
                </div>
             </div>

        </div>

  */}