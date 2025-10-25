import React, { useState } from 'react'
import Container from '../../Components/Container'
import ban from "../../assets/ban.png"

const Banner = () => {
    return (
        <section>
            <Container>
                <div className=" flex flex-col items-center justify-center text-center py-10">
                    <h2 className='lg:px-[150px] px-[50px] font-Poppins font-semibold  text-[24px] lg:text-[48px] '>A UX Case Study on Creating a Studious Environment for Students</h2>
                    <p className='font-Poppins font-normal text-[11px] lg:text-[16px]'>Andrew Jonson
                        Posted on 27th January 2021</p>
                </div>
                <div className="">
                    <img src={ban} className='w-full h-auto' alt="" />
                </div>

            </Container>
        </section>
    )
}

export default Banner