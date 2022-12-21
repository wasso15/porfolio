import React from 'react'

const ButtonSecondary = ({children}) => {
  return (
    <button type='button' className=' rounded-sm  hover:bg-[#FFCC01] w-[160px] h-[40px] text-[#ffff] hover:text-[#222A35] border hover:border-none text-[12px] lg:text-sm font-bold'> {children} </button>
  )
}

export default ButtonSecondary