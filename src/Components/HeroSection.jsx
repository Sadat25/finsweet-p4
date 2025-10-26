import React from 'react'
import Btn from './Btn'
import heroImg from '../assets/bannerImg.png'
import featuresvg from '../assets/feature.svg'

const HeroSection = () => {
  return (
    <>
      <section className='bg-[#1C1E53]'>
        <div className='container md:flex md:items-center py-10 md:py-20 px-15 space-y-10 flex flex-col-reverse md:flex-row'>
            <div>
                <h2 className='text-3xl md:text-4xl lg:text-[54px] text-white font-semibold w-[300px] lg:w-[468px]'>All the features you need</h2>
                <p className='text-base font-medium md:w-[280px] lg:w-[562px] text-white py-4 md:py-6 lg:py-8 lg:leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Btn className='bg-[#FCD980]'>View Pricing</Btn>
            </div>
            <div>
                <img className='mt-5 pb-5 w-full' src={featuresvg} alt="featuresvg" />
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
