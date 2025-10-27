import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  function heandleshow() {
    setShow(!show);
  }
  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScrool);
    return () => window.removeEventListener('scroll', handleScrool)
  }, []);
  const navMenu = <>
    <NavLink className='block my-2' to="/">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Home</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/about">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>About</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/features">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Features</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/pricing">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Pricing</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/work">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Work</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/read">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Read</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/blog">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Blog</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/read-blog">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Read Blog</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/contact">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Contact</li>
      )}
    </NavLink>
    <NavLink className='block my-2' to="/policy">
      {({ isActive }) => (
        <li className={isActive ? "text-light font-Poppins" : "text-white hover:text-light font-Poppins cursor-pointer"}>Policy</li>
      )}
    </NavLink>
  </>
  return (
    <>
      <nav className={`${isScrolled ? 'bg-Tint-Blue/70' : 'bg-Tint-Blue'} backdrop-blur-2xl sticky top-0 left-0 w-full z-30`}>
        <div className="container lg:flex items-center justify-between py-4 px-5 lg:px-0">
          <div className='flex items-center justify-between'>
            <NavLink className='block' to="/">
              <img className='cursor-pointer' src={logo} alt="" />
            </NavLink>
            <button className='text-2xl cursor-pointer block lg:hidden text-white' onClick={heandleshow} > {show ? <FaXmark /> : <FaBars />}</button>
          </div>
          <ul className='lg:flex hidden gap-3'>
            {navMenu}
          </ul>
          <div className={`hidden lg:block`}>
              <button className='px-6 py-3  text-white font-Poppins font-medium cursor-pointer border-2 border-[#F4F6FC]/20 rounded-[40px] block m-auto bg-Tint-Blue duration-300 hover:bg-light hover:text-Dark-Blue'>Contact us</button>
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <div className={` ${show && 'top-[70px]'} text-white fixed w-full -top-100 duration-1000 ${isScrolled ? 'bg-Tint-Blue/70' : 'bg-Tint-Blue'} backdrop-blur-2xl z-20 border-b border-b-gray-600 lg:hidden`}>
        <ul className='container text-center py-5'>
          {navMenu}
          <button className='px-6 py-3  text-white font-Poppins font-medium cursor-pointer border-2 border-[#F4F6FC]/20 rounded-[40px] block m-auto bg-Tint-Blue duration-300 hover:bg-light hover:text-Dark-Blue'>Contact us</button>
        </ul>
      </div>
    </>
  )
}

export default Navbar;