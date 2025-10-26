import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const TemplateReusable = ({ image, bg, title }) => {
    return (
        <>
      
        <div className='w-full max-w-[623px]'> 
        
       
        <div className={bg} >
                <img className='pt-7 mx-auto lg:h-[340px]' src={image} alt={title} /> 
            </div>
            
          
            <h1 className='text-[28px]  text-[#282938] font-Poppins font-semibold dark:text-white pt-[24px]'>{title} </h1>
          
            <p className='lg:text-[16px] md:text-[12px] text-[#282938] font-Poppins font-normal dark:text-white pt-[12px] lg:w-[600px] md:w-full'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            
            <a className='flex items-center gap-1.5 py-2 dark:text-white pt-[24px] pb-[64px]' href="#">View Portfolio <FaArrowRightLong /></a>
        </div>
            
        </>
    )
}

export default TemplateReusable