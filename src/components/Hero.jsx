import React from 'react'

export const Hero = () => {
  return (
    <div className=' w-[90%] md:w-[85%] h-[65%] mx-auto mt-2 md:mt-16 flex flex-col md:flex-row '>
     
      <div className=' w-[100%] md:w-[65%] '> 
          <div className='skill '>
              <p className='leading-none'>  Guylain <br/> Wasso</p> 
          </div> 
          <div className=' subTitle w-[100%] md:w-[70%] leading-tight text-[14px] md:text-[18px] text-white/90 mt-4  '> Curieux, amateur du travail bien fait avec une forte capacité d'apprendre et de maîtriser rapidement des nouvelles choses,  challenger par essence, je suis disponible pour tout type de défis.</div>
      </div>

      <div className=' rounded-lg mr-26  hidden md:block'> 
          <img className=" w-full h-full object-cover rounded-lg "src='https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671541442/My_Website/hero_img_vlwwlk.jpg'/>
       </div>
    </div>
  )
}
