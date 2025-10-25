import React, { useState, useEffect } from 'react' // ✅ import useState and useEffect
import { FaMoon, FaSun } from 'react-icons/fa6'

const Contact = () => {
  const [show, setShow] = useState(false)

  // Toggle dark mode
  useEffect(() => {
    if (show) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [show])

  return (
    <div className='dark:bg-Dark-Blue'>
      <div className="p-4 flex justify-end">
        <button
          onClick={() => setShow(!show)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {show ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      <div className='w-full py-5'>
        <div className='container'>
          <div className='mx-auto px-4'> 
            <h2 className='text-[32px] sm:text-[40px] lg:text-[48px] font-Poppins font-bold text-[#282938] dark:text-white text-center'>
              Contact Us
            </h2>
            <p className='text-[16px] font-Poppins font-regular max-w-xl text-[#282938] mx-auto text-center dark:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className='w-full py-10 overflow-x-hidden'>
            <div className='w-full max-w-6xl bg-[#F4F6FC] dark:bg-Dark-Blue h-auto mx-auto p-6 md:p-10 lg:p-[90px] flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 rounded-xl shadow-lg'>
              
              <div className='w-full md:w-[calc(50%-16px)]'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Name</h2>
                <input 
                  className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 bg-white dark:bg-gray-800 dark:text-white' 
                  type="text" 
                  placeholder='Enter Your Name' 
                />
              </div>

              <div className='w-full md:w-[calc(50%-16px)]'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Email</h2>
                <input 
                  className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 bg-white dark:bg-gray-800 dark:text-white' 
                  type="text" 
                  placeholder='Enter your Email' 
                />
              </div>

              <div className='w-full md:w-[calc(50%-16px)]'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Subject</h2>
                <input 
                  className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 bg-white dark:bg-gray-800 dark:text-white' 
                  type="text" 
                  placeholder='Provide context' 
                />
              </div>

              <div className='w-full md:w-[calc(50%-16px)]'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Subject</h2>
                <input 
                  className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 bg-white dark:bg-gray-800 dark:text-white' 
                  type="text" 
                  placeholder='Select Subject' 
                />
              </div>

              <div className='w-full'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Message</h2>
                <textarea 
                  className='w-full h-[138px] border border-[#D2D2E0] dark:border-gray-600 p-5 text-[16px] font-Poppins font-medium rounded-lg resize-none transition duration-300 bg-white dark:bg-gray-800 dark:text-white' 
                  placeholder='Write your question here' 
                />
              </div>

              <div className='w-full py-5 flex justify-center md:justify-start'>
                <a 
                  className='w-full md:w-auto px-8 py-4 bg-[#282938] hover:bg-Royal-Blue text-white text-[16px] font-Poppins font-semibold rounded-full shadow-md transition duration-300 text-center' 
                  href="#"
                >
                  Send Message
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
