import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import pointer1 from '../../images/pointer1.png'
import pointer2 from '../../images/pointer2.png'
import pointer3 from '../../images/pointer3.png'
import pointer4 from '../../images/pointer4.png'
const HowWeWork = () => {
    return (
        <div className='bg-gray-100 py-10 md:py-20'>
            <div className="container px-5 md:px-0">
                <div className="flex justify-between gap-8 flex-col md:flex-row">
                    <div className="md:w-5/12 space-y-3">
                        <h2 className='text-5xl font-bold'>How we work</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a className='text-Royal-Blue text-lg font-medium flex items-center gap-2' href="/">Get in touch with us <FaArrowRightLong /></a>
                    </div>
                    <div className="md:w-7/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <img src={pointer1} alt="Pointer" />
                                <h4 className='text-3xl font-medium'>Strategy</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="space-y-2">
                                <img src={pointer2} alt="Pointer" />
                                <h4 className='text-3xl font-medium'>Wireframing</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="space-y-2">
                                <img src={pointer3} alt="Pointer" />
                                <h4 className='text-3xl font-medium'>Design</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="space-y-2">
                                <img src={pointer4} alt="Pointer" />
                                <h4 className='text-3xl font-medium'>Development</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork