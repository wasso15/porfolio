import React from 'react'
import { Card } from './Card'

export const Cards = ({children}) => {
  return (
   <>
      <p className='text-[#222A35] ml-6 md:ml-16 py-1 '>{children} </p>
      <div className='w-[90%] m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}
