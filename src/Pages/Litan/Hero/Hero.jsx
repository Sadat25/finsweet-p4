import React from 'react'
import hero from '../images/hero.svg'
import Btn from '../../../Components/Btn'
import { FaArrowRightLong } from 'react-icons/fa6'
const Hero = () => {
    return (
        <div>
            <div className='bg-Tint-Blue py-10 md:py-20'>
                <div className="container px-5 md:px-0">
                    <div className="flex justify-between gap-8 flex-col-reverse md:flex-row">
                        <div className="md:w-1/2 text-white space-y-5">
                            <h2 className='text-4xl md:text-6xl font-semibold'>Building stellar websites for early startups</h2>
                            <p className='text-white/70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="flex gap-5 items-center">
                                <Btn className='bg-[#FCD980] text-Tint-Blue!'>View our work</Btn>
                                <a className='flex items-center gap-2' href="/">View Pricing <FaArrowRightLong /></a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img className='w-full' src={hero} alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero