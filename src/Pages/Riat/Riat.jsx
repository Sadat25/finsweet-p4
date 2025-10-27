import React, { useRef, useState } from 'react'
import Container from '../../Components/Container'
import { BiSolidRightArrow } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
const Riat = () => {
  let oneref = useRef()
  let tworef = useRef()
  let threeref = useRef()
  let fourref = useRef()
  let fiveRef = useRef()
  let [show, setShow] = useState(false)
  let [showtwo, setShowtwo] = useState(false)
  let [showthree, setShowthree] = useState(false)
  let [showfour, setShowfour] = useState(false)
  let [showfive, setShowfive] = useState(false)
  document.addEventListener("click",(e)=>{
            if(oneref.current.contains(e.target) == true){
                setShow(!show)
            }else{
                setShow(false)
            }
            if(tworef.current.contains(e.target) == true){
                  setShowtwo(!showtwo)
            }else{
                setShowtwo(false)
            }
            if(threeref.current.contains(e.target) == true){
                setShowthree(!showthree)
            }else{
                setShowthree(false)
            }
            if(fourref.current.contains(e.target) == true){
                setShowfour(!showfour)
            }else{
                setShowfour(false)
            }
            if(fiveRef.current.contains(e.target) == true){
                setShowfive(!showfive)
            }else{
                setShowfive(false)
            }
            })


  return (
    <div>
      <Container>
        <div className="text-center lg:pt-40 xl:px-100 lg:px-65 ">
          <h1 className='font-Poppins lg:text-5xl text-3xl font-semibold lg:py-4 pt-4 py-2'>Our Pricing Plans</h1>
          <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
        <div className="lg:flex gap-10 lg:py-25 py-10 px-5 md:px-0">
          <div className="lg:w-1/3 lg:px-10 lg:py-25 px-3 group pt-10 pb-20 lg:my-0 my-10 bg-[#F4F6FC] hover:bg-[#1C1E53] hover:text-[#F4F6FC] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue dark:text-[#FCD980] group-hover:text-[#FCD980]'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Poppins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full group-hover:bg-[#FCD980] hover:bg-[#FCD980] text-[#F4F6FC] hover:text-[#282938] bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:px-10 lg:py-25 group px-3 pt-10 pb-20 lg:my-0 my-10 bg-[#F4F6FC] hover:bg-[#1C1E53] hover:text-[#F4F6FC] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue dark:text-[#FCD980] group-hover:text-[#FCD980]'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Poppins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full hover:bg-[#FCD980] group-hover:bg-[#FCD980] text-[#F4F6FC] hover:text-[#282938] bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:px-10 group lg:py-25 px-3 pt-10 pb-20 lg:my-0 my-10 bg-[#F4F6FC] hover:bg-[#1C1E53] hover:text-[#F4F6FC] rounded-2xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <div className="">
              <div className="flex gap-2 items-center">
                <h2 className='font-Poppins lg:text-3xl text-2xl font-semibold'>$299</h2>
                <h5 className='font-Poppins lg:text-[14px] text-[12px] text-Royal-Blue dark:text-[#FCD980] group-hover:text-[#FCD980]'>Per Design</h5>
              </div>
              <div className="">
                <h3 className='font-Popp
                ins text-xl font-medium pt-5 lg:pb-3 pb-2'>Landing Page </h3>
                <p className='font-Poppins text-[14px]'>When you’re ready to go beyond prototyping in Figma, </p>
              </div>
              <div className="lg:py-15 py-10">
                <ul>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>All limited links</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Own analytics platform</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Chat support</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Optimize hashtags</p>
            </li>
            <li className='flex gap-2 items-center py-1'>
              <div className="text-[#97DAAD]">
                <BiSolidRightArrow/>
              </div>
              <p>Unlimited users</p>
            </li>
          </ul>
              </div>
              <div className="text-center pt-10">
                <a className='px-10 py-3 rounded-full group-hover:bg-[#FCD980] hover:bg-[#FCD980] text-[#F4F6FC] hover:text-[#282938] bg-[#282938]' href="#">Get started</a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex px-5 md:px-0 mb-10">
          <div className="lg:w-1/3 px-3">
          <h2 className='font-Poppins lg:text-5xl text-4xl py-5 '>Frequently asked questions</h2>
          <p className='font-Poppins text-[14px] text-Royal-Blue'>Contact us For More Info</p>
          </div>
          <div className="lg:w-2/3 lg:pt-0 pt-10 lg:px-8">
          <div className="border-b-2 border-Royal-Blue py-8">
            <div ref={oneref} className="flex justify-between lg:items-center">
            <p className='font-Poppins text-Royal-Blue w-3/22 font-semibold lg:pt-0 pt-2'>01</p>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl w-full'>How much time does it take ?</h5>
            </div>
            <div className="w-1/22 lg:pt-0 pt-2">
              {show ? <RxCross1/> : <FiPlus/>}
            </div>
          </div>
          {show && (
            <div className="py-2 pl-10 lg:pl-29 lg:pr-38 transition duration-500 ease-in-out">
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          )}
          </div>
          <div className="border-b-2 border-Royal-Blue py-8">
            <div ref={tworef} className="flex justify-between lg:items-center">
            <p className='font-Poppins text-Royal-Blue w-3/22 font-semibold lg:pt-0 pt-2'>02</p>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl w-full'>What is your class naming convention ?</h5>
            </div>
            <div className="w-1/22 lg:pt-0 pt-2">
              {showtwo ? <RxCross1/> : <FiPlus/>}
            </div>
          </div>
          {showtwo && (
            <div className="py-2 pl-10 lg:pl-29 lg:pr-38 transition duration-500 ease-in-out">
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          )}
          </div>
          <div  className="border-b-2 border-Royal-Blue py-8">
            <div ref={threeref} className="flex justify-between lg:items-center">
            <p className='font-Poppins text-Royal-Blue w-3/22 font-semibold lg:pt-0 pt-2'>03</p>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl w-full'>How do we communicate ?</h5>
            </div>
            <div className="w-1/22 lg:pt-0 pt-2">
              {showthree ? <RxCross1/> : <FiPlus/>}
            </div>
          </div>
          {showthree && (
            <div className="py-2 pl-10 lg:pl-29 lg:pr-38 transition duration-500 ease-in-out">
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          )}
          </div>
          <div className="border-b-2 border-Royal-Blue py-8">
            <div ref={fourref} className="flex justify-between lg:items-center">
            <p className='font-Poppins text-Royal-Blue w-3/22 font-semibold lg:pt-0 pt-2'>04</p>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl w-full'>I have a bigger project. Can you handle it ?</h5>
            </div>
            <div className="w-1/22 lg:pt-0 pt-2">
              {showfour ? <RxCross1/> : <FiPlus/>}
            </div>
          </div>
          {showfour && (
            <div className="py-2 pl-10 lg:pl-29 lg:pr-38 transition duration-500 ease-in-out">
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          )}
          </div>
          <div className="border-b-2 border-Royal-Blue py-8">
            <div ref={fiveRef} className="flex justify-between lg:items-center">
            <p className='font-Poppins text-Royal-Blue w-3/22 font-semibold lg:pt-0 pt-2'>05</p>
            <div className="w-18/22">
              <h5 className='font-Poppins text-2xl w-full'>What is your class naming convention ?</h5>
            </div>
            <div className="w-1/22 lg:pt-0 pt-2">
              {showfive ? <RxCross1/> : <FiPlus/>}
            </div>
          </div>
          {showfive && ( 
            <div className="py-2 pl-10 lg:pl-29 lg:pr-38 transition duration-500 ease-in-out">
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          )}
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Riat