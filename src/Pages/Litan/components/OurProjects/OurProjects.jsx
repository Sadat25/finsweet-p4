import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'

const OurProjects = () => {
    return (
        <div className='bg-white py-10 md:py-20 dark:bg-slate-800'>
            <div className="container px-5 md:px-0">
                <div className="flex justify-between items-center mb-10">
                    <h3 className='text-5xl font-bold'>View our projects</h3>
                    <a href="#" className='flex gap-2 items-center font-medium'>View More <FaArrowRightLong /></a>
                </div>
                <div className="flex justify-between gap-8 flex-col md:flex-row">
                    <div className="md:w-8/12">
                        <div className="relative group duration-300 ">
                            <img className='w-full' src={card1} alt="Card img" />
                            <div className="bg-linear-to-b from-blue-300/50 to-slate-900 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-all">
                                <div className="">
                                    <h4 className='text-3xl font-semibold text-white'>Unisaas Website Design</h4>
                                    <a href="#" className='text-yellow-500 font-medium flex gap-2 items-center text-xl mt-5'>View portfolio <FaArrowRightLong /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/12">
                        <div className="space-y-8">
                            <div className="relative group duration-300 w-full">
                                <img className='w-full' src={card2} alt="Card img" />
                                <div className="bg-linear-to-b from-blue-300/50 to-slate-900 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-all">
                                    <div className="">
                                        <h4 className='text-3xl font-semibold text-white'>Unisaas Website Design</h4>
                                        <a href="#" className='text-yellow-500 font-medium flex gap-2 items-center text-xl mt-5'>View portfolio <FaArrowRightLong /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group duration-300 w-full">
                                <img className='w-full' src={card3} alt="Card img" />
                                <div className="bg-linear-to-b from-blue-300/50 to-slate-900 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-all">
                                    <div className="">
                                        <h4 className='text-3xl font-semibold text-white'>Unisaas Website Design</h4>
                                        <a href="#" className='text-yellow-500 font-medium flex gap-2 items-center text-xl mt-5'>View portfolio <FaArrowRightLong /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects