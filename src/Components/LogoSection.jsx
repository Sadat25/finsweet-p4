import React from "react";
import Logo1 from "../assets/Logo 1.png";
import Logo2 from "../assets/Logo 2.png";
import Logo3 from "../assets/Logo 3.png";
import Logo4 from "../assets/Logo 4.png";
import Logo5 from "../assets/Logo 5.png";

const LogoSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between gap-8 px-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#0A2540]">100,000+</h1>
          <p className="text-gray-600 text-lg">Figma Users</p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-14">
          <img src={Logo1} alt="Logo 1" className="w-28 object-contain" />
          <img src={Logo2} alt="Logo 2" className="w-28 object-contain" />
          <img src={Logo3} alt="Logo 3" className="w-28 object-contain" />
          <img src={Logo4} alt="Logo 4" className="w-28 object-contain" />
          <img src={Logo5} alt="Logo 5" className="w-28 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
