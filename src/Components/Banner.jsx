import React from 'react'
import Container from './Container';
import BannerImage from '../assets/bannerImg.png';

const Banner = () => {
    return (
        <Container>
            <div className="dark:bg-Dark-Blue flex flex-col justify-center items-center font-Poppins text-Dark-Blue dark:text-white">
                <h1 className="lg:text-[48px] text-2xl font-semibold text-center lg:pt-32 pt-10 lg:w-[950px] w-[400px]">
                    A UX Case Study on Creating a Studious Environment for Students
                </h1>
                <p className="pt-4 pb-8">
                    Andrew Jonson Posted on 27th January 2021
                </p>
                <img src={BannerImage} alt="Banner" />
                <p className="pt-12 pb-4 text-center lg:w-[830px] w-[370px]">
                    Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to twinkle.
                    By the same illusion which lifts the horizon of the sea to the level
                    of the spectator on a hillside.
                </p>
                <button className="text-Royal-Blue dark:text-amber-200 text-center cursor-pointer hover:underline">
                    Read more
                </button>
            </div>
        </Container>
    )
}

export default Banner;