import BlogPage from './blogPage';
import Banner from '../../Components/Banner';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { useState } from 'react';
import { IoIosSunny } from "react-icons/io";

const Blog = () => {
    const [mode, setMode] = useState(false);
    // console.log(mode);

    return (
        <>
            <Navbar className='relative' />
            <button onClick={() => setMode(!mode)}>
                <IoIosSunny className='hidden lg:flex text-amber-300 cursor-pointer absolute top-10 right-30' />
            </button>
            <div className={`${mode ? 'dark' : ''} dark:bg-Dark-Blue`}>
                <Banner />
                <BlogPage />
            </div>
            <Footer />
        </>
    )
}

export default Blog;
