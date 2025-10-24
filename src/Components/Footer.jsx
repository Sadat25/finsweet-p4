import React from 'react'
import Container from './Container'
import logo from '../assets/Footer-Logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { NavLink } from 'react-router';


const Footer = () => {
    return (
        <div>
            <footer className='bg-Tint-Blue pt-24 mt-32 '>
                <Container className="lg:flex px-20 lg:px-0 pb-10 lg:pb-0">
                    <div className='lg:w-1/2 mb-10 lg:mb-0'>
                        <img src={logo} alt="" />
                        <p className='font-Poppins font-medium leading-7 text-white/80 lg:w-100 mt-[22px] mb-[86px] '>We are always open to discuss your project and improve your online presence.</p>
                        <div className='bg-[#FCD980] lg:w-[450px] py-4.5 px-9.5 md:flex items-center justify-between '>
                            <div>
                                <h2 className='text-Dark-Blue font-Poppins font-medium leading-8 text-lg text-center '>Email me at</h2>
                                <p className='text-Dark-Blue/80 font-Poppins text-center'>contact@website.com</p>
                            </div>
                            <div>
                                <h2 className='text-Dark-Blue font-Poppins font-medium leading-8 text-lg text-center '>Call us</h2>
                                <p className='text-Dark-Blue/80 font-Poppins text-center'>0927 6277 28525</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='font-Poppins font-semibold text-5xl leading-16 text-white '>Lets Talk!</h2>
                        <p className=' lg:w-100 text-white/80 font-Poppins mt-3.5 mb-7 '>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className='text-white flex gap-7 '>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </Container>
            </footer>
            <div className='container py-8 lg:flex items-center justify-between'>
                <p className='text-center '>Copyright 2022, Finsweet.com</p>
                <ul className='lg:flex items-center gap-8 text-center'>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black font-bold" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Home</li>
                        )}
                    </NavLink>
                    <NavLink to="/about">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>About</li>
                        )}
                    </NavLink>
                    <NavLink to="/features">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Features</li>
                        )}
                    </NavLink>
                    <NavLink to="/pricing">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Pricing</li>
                        )}
                    </NavLink>
                    <NavLink to="/work">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Work</li>
                        )}
                    </NavLink>
                    <NavLink to="/read">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Read</li>
                        )}
                    </NavLink>
                    <NavLink to="/blog">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Blog</li>
                        )}
                    </NavLink>
                    <NavLink to="/read-blog">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Read Blog</li>
                        )}
                    </NavLink>
                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Contact</li>
                        )}
                    </NavLink>
                    <NavLink to="/policy">
                        {({ isActive }) => (
                            <li className={isActive ? "text-black" : "text-[#494971] hover:text-black font-Poppins font-medium leading-[26px] cursor-pointer"}>Policy</li>
                        )}
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Footer