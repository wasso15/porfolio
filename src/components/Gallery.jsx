import React from 'react'
import ButtonSecondary from './ButtonSecondary'

export const Gallery = () => {
  return (
    <>
        <div className='flex  gap-6'>
            <div className=' w-1/2 flex flex-col justify-end items-end'> 
              <p> Vainqueur du challenge GenU </p>
              <div className="flex flex-wrap w-[60%] py-2">
                    <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621432/My_Website/1665416134189_1_iats3m.jpg"/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621431/My_Website/1665416134098_kqhpzr.jpg"/>
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671628688/My_Website/311380481_1955378901326946_2908222229314796026_n_nx1cru.jpg"/>
                    </div>
             </div>
             <ButtonSecondary > En Savoir Plus </ButtonSecondary>
            </div>

            <div className='w-1/2'> 
                <div>
                <p> Finaliste de la Hackanthon Media App </p>
                    <div className="flex flex-wrap w-[60%] py-2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4425_wqstv0.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621434/My_Website/_VAN4436_kndbz4.jpg"/>
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4263_penyaz.jpg"/>
                        </div>
                    </div>
                    <ButtonSecondary > En Savoir Plus </ButtonSecondary>
                </div>
             </div>

        </div>

    </>
  )
}

{/* <div>

 <div className=" px-5 lg:pt-2 lg:px-10 w-[100%]">
 
    <div className='flex flex-wrap m-0 md:-m-2 pt-3 pb-3 justify-between w-[90%] mx-auto font-bold '>
        <p> Vainqueur du challenge GenU </p>
        <p> Finaliste de la Hackanthon Media App </p>
    </div>
    
    <div className="flex flex-wrap -m-1 md:-m-2 w-[90%] mx-auto">
      
      <div className="flex flex-wrap w-[35%]">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621432/My_Website/1665416134189_1_iats3m.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621431/My_Website/1665416134098_kqhpzr.jpg"/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671628688/My_Website/311380481_1955378901326946_2908222229314796026_n_nx1cru.jpg"/>
        </div>
      </div>


      <div className="flex flex-wrap w-[35%]">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4425_wqstv0.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621434/My_Website/_VAN4436_kndbz4.jpg"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1671621433/My_Website/_VAN4263_penyaz.jpg"/>
        </div>
      </div>

    </div>
    
     <div className=' flex flex-wrap m-0 md:-m-2 pt-3 justify-between w-[90%] mx-auto '>
        <ButtonSecondary > En Savoir Plus </ButtonSecondary>
        <ButtonSecondary> En Savoir Plus </ButtonSecondary>
    </div>
              
  </div>
    </div> */}
