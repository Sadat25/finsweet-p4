import logo from '../assets/Logo.png';
import { IoIosSunny } from "react-icons/io";
import { FiAlignRight } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className='bg-Tint-Blue'>
      <div className="container flex items-center justify-between py-4 px-2 lg:px-0">
        <img className='cursor-pointer' src={logo} alt="" />
        <div className='flex items-center gap-12 '>
          <ul className='lg:flex hidden items-center gap-8'>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Home</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">About us</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Features</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Pricing</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">FAQ</li>
            <li className="text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer">Blog</li>
          </ul>
          <button className='hidden lg:flex lg:px-12 lg:py-4 bg-transparent text-white font-Poppins font-medium leading-7 cursor-pointer border-2 border-[#F4F6FC]/20 rounded-4xl '>Contact us</button>
          <IoIosSunny className='hidden lg:flex text-amber-300 cursor-pointer' />
        </div>
        <div className='flex lg:hidden items-center gap-1'>
          <CiSearch className='text-white lg:hidden text-4xl cursor-pointer' />
          <FiAlignRight className='text-white lg:hidden text-4xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;