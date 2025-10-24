import React from 'react'
import smith from "../Images/smith.png"

const Card2 = ({img,title,para,}) => {
  return (
    <div className='container bg-white pb-5 lg:w-[296px] lg:h-[344px] pt-12 px-16 '>
        <img src={img} alt="" className='lg:m-0 m-auto' />
        <h2 className='text-[24px] dark:text-black font-Poppins font-medium pt-7.5 text-center'>{title}</h2>
        <h2 className='font-Poppins pt-1 text-center dark:text-black'>{para}</h2>
      
    </div>
  )
}

export default Card2
