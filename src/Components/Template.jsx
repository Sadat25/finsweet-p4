import React from 'react'
import state from '../assets/state.png'
import TemplateReusable from './Reusable/TemplateReusable'
import transform from '../assets/Tarnsform.png'
import Software from '../assets/Software.png'
import Vehicle from '../assets/Vehicle.png'
import Customer from '../assets/Customer.png'
import Andrew from '../assets/Andrew.png'


const Template = () => {
  return (
    <>
      <div className='py-10'>
        <div className='container  mx-auto px-4 '>
          <div className='w-full pt-[96px]'>
            <ul className='flex flex-wrap gap-3 justify-center '> 
              <li className='font-Poppins text-[16px]  text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer dark:text-white'>All</li>
              <li className='font-Poppins text-[16px]  text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer dark:text-white'>UI Design</li>
              <li className='font-Poppins text-[16px] text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer dark:text-white'>Webflow Design</li>
              <li className='font-Poppins text-[16px]  text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer dark:text-white'>Figma Design</li>
            </ul>
          </div>
          
        
          <div className='w-full flex flex-wrap justify-between pt-[48px]  '> 
            
           
            <TemplateReusable image={state} bg="bg-gradient-to-b from-[#F4EDE1] to-[#98B1C6] lg:w-[600px] md:w-full lg:h-[380px] " title="Template 1" />
            <TemplateReusable image={transform} bg="bg-gradient-to-b from-[#FFD3AF] to-[#4F56FF] lg:w-[600px] md:w-full lg:h-[380px]" title="Template 2" />
            <TemplateReusable  image={Vehicle} bg="bg-gradient-to-b from-[#EEBCA7] to-[#C8C8C8] lg:w-[600px] md:w-full lg:h-[380px] " title="Template 3" />
            <TemplateReusable image={Software} bg="bg-gradient-to-b from-[#C2E7F2] to-[#98A4FF] lg:w-[600px] md:w-full lg:h-[380px]" title="Template 4" />
            <TemplateReusable image={Andrew} bg="bg-gradient-to-b from-[#C5BCFF] to-[#9BF6D5] lg:w-[600px] md:w-full lg:h-[380px]" title="Template 5" />
            <TemplateReusable image={Customer} bg="bg-gradient-to-b from-[#D2D6FD] to-[#D6ACEA] lg:w-[600px] md:w-full lg:h-[380px]" title="Template 6" />
            
          </div>
          
        
          <div className='w-full text-center lg:pt-[128px] md:pt-[80px]'>
         
            <h2 className='text-[30px]   font-Poppins font-semibold mx-auto px-4 dark:text-white'>Let's build something great together</h2>
            <p className='lg:text-[16px] font-Poppins font-medium text-[#282938] lg:w-[562px] lg:mx-auto md:mx-auto py-2 px-4 dark:text-white '>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            <div className='lg:pt-[40px] lg:pb-[128px] '>
              <a className='py-2 px-6 bg-[#FCD980] rounded-[20px] dark:text-white text-[#1B1C2B] font-semibold ' href="#">Contuct Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Template