import React from 'react'
import inquiry from '../../images/inquiry.jpg'
import Btn from '../../../../Components/Btn'
import { FaArrowRightLong } from 'react-icons/fa6'
const Inquiry = () => {
    return (
        <div>
            <div className="container px-5 md:px-0 dark:bg-slate-800">
                <div className="flex bg-Tint-Blue flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 relative">
                        <img className='w-full' src={inquiry} alt="inquiry" />
                        <div className="absolute inset-0 bg-Tint-Blue/50 flex justify-center items-center">
                            <div className="text-white px-5 md:px-10">
                                <h4 className='text-3xl md:text-4xl font-bold '>Building stellar websites for early startups</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex justify-center items-center h-full">
                            <div className="max-w-md w-full text-white space-y-3">
                                <h4 className='text-3xl font-medium'>Send inquiry</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form className='w-full space-y-2'>
                                    <input className='w-full border border-gray-400 px-5 py-2.5 rounded-sm' placeholder='Your Name' />
                                    <input className='w-full border border-gray-400 px-5 py-2.5 rounded-sm' placeholder='Email' />
                                    <input className='w-full border border-gray-400 px-5 py-2.5 rounded-sm' placeholder='Paste your Figma design URL' />
                                </form>
                                <Btn className={'bg-[#FCD980] !text-Tint-Blue w-full'}>Send an Inquiry</Btn>
                                <div className="flex justify-center">
                                    <a className='flex items-center gap-2' href="/">Get in touch with us<FaArrowRightLong /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inquiry