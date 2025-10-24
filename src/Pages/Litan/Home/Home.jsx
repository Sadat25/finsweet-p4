import React from 'react'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import OurProjects from '../components/OurProjects/OurProjects'
import Features from '../components/Features/Features'
import ClientsReview from '../components/ClientsReview/ClientsReview'
import FAQ from '../components/FAQ/FAQ'
import Inquiry from '../components/Inquiry/Inquiry'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../../../Components/Footer'
import Navbar from '../../../Components/Navbar'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div className='text-Dark-Blue'>
        <Navbar/>
        <Hero/>
        <HowWeWork/>
        <OurProjects/>
        <Features/>
        <ClientsReview/>
        <FAQ/>
        <Inquiry/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home