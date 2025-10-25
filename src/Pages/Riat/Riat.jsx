import React from 'react'
import Container from '../../Components/Container'
import { BiSolidRightArrow } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from 'react';
const Riat = () => {
const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
  return (
    <div className='dark:bg-black'>
      <Container>
        <label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? "Dark Mode" : "Light Mode"}</span>
</label>


        <div className="text-center lg:pt-40 lg:px-100 lg px-50">
          <h1 className='font-Poppins lg:text-5xl text-3xl font-semibold lg:py-4 pt-4 py-2 dark:text-[#F4F6FC]'>Our Pricing Plans</h1>
          <p className='font-Poppins text-[14px] dark:text-[#F4F6FC]'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
        <div className="flex gap-10 py-25">
          <div className="w-1/3 lg:px-10 lg:py-25 px-3 pt-10 pb-20 bg-[#F4F6FC] dark:text-white dark:bg-[#1C1E53] hover:bg-[#1C1E53] dark:hover:bg-[#F4F6FC] hover:text-[#F4F6FC] dark:hover:text-[#1C1E53] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Poppins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full hover:bg-[#FCD980] dark:bg-[#FCD980] text-[#F4F6FC] dark:hover:text-[#F4F6FC] hover:text-[#282938] dark:text-[#282938] bg-[#282938] dark:hover:bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
           <div className="w-1/3 lg:px-10 lg:py-25 px-3 pt-10 pb-20 bg-[#F4F6FC] dark:text-white dark:bg-[#1C1E53] hover:bg-[#1C1E53] dark:hover:bg-[#F4F6FC] hover:text-[#F4F6FC] dark:hover:text-[#1C1E53] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Poppins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full hover:bg-[#FCD980] dark:bg-[#FCD980] text-[#F4F6FC] dark:hover:text-[#F4F6FC] hover:text-[#282938] dark:text-[#282938] bg-[#282938] dark:hover:bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
           <div className="w-1/3 lg:px-10 lg:py-25 px-3 pt-10 pb-20 bg-[#F4F6FC] dark:text-white dark:bg-[#1C1E53] hover:bg-[#1C1E53] dark:hover:bg-[#F4F6FC] hover:text-[#F4F6FC] dark:hover:text-[#1C1E53] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Poppins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full hover:bg-[#FCD980] dark:bg-[#FCD980] text-[#F4F6FC] dark:hover:text-[#F4F6FC] hover:text-[#282938] dark:text-[#282938] bg-[#282938] dark:hover:bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
        

        </div>
        <div className="lg:flex">
          <div className="lg:w-1/3 px-3">
          <h2 className='font-Poppins lg:text-5xl text-4xl py-5 dark:text-white'>Frequently asked questions</h2>
          <p className='font-Poppins text-[14px] text-Royal-Blue'>Contact us For More Info</p>
          </div>
          <div className="lg:w-2/3 lg:py-0 py-10 px-10">
          <div className="flex justify-between border-b-2 border-Royal-Blue pb-8">
            <p className='font-Poppins text-Royal-Blue'>01</p>
            <div className="pl-20 pr-30">
              <h5 className='font-Poppins text-2xl dark:text-white'>How much time does it take ?</h5>
              <p className='py-3 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="pt-2 dark:text-white">
              <RxCross1/>
            </div>
          </div>
           <div className="flex items-center border-b-2 border-Royal-Blue pb-8 pt-8">
            <div className="w-3/22">
              <p className='font-Poppins  text-Royal-Blue font-semibold '>02</p>
            </div>
              <div className="w-18/22">
                <h5 className='font-Poppins text-2xl w-full dark:text-white'>What is your class naming convention ?</h5>
              </div>
            <div className="w-1/22 dark:text-white">
              <FiPlus/>
            </div>
          </div>
           <div className="flex items-center border-b-2 border-Royal-Blue pb-8 pt-8">
            <div className="w-3/22">
              <p className='font-Poppins text-Royal-Blue font-semibold'>03</p>
            </div>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl dark:text-white'>How do we communicate ?</h5>
            </div>
            <div className="1/22 dark:text-white">
              <FiPlus/>
            </div>
          </div>
           <div className="flex items-center border-b border-Royal-Blue pb-8 pt-8">
            <div className="w-3/22">
              <p className='font-Poppins text-Royal-Blue font-semibold'>04</p>
            </div>
              <h5 className='font-Poppins text-2xl w-18/22 dark:text-white'>I have a bigger project. Can you handle it ?</h5>
            <div className="1/22 dark:text-white">
              <FiPlus/>
            </div>
          </div>
           <div className="flex items-center border-b border-Royal-Blue pb-8 pt-8">
            <div className="w-3/22">
              <p className='font-Poppins text-Royal-Blue font-semibold'>05</p>
            </div>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl dark:text-white'>What is your class naming convention ? </h5>
            </div>
            <div className="w-1/22 dark:text-white">
              <FiPlus/>
            </div>
          </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Riat