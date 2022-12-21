import React from 'react'
import { Button } from './Button'

export const ContactForm = () => {
  return (
    <>
        
        
         <div className=" p-6 rounded-lg ml-6 md:ml-9 max-w-md">
         <p className='text-[#222A35] leading-tight pb-6'>  Avez vous une question ou une proposition ?</p>

        <form>
            <div className="form-group mb-6">
            <input type="text" className="form-control block  w-full px-3  py-1.5 h-[40px]
                 text-sm
                text-[#222A35]
                bg-white/40 bg-clip-padding
                border border-solid border-[#222A35]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-70 focus:border-[#FFCC01] focus:outline-none"
                placeholder="Votre Nom"/>
            </div>

            <div className="form-group mb-6">
            <input type="email" className=" block
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
                placeholder="Email address"/>
            </div>
            <div className="form-group mb-6">
            <textarea
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-[#222A35]                bg-white/30 bg-clip-padding
                border border-solid border-[#222A35]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-70 focus:border-[#FFCC01] focus:outline-none"           
            rows="5"
            placeholder="Message"
            ></textarea>
            </div>
            <Button> Envoyer </Button>

        </form>
</div>
    </>
    
  )
}
