import React, { useState } from 'react'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import OurProjects from '../components/OurProjects/OurProjects'
import Features from '../components/Features/Features'
import ClientsReview from '../components/ClientsReview/ClientsReview'
import FAQ from '../components/FAQ/FAQ'
import Inquiry from '../components/Inquiry/Inquiry'
import Blogs from '../components/Blogs/Blogs'
import Hero from '../Hero/Hero'
import Toggle from '../components/Toggle/Toggle'

const Home = () => {
    const [isDark, setisDark] = useState(false)
    console.log(isDark);
    return (
        <div className={`${isDark && 'dark'} text-Dark-Blue dark:text-cyan-500 dark:bg-gray-700`}>
            <Hero />
            <HowWeWork />
            <OurProjects />
            <Features />
            <ClientsReview />
            <FAQ />
            <Inquiry />
            <Blogs />
            <Toggle setisDark={setisDark} />
        </div>
    )
}

export default Home