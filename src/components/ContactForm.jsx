import React, { useRef, useState } from 'react'
import { Button } from './Button'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactForm = () => {

  const formData= useRef();
   const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });}

  const onSubmitForm= (e)=>{
    e.preventDefault()   
    emailjs.sendForm('service_4norilt', 'template_zv4giw8', formData.current, 'eWvN1CE31vd2M-D5H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setEmail(' '); 
      setNom(' ')
      setMessage(' ')
      formData.current.reset()
    }


      const [isDisable, setIsDisable]= useState(true); 
      const [nom, setNom]= useState()
      const [email, setEmail]= useState(); 
      const [message, setMessage]= useState()

      const handleChange= (e)=>{
            console.log(e.target.value)
      }
    const check=()=>{
        if(nom.length>=3 && validator.isEmail(email) && message.length>=3 )
        {
            setIsDisable(false)
        }
        else
        {
            setIsDisable(true)
      }
    }

  return (
    <>        
         <div className=" p-2 md:p-6 rounded-lg ml-2 md:ml-10 max-w-md">
         <p className='text-[#222A35] leading-tight pb-6'>  Avez vous une question ou une proposition ?</p>

        <form ref={formData} onSubmit={onSubmitForm}>
        <div className="form-group mb-10">
            <input 
                value={nom}
                onChange={e=> {setNom(e.target.value); check()}}
                type="text"
                className=" block
                w-full
                h-[40px]
                px-3
                py-1.5
                text-sm
                font-normal
                text-[#222A35]
                bg-white/30 bg-clip-padding
                border border-solid border-[#222A35]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-70 focus:border-[#FFCC01] focus:outline-none"
               placeholder='Votre nom' name='user_name'/>
            </div>
           <div className="form-group mb-10">
            
            <input type="email" 
            value={email}
            onChange={e=> {setEmail(e.target.value); check()}}
            className=" block
                
                w-full
                h-[40px]
                px-3
                py-1.5
                text-sm
                font-normal
                text-[#222A35]
                bg-white/30 bg-clip-padding
                border border-solid border-[#222A35]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-70 focus:border-[#FFCC01] focus:outline-none"
                placeholder="Adresse email" name='user_email'/>
            </div>
           
            <div className="form-group mb-4">
            <textarea
             onChange={e=> {setMessage(e.target.value); check()}}
             className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-[#222A35] bg-white/30 bg-clip-padding
                border border-solid border-[#222A35]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-70 focus:border-[#FFCC01] focus:outline-none"           
            rows="5"
           placeholder='message'
            name='message'
            >
            {message}
            </textarea>
            </div>
          
    <motion.button 
    whileTap={{scale:0.05}}
    type='submit' 
    onClick={()=>showToastMessage()}
    className=' rounded-sm bg-[#FFCC01] hover:bg-[#FFCC01]/95 w-[160px] h-[40px] text-[#222A35] text-[12px] lg:text-sm font-bold disabled:bg-[#d1d1d1] disabled:cursor-not-allowed' disabled={isDisable} > Envoyer </motion.button>
        <ToastContainer/>
        </form>
</div>
    </>
    
  )
}
