import React from "react";

// import { useState } from "react";
import OurWork from "../layouts/OurWork";
import CTA from "./CTA";
import Container from "../Container";
import WorkBanner from "../layouts/WorkBanner";

const Work = () => {
  // const [dark, setDark] = useState(false);

  return (
    <>
      {/* <div className={dark ? "dark" : ""}> */}
        {/* <div className="bg-[#F4F6FC] dark:bg-Dark-Blue pt-3">
          <Container>
            <div className="flex justify-end">
              <button
                onClick={() => setDark(!dark)}
                className={`relative w-24 h-12 rounded-full transition-colors duration-500 ${
                dark ? "bg-gray-200" : "bg-gray-800"
              }`}
              >
                <span
                  className={`absolute top-1 left-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl transition-all duration-500 ${
                  dark ? "translate-x-12" : "translate-x-0"
                }`}
                >
                  {dark ? "🌑" : "☀️"}
                </span>
              </button>
            </div>
          </Container>
        </div> */}
        <WorkBanner/>
        <OurWork />
        <CTA />
      {/* </div> */}
    </>
  );
};

export default Work;
