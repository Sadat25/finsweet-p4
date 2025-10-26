import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import template1 from "../images/ourWork.png";
import template2 from "../images/ourWork2.png";
import template3 from "../images/ourWork3.png";
import template4 from "../images/ourWork4.png";
import template5 from "../images/ourWork5.png";
import template6 from "../images/ourWork6.png";

const OurWork = () => {
  return (
    <>
      <section className="py-[50px] md:py-[100px] dark:bg-Dark-Blue">
        <Container>
          {/* ====menu==== */}
          <div className="px-3 md-px-0 mb:mb-12 lg:mb-[50px]">
            <ul className="flex justify-center items-center gap-x-7">
              <li className="font-Poppins font-medium text-[10px] md:text-lg dark:text-gray-50 text-Royal-Blue cursor-pointer">
                All
              </li>
              <li className="font-Poppins font-medium text-[10px] md:text-lg dark:text-gray-50 text-Dark-Blue cursor-pointer">
                UI Design
              </li>
              <li className="font-Poppins font-medium text-[10px] md:text-lg dark:text-gray-50 text-Dark-Blue cursor-pointer">
                UI DesignWebflow Design
              </li>
              <li className="font-Poppins font-medium text-[10px] md:text-lg dark:text-gray-50 text-Dark-Blue cursor-pointer">
                Figma Design
              </li>
            </ul>
          </div>
          {/* ====menu==== */}


          <div className="mx-4 md:mx-0 mt-7">
            <div
              className={
                "md:flex md:justify-around lg:justify-between pb-6 md:pb-8 lg:pb-13"
              }
            >
              <div className="">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#F4EDE1_30%,_#98B1C6_100%)]">
                  <Image src={template1} alt={"tamplate1"} />
                </div>
                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 1
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-6 md:mt-0">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#FFD3AF_30%,_#4F56FF_100%)]">
                  <Image src={template2} alt={"tamplate2"} />
                </div>

                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 2
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={"md:flex items-center md:justify-around lg:justify-between pb-6 md:pb-8 lg:pb-13"}
            >
              <div className="">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#EEBCA7_30%,_#C8C8C8_100%)]">
                  <Image src={template3} alt={"tamplate3"} />
                </div>
                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 3
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-6 md:mt-0">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#C2E7F2_30%,_#98A4FF_100%)]">
                  <Image src={template4} alt={"tamplate4"} />
                </div>
                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 4
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={
                "md:flex items-center md:justify-around lg:justify-between pb-6 md:pb-8 lg:pb-13"
              }
            >
              <div className="">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#C5BCFF_30%,_#9BF6D5_100%)]">
                  <Image src={template5} alt={"tamplate5"} />
                </div>
                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 5
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-6 md:mt-0">
                <div className="md:w-[350px] lg:w-[600px] p-7 bg-[linear-gradient(to_bottom_right,_#D2D6FD_30%,_#D6ACEA_100%)]">
                  <Image src={template6} alt={"tamplate6"} />
                </div>
                <h4 className="pt-6 font-Poppins font-medium md:font-semibold text-2xl md:text-[38px] dark:text-gray-50 text-Dark-Blue">
                  Template 6
                </h4>
                <p className="py-3 lg:py-5 md:w-[350px] lg:w-[600px] font-Poppins text-[10px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <a href="#" className="flex items-center font-Poppins font-medium text-[12px] lg:text-base dark:text-gray-50 text-Dark-Blue">
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5 dark:fill-amber-50"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurWork;
