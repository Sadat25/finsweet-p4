import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
const BlogCard = ({ date, title, details, image }) => {
    return (
        <div className='space-y-2 duration-300 hover:scale-105'>
            <img className='w-full' src={image} alt="blog" />
            <p className='text-Dark-Blue/70'>{date}</p>
            <h4 className='text-2xl font-medium line-clamp-3'>{title}</h4>
            <p className='text-Dark-Blue/60'>{details}</p>
            <a className='flex items-center gap-2 font-medium' href="/">Read More<FaArrowRightLong /></a>
        </div>
    )
}

export default BlogCard