import React from "react";

const BannerCard1 = ({ header, title, description, image }) => {
  return (
    <div className="text-[#0A2540] bg-[#F4F6FC]">
      <div className="container flex flex-col lg:flex-row-reverse items-center justify-between mx-auto p-8 gap-10">
        
        <div className="flex-1 space-y-4">
          <h2 className="text-sm uppercase tracking-wide font-semibold">{header}</h2>
          <h3 className="text-[38px] font-semibold">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCard1;
