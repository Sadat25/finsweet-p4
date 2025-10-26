import React from 'react'
import Container from '../Container'
import Btn from '../Btn'

const CTA = () => {
  return (
    <>
    <section className='md:py-[60px] dark:bg-Dark-Blue'>
        <Container>
            <div className="text-center px-3 md:px-0">
                <h3 className='w-[360px] md:w-[630px] lg:w-[730px] m-auto text-[28px] md:text-[38] lg:text-[48px] font-Poppins font-semibold dark:text-gray-50 text-Dark-Blue'>Let's build something great together</h3>
                <p className=' md:w-[430px] m-auto pt-7 pb-10 text-[12px] font-Poppins font-medium dark:text-gray-50 text-Dark-Blue'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                <button className='lg:px-[67px] px-10 lg:py-6 py-4 text-Dark-Blue bg-[#FCD980] hover:bg-Dark-Blue dark:hover:bg-gray-50 dark:hover:text-Dark-Blue hover:text-white font-Manrope font-semibold lg:text-[18px] text-[10px] rounded-full duration-500 ease-in-out cursor-pointer'>Contact Us</button>
            </div>
        </Container>
    </section>
    </>
  )
}

export default CTA