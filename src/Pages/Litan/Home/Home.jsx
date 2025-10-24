import React from 'react'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import OurProjects from '../components/OurProjects/OurProjects'
import Features from '../components/Features/Features'

const Home = () => {
  return (
    <div className='text-Dark-Blue'>
        <HowWeWork/>
        <OurProjects/>
        <Features/>
    </div>
  )
}

export default Home