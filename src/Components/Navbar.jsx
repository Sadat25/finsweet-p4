import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Navbar = () => {

  const [show, setShow] = useState(false)
  function heandleshow() {
    setShow(!show)
    console.log(show)
  }

  return (
    <div className='bg-Tint-Blue'>
      <div className="container lg:flex items-center justify-between py-4 px-5 lg:px-0">
        <div className='flex items-center justify-between'>
          <NavLink to="/">
            <img className='cursor-pointer' src={logo} alt="" />
          </NavLink>
          <FaBars className='text-2xl cursor-pointer block lg:hidden mr-10 text-white' onClick={heandleshow} />
        </div>
        <div className={` ${show ? 'block' : 'hidden'} lg:block`}>
          <div className='lg:flex items-center gap-12'>
            <ul className='lg:flex text-center items-center gap-8 pb-5 mt-5 lg:mt-0 lg:pb-0 '>
              <NavLink to="/">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Home</li>
                )}
              </NavLink>
              <NavLink to="/about">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>About</li>
                )}
              </NavLink>
              <NavLink to="/features">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Features</li>
                )}
              </NavLink>
              <NavLink to="/pricing">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Pricing</li>
                )}
              </NavLink>
              <NavLink to="/work">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Work</li>
                )}
              </NavLink>
              <NavLink to="/read">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Read</li>
                )}
              </NavLink>
              <NavLink to="/blog">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Blog</li>
                )}
              </NavLink>
              <NavLink to="/read-blog">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Read Blog</li>
                )}
              </NavLink>
              <NavLink to="/contact">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Contact</li>
                )}
              </NavLink>
              <NavLink to="/policy">
                {({ isActive }) => (
                  <li className={isActive ? "text-white" : "text-[#BBBBCB] hover:text-white font-Poppins font-medium leading-[26px] cursor-pointer"}>Policy</li>
                )}
              </NavLink>
            </ul>
            <button className='px-12 py-4 bg-transparent text-white font-Poppins font-medium leading-7 cursor-pointer border-2 border-[#F4F6FC]/20 rounded-4xl block m-auto'>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar