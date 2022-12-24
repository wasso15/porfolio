import React from 'react'

const ButtonSecondary = ({children}) => {
  return (
    <button type='button' className=' rounded-sm  hover:bg-[#FFCC01] ml-2 md:ml-0 w-[140px] h-[36px] text-[#ffff] hover:text-[#222A35] border-2 hover:border-none text-[12px] lg:text-sm font-bold'> {children} </button>
  )
}

export default ButtonSecondary