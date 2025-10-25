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
        <div className='container max-w-[1280px] mx-auto px-4 md:px-8'> {/* Add max-width and padding for smaller screens */}
          <div className='w-full '>
            <ul className='flex flex-wrap gap-3 justify-center'> {/* Use flex-wrap for smaller screens */}
              <li className='font-Poppins text-[16px] md:text-[18px] text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer'>All</li>
              <li className='font-Poppins text-[16px] md:text-[18px] text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer'>UI Design</li>
              <li className='font-Poppins text-[16px] md:text-[18px] text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer'>Webflow Design</li>
              <li className='font-Poppins text-[16px] md:text-[18px] text-[#282938] hover:text-Royal-Blue transition ease-in-out cursor-pointer'>Figma Design</li>
            </ul>
          </div>
          
        
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-3 place-items-center'> 
            
           
            <TemplateReusable image={state} bg="bg-gradient-to-b from-[#F4EDE1] to-[#98B1C6] w-full h-[380px]" title="Template 1" />
            <TemplateReusable image={transform} bg="bg-gradient-to-b from-[#FFD3AF] to-[#4F56FF] w-full h-[380px]" title="Template 2" />
            <TemplateReusable image={Vehicle} bg="bg-gradient-to-b from-[#EEBCA7] to-[#C8C8C8] w-full h-[380px]" title="Template 3" />
            <TemplateReusable image={Software} bg="bg-gradient-to-b from-[#C2E7F2] to-[#98A4FF] w-full h-[380px]" title="Template 4" />
            <TemplateReusable image={Andrew} bg="bg-gradient-to-b from-[#C5BCFF] to-[#9BF6D5] w-full h-[380px]" title="Template 5" />
            <TemplateReusable image={Customer} bg="bg-gradient-to-b from-[#D2D6FD] to-[#D6ACEA] w-full h-[380px]" title="Template 6" />
            
          </div>
          
        
          <div className='w-full text-center py-[50px]'>
         
            <h2 className='text-[30px] sm:text-[38px] lg:text-[48px] font-Poppins font-semibold max-w-full lg:max-w-[730px] mx-auto px-4 dark:text-white'>Let's build something great together</h2>
            <p className='text-[16px] font-Poppins font-medium max-w-full lg:max-w-[562px] mx-auto py-2 px-4 dark:text-white'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            <div className='pt-5'>
              <a className='py-2 px-6 bg-[#FCD980] rounded-[20px] dark:text-white' href="#">Contuct Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Template