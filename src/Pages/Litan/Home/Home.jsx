import React from 'react'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import OurProjects from '../components/OurProjects/OurProjects'
import Features from '../components/Features/Features'
import ClientsReview from '../components/ClientsReview/ClientsReview'
import FAQ from '../components/FAQ/FAQ'
import Inquiry from '../components/Inquiry/Inquiry'

const Home = () => {
  return (
    <div className='text-Dark-Blue'>
        <HowWeWork/>
        <OurProjects/>
        <Features/>
        <ClientsReview/>
        <FAQ/>
        <Inquiry/>
    </div>
  )
}

export default Home