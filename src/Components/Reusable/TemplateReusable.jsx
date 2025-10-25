import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const TemplateReusable = ({ image, bg, title }) => {
    return (
        <>
      
        <div className='w-full max-w-[623px]'> 
        
       
        <div className={bg} >
                <img className='pt-7 mx-auto h-[380px] object-cover' src={image} alt={title} /> 
            </div>
            
          
            <h1 className='text-[28px] sm:text-[32px] md:text-[38px] text-[#282938] font-Poppins font-semibold dark:text-white'>{title} </h1>
          
            <p className='text-[16px] text-[#282938] font-Poppins font-normal dark:text-white'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            
            <a className='flex items-center gap-1.5 py-2 dark:text-white' href="#">View Portfolio <FaArrowRightLong /></a>
        </div>
            
        </>
    )
}

export default TemplateReusable