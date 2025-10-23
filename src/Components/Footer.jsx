import React from 'react'
import Container from './Container'
import logo from '../assets/Footer-Logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className='bg-Tint-Blue pt-24 mt-32 '>
                <Container className="flex">
                    <div className='w-1/2'>
                        <img src={logo} alt="" />
                        <p className='font-Poppins font-medium leading-7 text-white/80 w-100 mt-[22px] mb-[86px] '>We are always open to discuss your project and improve your online presence.</p>
                        <div className='bg-[#FCD980] w-[450px] py-4.5 px-9.5 flex items-center justify-between '>
                            <div>
                                <h2 className='text-Dark-Blue font-Poppins font-medium leading-8 text-lg '>Email me at</h2>
                                <p className='text-Dark-Blue/80 font-Poppins '>contact@website.com</p>
                            </div>
                            <div>
                                <h2 className='text-Dark-Blue font-Poppins font-medium leading-8 text-lg '>Call us</h2>
                                <p className='text-Dark-Blue/80 font-Poppins '>0927 6277 28525</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-Poppins font-semibold text-5xl leading-16 text-white '>Lets Talk!</h2>
                        <p className=' w-100 text-white/80 font-Poppins mt-3.5 mb-7 '>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className='text-white flex gap-7 '>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </Container>
            </footer>
            <div className='container py-8 flex items-center justify-between'>
                <p>Copyright 2022, Finsweet.com</p>
                <ul className='flex items-center gap-8 '>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">Home</li>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">About us</li>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">Features</li>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">Pricing</li>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">FAQ</li>
                    <li className="   font-Poppins font-medium leading-[26px] cursor-pointer">Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer