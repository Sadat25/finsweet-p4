import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
const Blogs = () => {
    return (
        <>
            <div className='bg-white py-10 md:py-20'>
                <div className="container px-5 md:px-0">
                    <h2 className='text-5xl mb-10 font-bold'>Our Blog</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <BlogCard
                        date='19 Jan 2022'
                        details='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                        image={blog1}
                        title='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        />
                        <BlogCard
                        date='19 Jan 2022'
                        details='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                        image={blog2}
                        title='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        />
                        <BlogCard
                        date='19 Jan 2022'
                        details='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                        image={blog3}
                        title='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs