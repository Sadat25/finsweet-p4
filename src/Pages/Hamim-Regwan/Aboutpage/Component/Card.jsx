import React from 'react'


const Card = ({img,title,para}) => {
  return (
    <div className='container dark:bg-[#1C1E53] dark:border-white dark:border-2  bg-[#F4F6FC] lg:w-[405px] pb-12 pt-12.5 pl-12 pr-7.5'>
      <img src={img} alt="" className='' />
      <h2 className='text-[24px] font-medium font-Poppins pt-6.5'>{title}</h2>
      <p className='font-Poppins pt-3'>{para}</p>
    </div>
  )
}

export default Card
