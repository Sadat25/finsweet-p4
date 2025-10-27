import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

const Contact = () => {

  return (
    <div className='dark:bg-Dark-Blue'>

      <div className='w-full py-5'>
        <div className='container'>
          <div className='mx-auto px-4 lg:pt-[128px] md:-[60px]'>
            <h2 className='lg:text-[32px] md:text-[28px]   font-Poppins font-bold text-[#282938] dark:text-white text-center'>
              Contact Us
            </h2>
            <p className='text-[16px] font-Poppins font-regular lg:w-[562px] md:w-full text-[#282938] mx-auto text-center dark:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="w-full mt-[64px] ">
          <div className="bg-[#F4F6FC] dark:bg-Dark-Blue mx-auto w-full max-w-[1062px] rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 py-[55px] flex flex-col md:flex-row md:flex-wrap gap-6 justify-center overflow-hidden">




              <div className="w-full  md:w-[90%] lg:w-[438px] mx-auto">
                <h2 className="text-[18px] font-Poppins font-medium dark:text-white mb-2">Name</h2>
                <input type="text" placeholder="Enter Your Name" className="w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white" />
              </div>
              <div className="w-full  md:w-[90%] lg:w-[438px] mx-auto">
                <h2 className="text-[18px] font-Poppins font-medium dark:text-white mb-2">Email</h2>
                <input type="text" placeholder="Enter Your Email" className="w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white" />
              </div>


              <div className="w-full  md:w-[90%] lg:w-[438px] mx-auto">
                <h2 className="text-[18px] font-Poppins font-medium dark:text-white mb-2">Subject</h2>
                <input type="text" placeholder="Provide context" className="w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white" /> </div>


              <div className="w-full  md:w-[90%] lg:w-[438px] mx-auto">
                <h2 className="text-[18px] font-Poppins font-medium dark:text-white mb-2">Subject</h2>
                <input type="text" placeholder="Select Subject" className="w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white" /> </div>


                <div className="w-full lg:ml-3 md:w-[90%] lg:w-full mx-auto">
                <h2 className="text-[18px] font-Poppins font-medium dark:text-white mb-2">Message</h2>
                <textarea placeholder="Write your question here" className=" lg:w-full w-full h-[138px] border border-[#D2D2E0] dark:border-gray-600 p-5 text-[16px] font-Poppins font-medium transition duration-300 dark:bg-gray-800 dark:text-white" /> </div>


              <div className="w-full py-5 lg:ml-[42px] md:ml-0  mx-auto">
                <a href="#" className="inline-block px-8 py-3 bg-[#282938] hover:bg-Royal-Blue text-white text-[16px] font-Poppins font-semibold rounded-full shadow-md transition duration-300">Send Message</a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
