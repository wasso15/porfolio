import React from 'react'

export const SectionTitle = ({children, color }) => {
  return (
    <div className=' ml-2 md:ml-14  py-4'>
         <div className={`sectionTitle text-[32px] text-[${color}] `}>{children}</div>
         <div className='border-b-[6px] border-[#FFCC01] w-[90px]'> </div>
    </div>
    
   
  )
}
