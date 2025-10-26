import React, { useState } from 'react'
import Container from '../../Components/Container'
import second from '../../assets/Main image.png'
import men from "../../assets/men's.png"

const Rafin = () => {
  const [click, setClick] = useState(false)

  const handlechange = () => {
    setClick(!click)
  }

  return (
    <>
      <div className={`${click ? 'dark' : ''} dark:bg-Tint-Blue dark:text-white`} >
        <label className="inline-flex items-center cursor-pointer  fixed top-[130px] right-[100px]">
          <input type="checkbox" onClick={() => setClick(!click)} value="" class="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
        <Container className="px-25 ">
          <h2 className='text-Dark-Blue/80 dark:text-white font-Poppins font-medium text-2xl leading-9'>Web design and development</h2>
          <h1 className='text-Dark-Blue dark:text-white font-Poppins font-semibold text-5xl leading-16 my-3.5'>Finsweet Design case <br /> studies</h1>
          <p className='text-Dark-Blue/70 dark:text-white font-Poppins font-medium leading-7 lg:w-[817px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          <img className='my-12' src={second} alt="" />
          <div className='flex items-center pb-8 border-b border-Dark-Blue/30 '>
            <div className='w-[30%]'>
              <p className='text-Dark-Blue/80 dark:text-white font-Poppins font-medium leading-7 mb-1'>Client</p>
              <p className='text-Dark-Blue dark:text-white font-Poppins font-medium text-2xl leading-9'>facebook.com</p>
            </div>
            <div className='w-[30%]'>
              <p className='text-Dark-Blue/80 dark:text-white font-Poppins font-medium leading-7 mb-1'>Service</p>
              <p className='text-Dark-Blue dark:text-white font-Poppins font-medium text-2xl leading-9'>Product Design</p>
            </div>
            <div className='w-[40%]'>
              <p className='text-Dark-Blue/80 dark:text-white font-Poppins font-medium leading-7 mb-1'>Deliverable</p>
              <p className='text-Dark-Blue dark:text-white font-Poppins font-medium text-2xl leading-9'>UI Screens, UX Flow & Prototype</p>
            </div>
          </div>
          <div className='lg:px-[166px] mt-24'>
            <h1 className='text-Dark-Blue dark:text-white font-Poppins font-semibold text-[38px] leading-14 mb-3'>About the project</h1>
            <p className='text-Dark-Blue/70 dark:text-white font-Poppins leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className='ml-4.5 mt-6 text-Dark-Blue/70 dark:text-white font-Poppins leading-7'>
              <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li className='list-disc py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
              <li className='list-disc'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
              <li className='list-disc py-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
            </ul>
            <img className='my-16' src={men} alt="" />
            <h1 className='text-Dark-Blue dark:text-white font-Poppins font-semibold text-[38px] leading-14 mb-3'>How we do it</h1>
            <p className='text-Dark-Blue/70 dark:text-white font-Poppins leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className='ml-4.5 mt-6 text-Dark-Blue/70 dark:text-white font-Poppins leading-7'>
              <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li className='list-disc py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
              <li className='list-disc'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
              <li className='list-disc py-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
            </ul>
            <div className='w-238 border-t grid-cols-1 dark:border-white  border-gray-800 border-b lg:flex lg:justify-between lg:pl-0 pl-6 lg:text-center m-auto mt-16 pt-6 pb-6'>
              <h2 className='font-medium font-Poppins text-[24px] text-Royal-Blue'>Keywords</h2>
              <p className='font-Poppins font-medium text-[18px]'>Design </p>
              <p className='font-Poppins font-medium text-[18px]'>UI/UX </p>
              <p className='font-Poppins font-medium text-[18px]'>Wireframing</p>
              <p className='font-Poppins font-medium text-[18px]'>Branding</p>
              <p className='font-Poppins font-medium text-[18px]'>Development</p>
              <p className='font-Poppins font-medium text-[18px]'>webflow</p>
            </div>

            <div className='mt-32 grid-cols-3'>
              <h1 className='lg:text-[48px] font-Poppins font-semibold text-center'>Let's build something great <span className='block'>together</span> </h1>
              <p className='font-Poppins lg:font-medium m-auto text-center lg:w-156 pt-5'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
              <div className='flex justify-center items-center mt-14'>
                <button className='bg-[#FCD980] px-6 py-3 rounded-[50px] cursor-pointer hover:bg-Royal-Blue text-[18px] font-semibold font-Manrope  '>Contact Us</button>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>

  )
}

export default Rafin