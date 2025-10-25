import React, { useState } from "react";
import Flex from "../Flex";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import Container from "../Container";

const WorkBanner = () => {
  return (
    <>
        <section className="py-10 md:py-[60px] lg:py-[95px] dark:bg-Dark-Blue bg-[#F4F6FC]">
          <Container>
            <div className="text-center">
              <h5 className="font-Poppins text-sm md:text-base font-medium dark:text-[#F4F6FC] text-Dark-Blue">
                What we created
              </h5>
              <h3 className="font-Poppins text-[28px] md:text-[38px] lg:text-[48px] font-semibold dark:text-[#F4F6FC] text-Dark-Blue">
                Our Work Portfolio
              </h3>
              <p className="font-Poppins m-auto text-[8px] md:text-base md:font-medium dark:text-[#F4F6FC] text-Dark-Blue w-[360px] md:w-[722px] lg:w-[742px] py-5 md:py-7 lg:py-10">
                We help teams create great digital products by providing them
                with tools and technology to make the design-to-code process
                universally accessible.
              </p>
              <Flex className={"justify-center gap-x-5"}>
                <MdFacebook className="dark:text-[#F4F6FC]" />
                <IoLogoTwitter className="dark:text-[#F4F6FC]" />
                <FaInstagram className="dark:text-[#F4F6FC]" />
                <FaLinkedin className="dark:text-[#F4F6FC]" />
              </Flex>
            </div>
          </Container>
        </section>
    </>
  );
};

export default WorkBanner;
