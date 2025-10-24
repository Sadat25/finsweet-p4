import React, { useState } from "react";
import meeting from "./Images/meeting.png";
import present from "./Images/present.png";
import Container from "../../../Components/Container";

const Aboutusfirstpart = () => {
  const [click, setClick] = useState(false);
  const handlechange = () => {
    setClick(!click);
  };

  return (
    <div className={` ${click ? "dark" : ""} dark:bg-Tint-Blue`}>
      <Container>
        <div className=" flex justify-end fixed right-0 top-4" onClick={handlechange}>
          <div className="p-2 rounded-full bg-[#EEF4FA] cursor-pointer text-[20px]">
            <div className="p-1 rounded-full bg-Tint-Blue text-white"> click </div>
          </div>
        </div>

        {/* 1rst section */}

        <div className=" lg:flex justify-between pt-32 lg:px-4  ">
          <div>
            <h4 className="text-Dark-Blue font-Poppins font-medium text-lg dark:text-white">
              About us
            </h4>
            <h1 className=" lg:w-[595px] text-5xl font-semibold font-Poppins text-Dark-Blue leading-[74px] pb-[31px]  dark:text-white">
              Our designs solve problems
            </h1>
            <p className="lg:w-121 font-Poppins text-Dark-Blue leading-7]  dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="w-full">
            <img src={meeting} alt="" />
          </div>
        </div>

        {/* 2md section  */}
        <div className="p-20 bg-[#F4F5F5] dark:bg-Tint-Blue">
          <h4 className="font-Poppins font-medium text-Dark-Blue">
            Who we are
          </h4>
          <div className="lg:flex justify-between">
            <div>
              <h2 className="text-[38px] font-semibold font-Poppins text-Dark-Blue leading-[54px]  dark:text-white">
                Goal focussed
              </h2>
              <p className=" lg:w-[515px] font-Poppins text-Dark-Blue leading-7  dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <h2 className="text-[38px] font-semibold font-Poppins text-Dark-Blue leading-[54px]  dark:text-white">
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
          <img src={present} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Aboutusfirstpart;
