import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'

const PrivacyPolicy = () => {

  return (
    <div className='dark:bg-Dark-Blue'>
      <div className="p-4 flex justify-end">
      </div>

      <div className='container mx-auto px-4 md:px-8 py-10 dark:bg-Dark-Blue'>
        <div className='mx-auto pb-8'> 
          <h2 className='text-[32px] sm:text-[40px] lg:text-[48px] font-Poppins font-bold text-[#282938] dark:text-white text-center'>
            Privacy Policy
          </h2>
          <p className='text-[16px] font-Poppins font-regular max-w-xl text-[#282938] dark:text-gray-300 mx-auto text-center'>
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your 
          </p>
        </div>

        <div className='w-full max-w-4xl mx-auto px-4 md:px-0'>
          <h2 className='text-[28px] sm:text-[32px] lg:text-[38px] font-Poppins font-bold py-2 dark:text-white'>
            Lorem ipsum dolor.
          </h2>
          <p className='text-[16px] font-Poppins font-regular pt-2 text-[#282938] dark:text-gray-300'>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='text-[16px] font-Poppins font-regular pt-2 text-[#282938] dark:text-gray-300'>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='w-full max-w-4xl mx-auto pt-8 px-4 md:px-0'>
          <h2 className='text-[28px] sm:text-[32px] lg:text-[38px] font-Poppins font-bold py-2 dark:text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit..
          </h2>
          <p className='text-[16px] font-Poppins font-regular pt-2 text-[#282938] dark:text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..
          </p>
          
          <ul className='py-4 text-[#282938] dark:text-gray-300'>
            <li className='text-[16px] font-Poppins font-regular flex items-start py-2 gap-2'>
              <GoDotFill className='mt-1' />Lorem ipsum dolor sit amet.
            </li>
            <li className='text-[16px] font-Poppins font-regular flex items-start py-2 gap-2'>
              <GoDotFill className='mt-1' />Lorem ipsum dolor sit amet.
            </li>
            <li className='text-[16px] font-Poppins font-regular flex items-start py-2 gap-2'>
              <GoDotFill className='mt-1' />Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <p className='text-[16px] font-Poppins font-regular text-[#282938] dark:text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
