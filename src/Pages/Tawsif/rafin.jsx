import React from 'react'
import Container from '../../Components/Container'
import second from '../../assets/Main image.png'
import men from "../../assets/men's.png"

const rafin = () => {
  return (
    <>
      <Container className="px-25 ">
        <h2 className='text-Dark-Blue/80 font-Poppins font-medium text-2xl leading-9'>Web design and development</h2>
        <h1 className='text-Dark-Blue font-Poppins font-semibold text-5xl leading-16 my-3.5'>Finsweet Design case <br /> studies</h1>
        <p className='text-Dark-Blue/70 font-Poppins font-medium leading-7 lg:w-[817px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <img className='my-12' src={second} alt="" />
        <div className='flex items-center pb-8 border-b border-Dark-Blue/30 '>
          <div className='w-[30%]'>
            <p className='text-Dark-Blue/80 font-Poppins font-medium leading-7 mb-1'>Client</p>
            <p className='text-Dark-Blue font-Poppins font-medium text-2xl leading-9'>facebook.com</p>
          </div>
          <div className='w-[30%]'>
            <p className='text-Dark-Blue/80 font-Poppins font-medium leading-7 mb-1'>Service</p>
            <p className='text-Dark-Blue font-Poppins font-medium text-2xl leading-9'>Product Design</p>
          </div>
          <div className='w-[40%]'>
            <p className='text-Dark-Blue/80 font-Poppins font-medium leading-7 mb-1'>Deliverable</p>
            <p className='text-Dark-Blue font-Poppins font-medium text-2xl leading-9'>UI Screens, UX Flow & Prototype</p>
          </div>
        </div>
        <div className='lg:px-[166px] mt-24'>
          <h1 className='text-Dark-Blue font-Poppins font-semibold text-[38px] leading-14 mb-3'>About the project</h1>
          <p className='text-Dark-Blue/70 font-Poppins leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className='ml-4.5 mt-6 text-Dark-Blue/70 font-Poppins leading-7'>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className='list-disc py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className='list-disc'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li className='list-disc py-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
          <img className='my-16' src={men} alt="" />
          <h1 className='text-Dark-Blue font-Poppins font-semibold text-[38px] leading-14 mb-3'>How we do it</h1>
          <p className='text-Dark-Blue/70 font-Poppins leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul className='ml-4.5 mt-6 text-Dark-Blue/70 font-Poppins leading-7'>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className='list-disc py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className='list-disc'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li className='list-disc py-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
        </div>
      </Container>
    </>

  )
}

export default rafin