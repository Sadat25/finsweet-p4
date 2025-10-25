import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'



const WorkPortfolio = () => {
  return (
  <>
    <div className="bg-[#F4F6FC] dark:bg-Dark-Blue py-[80px] sm:py-[100px]">
  <div className="container px-4">
    <div className="w-full text-center">
   
      <h3 className="text-[#282938] text-[14px] sm:text-[16px] font-semibold font-Poppins dark:text-white">
        What we created
      </h3>

     
      <h2 className="text-[#282938] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold font-Poppins mt-2 dark:text-white">
        Our Work Portfolio
      </h2>

    
      <p className="text-[#282938] text-[12px] sm:text-[14px] md:text-[16px] font-medium font-Poppins max-w-[700px] mx-auto mt-4 leading-relaxed px-2 dark:text-white">
        We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
      </p>

      
      <div className="flex justify-center items-center gap-4 py-4 mt-2">
        <FaFacebookF className="text-[#282938]  text-[18px] sm:text-[20px] cursor-pointer transition-all duration-200" />
        <FaTwitter className="text-[#282938]  text-[18px] sm:text-[20px] cursor-pointer transition-all duration-200" />
        <FaInstagram className="text-[#282938]  text-[18px] sm:text-[20px] cursor-pointer transition-all duration-200" />
        <CiLinkedin className="text-[#282938]  text-[18px] sm:text-[20px] cursor-pointer transition-all duration-200" />
      </div>
    </div>
  </div>
 
</div>

  </>



  )
}

export default WorkPortfolio