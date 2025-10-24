import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='bg-Tint-Blue'>
      <div className="container flex items-center justify-between py-4">
        <img className='cursor-pointer' src={logo} alt="" />
        <div className='flex items-center gap-12 '>
          <ul className='flex items-center gap-8 '>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Home</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">About us</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Features</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Pricing</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">FAQ</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Blog</li>
          </ul>
          <button className='px-12 py-4 bg-transparent text-white font-Poppins font-medium leading-7 cursor-pointer border-2 border-[#F4F6FC]/20 rounded-4xl '>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar