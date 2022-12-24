import React from 'react'
import { MdClose} from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion} from "framer-motion";


export const DropMenu = ({open, setOpen}) => {
    window.addEventListener('click', (e)=>{
        setOpen(false)

      })

      const itemVariants = {
        open: {
          opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      };

  return (
    <>
         {/* {open &&  */}
         <motion.div 
          variants={itemVariants}
          initial={false}
          animate={open ? "open" : "closed"}
          className=' bg-white rounded w-screen md:w-[290px] h-screen md:h-[340px] absolute md:right-10 top-[75px] text-[#222A35]'>
        <motion.ul 
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7
            }
          }
        }}
        style={{ pointerEvents: open ? "auto" : "none" }}
        className='dropMenuList'>
                    <motion.li  variants={itemVariants} className='mt-4'>Réalisation</motion.li>
                    <motion.li  variants={itemVariants}>Récompense</motion.li>
                    <motion.li  variants={itemVariants}> Blog</motion.li>
                    <motion.li  variants={itemVariants}>Contact</motion.li>
                    <motion.div variants={itemVariants} className=' mt-9 w-[80%] mx-auto border-b-2 p-0'></motion.div>
                    <motion.li  variants={itemVariants} className='flex justify-between w-[80%] m-auto text-[25px]'>
                        <FaLinkedin />
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaGithub/>
                    </motion.li>

                </motion.ul>
            </motion.div>
            {/* } */}
    </>
  )
}
