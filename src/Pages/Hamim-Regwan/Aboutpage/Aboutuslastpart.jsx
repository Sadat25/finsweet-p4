import React, { useState } from 'react'
import bg2 from "./Images/bg2.png"
import bg1 from "./Images/bg1.png"
import Card from './Component/Card'
import Icon1 from "./Images/Icon1.png"
import pen from "./Images/pen.png"
import people from "./Images/people.png"
import logo1 from "./Images/logo1.png"
import Card2 from './Component/Card2'
import smith from "./Images/smith.png"
import simon from "./Images/simon.png"
import paul from "./Images/paul.png"
import sara from "./Images/sara.png"
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'



const Aboutuslastpart = () => {
  const [click,setClick] = useState(false)
  const handlechange=()=>{
  setClick(!click)
}

  return (
    <div className={`${click ? 'dark':'' } dark:bg-Tint-Blue dark:text-white`}>
      <Navbar/>
    <div className='bg-[#EEF4FA] dark:bg-Tint-Blue w-full  '>
      <div className='container lg:pt-32 pb-32   '>
        <div className=' lg:flex lg:justify-between flex flex-col-reverse lg:flex-row'>
          <div className='h-[228px] lg:text-left text-center'>
            <h3 className='font-Poppins font-medium pt-13.5  '>Our Mission </h3>
            <h1 className='lg:text-[38px] text-[20px] font-semibold font-Poppins pt-4 '>Inspire, Innovate, Share</h1>
            <p className='font-Poppins lg:w-[663px]   leading-7   pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <img src={bg2} alt="" className='w-[514px] h-[336px]  pt-0 mx-auto lg:mx-0 ' />
        </div>
        <div className=' lg:flex lg:justify-between grid-cols-2 lg:mt-24  sm:mt-30  '>
          <img src={bg1} alt="" className='w-[514px] h-[336px] mx-auto' />
          <div className='h-[228px] lg:text-left text-center'>
            <h3 className='font-Poppins font-medium pt-13.5  '>Our Vision </h3>
            <h1 className='lg:text-[38px] text-[20px] font-semibold font-Poppins pt-4 '>Laser focus</h1>
            <p className='font-Poppins lg:w-[663px] leading-7 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='container  lg:pt-32 pt-10 grid-cols-1'>
    <div className='container flex justify-center'>
      <button className='px-6 py-3 rounded-[10px] bg-Tint-Blue text-white  dark:text-black dark:bg-[#EEF4FA] cursor-pointer text-[20px]'onClick={handlechange} >click</button>
      </div>
      <div>
         <h1 className='lg:text-[48px] font-Poppins font-semibold text-center'>The benefits of working <span className='block'>with us</span> </h1>
      </div>

      <div className='grid gap-5 lg:grid-cols-3  grid-cols-1 sm:grid-cols-2   mt-12'>
        <Card
        img={Icon1}
        title="Customize with ease"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
        />
       <Card
        img={pen}
        title="Perfectly Responsive"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
        />
       <Card
        img={people}
        title="Friendly Support"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
        />
      </div>

      <div className='h-[84px] lg:flex lg:gap-22.5 mt-12 grid-cols-2 lg:text-left  '>
         <div>
          <h2 className='lg:text-[38px] font-Poppins font-semibold lg:pl-0 pl-5 '>100.000+</h2>
          <p className='lg:pl-0 pl-5'>Finsweet Users</p>
         </div>

         <div className='lg:flex lg:gap-26 items-center lg:pl-0 pl-5  grid-cols-2'>
          <div className='flex gap-3 '>
            <img src={logo1} alt="" className='w-5 h-5 dark:bg-white rounded-full' />
            <p className='font-Poppins font-medium'>logoipsum</p>
          </div>
           <div className='flex gap-3'>
            <img src={logo1} alt="" className='w-5 h-5 dark:bg-white rounded-full ' />
            <p className='font-Poppins font-medium'>logoipsum</p>
          </div>
          <div className='flex gap-3'>
            <img src={logo1} alt="" className='w-5 h-5 dark:bg-white rounded-full' />
            <p className='font-Poppins font-medium'>logoipsum</p>
          </div>
           <div className='flex gap-3'>
            <img src={logo1} alt="" className='w-5 h-5 dark:bg-white rounded-full' />
            <p className='font-Poppins font-medium'>logoipsum</p>
          </div>
            <div className='flex gap-3'>
            <img src={logo1} alt="" className='w-5 h-5 dark:bg-white rounded-full' />
            <p className='font-Poppins font-medium'>logoipsum</p>
          </div>
         </div>
      </div>
    </div>

   <div className='bg-[#EEF4FA] dark:bg-Tint-Blue dark: lg:pb-32 pb-4 mt-32'>
    <div className='container'>
      <h1 className='lg:text-[48px] font-semibold font-Poppins text-center lg:pt-32 pt-3'>Meet our team</h1>
      <div className='grid gap-5 lg:grid-cols-4  grid-cols-1 sm:grid-cols-2 lg:mt-12 mt-2'>
        <Card2
        img={smith}
        title="John Smith"
        para="CEO"
        />
      <Card2
        img={simon}
        title="SimonAdams "
        para="CTO"
        />
        <Card2
        img={paul}
        title="Paul Jones"
        para="Design Lead"
        />
        <Card2
        img={sara}
        title="Sara Hardin"
        para="Project Manager"
        />
      </div>
    </div>
   </div>
   <Footer/>
  </div>

  )
}

export default Aboutuslastpart
