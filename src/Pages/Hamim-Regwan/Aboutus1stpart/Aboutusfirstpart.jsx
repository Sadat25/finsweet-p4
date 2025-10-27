import React, { useState } from "react";
import meeting from "./Images/meeting.png";
import present from "./Images/present.png";
import Container from "../../../Components/Container";

const Aboutusfirstpart = () => {


  return (
    <div>
      <Container>

        {/* 1rst section */}
        <div className=" lg:flex justify-between py-20 lg:px-4  space-y-5">
          <div>
            <h4 className="text-Dark-Blue font-Poppins font-medium text-lg dark:text-white text-center lg:text-left">
              About us
            </h4>
            <h1 className=" lg:max-w-[595px] text-3xl md:text-5xl font-semibold font-Poppins text-Dark-Blue leading-[74px]  md:pb-[31px]  dark:text-white text-center lg:text-left">
              Our designs solve problems
            </h1>
            <p className="lg:w-121 font-Poppins text-Dark-Blue leading-7]  dark:text-white text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="w-full">
            <img src={meeting} alt="" className="w-full" />
          </div>
        </div>
        {/* 2md section  */}
        <div className="p-20 bg-[#F4F5F5] dark:bg-Tint-Blue text-center lg:text-left space-y-4 md:space-y-8 ">
          <h4 className="font-Poppins font-medium text-Dark-Blue">
            Who we are
          </h4>
          <div className="lg:flex justify-between">
            <div className="text-center lg:text-left lg:flex flex-col gap-6 space-y-3 md:space-y-5 mb-10 lg:mb-0">
              <h2 className="md:text-[38px] text-3xl font-semibold font-Poppins text-Dark-Blue leading-[54px]  dark:text-white">
                Goal focussed
              </h2>
              <p className=" lg:max-w-[515px] font-Poppins text-Dark-Blue leading-7  dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h2 className="md:text-[38px] text-3xl font-semibold font-Poppins text-Dark-Blue leading-[54px]  dark:text-white">
                Continuous improvement
              </h2>
              <p className="lg:w-[515px] font-Poppins text-Dark-Blue leading-7  dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd section  */}

        <div>
          <img src={present} className="w-full" alt="present" />
        </div>
      </Container>
    </div>
  );
};

export default Aboutusfirstpart;
