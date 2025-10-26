import React, { useState, useEffect } from 'react' 
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
          <div className='mx-auto px-4 lg:pt-[128px] md:-[60px]'> 
            <h2 className='lg:text-[32px] md:text-[28px]   font-Poppins font-bold text-[#282938] dark:text-white text-center'>
              Contact Us
            </h2>
            <p className='text-[16px] font-Poppins font-regular lg:w-[562px] md:w-full text-[#282938] mx-auto text-center dark:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className='w-full  mt-[64px] '>
            <div className='lg:w-[1062px] lg:h-[640px] md:w-full md:h-[40px] bg-[#F4F6FC] dark:bg-Dark-Blue  mx-auto lg:flex lg:flex-wrap  justify-between  pt-[55px]'>
              
              <div className='lg:w-[438px] lg:h-[64px] md:w-full md:h-[40px] mx-auto '>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Name</h2>
                <input className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300  dark:bg-gray-800 dark:text-white' type="text" placeholder='Enter Your Name' />
              </div>

              <div className='lg:w-[438px] lg:h-[64px] md:w-full md:h-[40px] mx-auto'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Email</h2>
                <input className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white'  type="text" placeholder='Enter your Email'/>
              </div>

              <div className='lg:w-[438px] lg:h-[64px] md:w-full md:h-[40px] mx-auto'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Subject</h2>
                <input className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white' 
                  type="text"  placeholder='Provide context'  />
              </div>

              <div className='lg:w-[438px] lg:h-[64px] md:w-full md:h-[40px] mx-auto'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Subject</h2>
                <input  className='w-full h-[64px] border border-[#D2D2E0] dark:border-gray-600 pl-5 text-[16px] font-Poppins font-medium rounded-lg transition duration-300  dark:bg-gray-800 dark:text-white' 
                  type="text"  placeholder='Select Subject' />
              </div>

              <div className='w-full lg:ml-[42px] md:ml-0'>
                <h2 className='text-[18px] font-Poppins font-medium dark:text-white'>Message</h2>
                <textarea className='lg:w-[908px] lg:h-[138px]  border border-[#D2D2E0] dark:border-gray-600 p-5 text-[16px] font-Poppins font-medium rounded-lg resize-none transition duration-300  dark:bg-gray-800 dark:text-white' placeholder='Write your question here' />
              </div>

              <div className='w-full py-5  '>
                <a className='  px-8 py-3 lg:ml-[42px] md:ml-0 bg-[#282938] hover:bg-Royal-Blue text-white text-[16px] font-Poppins font-semibold rounded-full shadow-md transition duration-300 '
                href="#">Send Message</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
