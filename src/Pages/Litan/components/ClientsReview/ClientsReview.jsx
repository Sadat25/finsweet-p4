import React from 'react'
import client from '../../images/client.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
const ClientsReview = () => {
    return (
        <div className='py-10 md:py-20 bg-purple-50 dark:bg-slate-800'>
            <div className="container px-5 md:px-0">
                <div className="flex justify-between gap-8 flex-col md:flex-row">
                    <div className="md:w-4/12">
                        <h2 className='text-4xl font-bold mb-2'>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="md:w-9/12">
                        <h4 className='text-3xl font-medium mb-10'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img className='w-10 h-10 object-cover rounded-full' src={client} alt="client" />
                                <div className="">
                                    <h4 className='text-lg'>Jenny Wilson</h4>
                                    <p className='text-xs'>Vice President</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <a href="/" className='bg-white border border-gray-200 h-10 w-10 rounded-full flex justify-center items-center text-gray-700 duration-300 hover:bg-Royal-Blue hover:text-white'><FaChevronLeft /></a>
                                <a href="/" className='bg-white border border-gray-200 h-10 w-10 rounded-full flex justify-center items-center text-gray-700 duration-300 hover:bg-Royal-Blue hover:text-white'><FaChevronRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview