import { useState } from 'react';
import logo from '../assets/Logo.png';
import { FiAlignRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => {
    // console.log(handleClick);
    setShow(!show)
  }

  const navActive = ({ isActive }) =>
    isActive
      ? "lg:text-[#DB4444] font-semibold"
      : "lg:text-[#000000] hover:text-[#DB4444]";


  return (
    <div className='bg-Tint-Blue'>
      <div className="container flex items-center justify-between py-4 px-2 lg:px-0">
        <img className='cursor-pointer ' src={logo} alt="" />

        <div className={`${show ? 'block' : 'hidden'} lg:flex absolute justify-between items-center lg:top-16 top-17 left-0 bg-Dark-Blue lg:static lg:bg-transparent gap-8 p-4 lg:p-0 w-full lg:w-auto`}>
          <ul className='flex flex-col lg:flex-row lg:items-center gap-x-8 '>
            <div className={navActive}>
              <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Home</li>
            </div>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">About us</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Features</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Pricing</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">FAQ</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Blog</li>
          </ul>
          <div>
            <button className='flex justify-center items-center gap-2 mt-4 lg:mt-0 lg:px-12 px-8 lg:py-4 py-1 pl-0 bg-transparent text-white font-Poppins font-medium lg:leading-7 cursor-pointer lg:border-2 border-[#F4F6FC]/20 rounded-4xl'>
              <RiContactsLine className='lg:hidden' />Contact us</button>
          </div>

        </div>
        <div className='flex lg:hidden items-center gap-1 w-[25%]'>
          <CiSearch className='text-white lg:hidden text-4xl cursor-pointer' />
          <FiAlignRight onClick={handleClick} className='text-white text-4xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;