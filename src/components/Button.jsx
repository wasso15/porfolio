import React from 'react'

export const Button = ({children}) => {
  return (
    <button type='button' className=' rounded-sm bg-[#FFCC01] hover:bg-[#FFCC01]/95 w-[160px] h-[40px] text-[#222A35] text-[12px] lg:text-sm font-bold'> {children} </button>
  )
}
