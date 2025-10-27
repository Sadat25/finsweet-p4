import React from 'react'
import state from '../assets/state.png'

import transform from '../assets/Tarnsform.png'
import Software from '../assets/Software.png'
import Vehicle from '../assets/Vehicle.png'
import Customer from '../assets/Customer.png'
import Andrew from '../assets/Andrew.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const templeteData = [
  {
    id: 1,
    title: "Templete 1",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#F4EDE1] to-[#98B1C6] '

  },
  {
    id: 2,
    title: "Templete 2",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#FFD3AF] to-[#4F56FF] '

  },
  {
    id: 3,
    title: "Templete 3",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#EEBCA7] to-[#C8C8C8]'

  },
  {
    id: 4,
    title: "Templete 4",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#C2E7F2  ] to-[#98A4FF] '

  },
  {
    id: 5,
    title: "Templete 5",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#C5BCFF] to-[#9BF6D5]'

  },
  {
    id: 6,
    title: "Templete 6",
    image: state,
    details: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    button: "View Portfolio",
    bg: 'bg-gradient-to-r from-[#D2D6FD] to-[#D6ACEA] '

  },

]
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



          <div className='w-full flex flex-wrap justify-center pt-[48px] lg:text-center'>
            {templeteData.map((item) =>

              <div key={item.id} className=' w-full max-w-[623px] '>


                <div className={`${item.bg} lg:w-[600px] lg:h-[380px] md:w-full  `} >
                  <img className='pt-7 mx-auto lg:h-[340px]  ' src={item.image} alt='' />
                </div>


                <h1 className='text-[28px]  text-[#282938] font-Poppins font-semibold dark:text-white pt-[24px]'>{item.title} </h1>

                <p className='lg:text-[16px] md:text-[12px] text-[#282938] font-Poppins font-normal dark:text-white pt-[12px] lg:w-[600px] md:w-full'>{item.details}</p>

                <a className='flex items-center gap-1.5 py-2 dark:text-white pt-[24px] pb-[64px]' href="#">{item.button} <FaArrowRightLong /></a>
              </div>
            )}
          </div>




          <div className='w-full text-center lg:pt-[128px] md:pt-[80px]'>

            <h2 className='text-[30px]   font-Poppins font-semibold mx-auto px-4 dark:text-white'>Let's build something great together</h2>
            <p className='lg:text-[16px] font-Poppins font-medium text-[#282938] lg:w-[562px] lg:mx-auto md:mx-auto py-2 px-4 dark:text-white '>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            <div className='lg:pt-[40px] lg:pb-[128px] '>
              <a className='py-4 px-8 inline-block bg-[#FCD980] rounded-3xl dark:text-white text-[#1B1C2B] font-semibold ' href="#">Contuct Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Template