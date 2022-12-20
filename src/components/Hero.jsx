import React from 'react'

export const Hero = () => {
  return (
    <div className='w-[85%] h-[65%] mx-auto mt-16 flex '>
      <div className=' w-[65%] '> 
          <div className='skill'>
              <p className='leading-none'>  Guylain <br/> Wasso</p> 
          </div> 
          <div className=' subTitle w-[70%] leading-tight text-[18px] text-white/90 mt-4  '> Curieux, amateur du travail bien fait avec une forte capacité d'apprendre et de maîtriser rapidement des nouvelles choses,  challenger par essence, je suis disponible pour tout type de défis.</div>
      </div>
      <div className=' rounded-lg mr-26'> 
          <img className=" w-full h-full object-cover rounded-lg "src='https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671541442/My_Website/hero_img_vlwwlk.jpg'/>
       </div>
    </div>
  )
}
