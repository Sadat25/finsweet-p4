import React from "react";
import pic from "../assets/Icon.png";
import pic1 from "../assets/Icon1.png";
import pic2 from "../assets/Icon2.png";

const benefitsdev = [
  {
    id: 1,
    name: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: pic,
  },
  {
    id: 2,
    name: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: pic1,
  },
  {
    id: 3,
    name: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    icon: pic2,
  },
];

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto text-center px-6">
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] w-[300px] md:w-[500px] lg:w-[630px] mx-auto mb-12 leading-tight">
          The benefits of working with our team
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsdev.map((item) => (
            <div
              key={item.id}
              className="bg-[#F4F6FC] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-left flex flex-col items-start"
            >
              <img src={item.icon} alt={item.name} className="w-12 h-12 mb-6" />
              <h2 className="text-xl font-semibold text-[#0A2540] mb-3">
                {item.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
