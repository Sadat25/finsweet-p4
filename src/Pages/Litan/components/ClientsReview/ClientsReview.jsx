import React from 'react'
import client from '../../images/client.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientReviews } from '../../../../utils/reviews/reviews';

const ClientsReview = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='py-15 md:py-20 bg-purple-50 dark:bg-slate-800'>
            <div className="container px-5 md:px-0">
                <div className="flex justify-between gap-8 flex-col md:flex-row">
                    <div className="md:w-4/12">
                        <h2 className='md:text-4xl text-3xl font-bold mb-2'>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="md:w-9/12">
                        <Slider {...settings}>
                            {
                                clientReviews.map(item => (
                                    <div className="bg-white p-5 rounded-md border border-gray-200">
                                        <h4 className='md:text-2xl text-xl font-medium mb-10'>'{item.review}'</h4>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <img className='w-10 h-10 object-cover rounded-full' src={item.image} alt="client" />
                                                <div className="">
                                                    <h4 className='text-lg'>{item.name}</h4>
                                                    <p className='text-xs'>{item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsReview


const SampleNextArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className='bg-white border border-gray-200 h-10 w-10 rounded-full flex justify-center items-center text-gray-700 duration-300 hover:bg-Royal-Blue hover:text-white absolute right-0 -bottom-12 z-10 cursor-pointer'>
            <FaChevronRight />
        </button>
    );
}

const SamplePrevArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className='bg-white border border-gray-200 h-10 w-10 rounded-full flex justify-center items-center text-gray-700 duration-300 hover:bg-Royal-Blue hover:text-white absolute right-15 -bottom-12 z-10 cursor-pointer'>
            <FaChevronLeft />
        </button>
    );
}