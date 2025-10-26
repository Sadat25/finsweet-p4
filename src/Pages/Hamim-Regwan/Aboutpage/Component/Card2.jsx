import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Card2 = ({img,title,para,}) => {
  return (
    <div className='container bg-white pb-5 lg:w-full w-[296px]  pt-12 px-16 group '>
      <div className='relative w-full overflow-hidden rounded-full '>
        <img src={img} alt="" className='lg:m-0 m-auto w-full rounded-full ' />
        <div className='  flex gap-3  translate-y-full group-hover:translate-0 bg-linear-to-t from-Royal-Blue to-gray-400/5 via-purple-500/50 opacity-0 duration-700 transition-all group-hover:opacity-100   rounded-full absolute  inset-0 '>
        </div>
        <div className='absolute -translate-x-1/2 bottom-3 left-1/2 flex gap-3 opacity-0 duration-300 transition-all group-hover:opacity-100 '>
          <FaFacebook className='text-white' />
          <FaTwitter className='text-white' />
          <FaLinkedin className='text-white'/>
        </div>
      </div>
        <h2 className='text-[24px] dark:text-black font-Poppins font-medium pt-7.5 text-center'>{title}</h2>
        <h2 className='font-Poppins pt-1 text-center dark:text-black'>{para}</h2>
    </div>
  )
}

export default Card2
