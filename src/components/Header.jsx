import React, { useState } from 'react'
import { Button } from './Button';
import { DropMenu } from './DropMenu';
import { BsFillGrid3X3GapFill } from "react-icons/bs";


export const Header = () => {
    const [openDropMenu, setOpenDropMenu]= useState(false)
  return (
    <div className=' h-16 w-full py-12'>

      <div className=' flex justify-between items-center  h-full  '>
            <div className='logoName  ml-6 md:ml-20 text-[#FFCC01] cursor-pointer'>  GW </div>

            <div className='flex mr-6 md:mr-20 items-center justify-between w-[50%] md:w-[30%] lg:w-[20%]'> 
                <Button> Telecharger CV </Button>
              
                <BsFillGrid3X3GapFill
                    className= ' ml-6 text-[50px] md:text-[40px] cursor-pointer'
                    onClick={(e)=> {setOpenDropMenu(!openDropMenu); e.stopPropagation()}} 
                />                
            </div>
            
      </div>
      <DropMenu open={openDropMenu} setOpen={setOpenDropMenu}/>
    </div>
  )
}
