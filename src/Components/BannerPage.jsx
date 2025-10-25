import React from "react";
import BannerCard from "./BannerCard";
import BannerCard1 from "./BannerCard1";

import img from "../assets/pic.png";
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/pic3.png";

const BannerPage = () => {
  return (
    <section className="space-y-16 py-16  bg-white">
      <div className="container space-y-16">
        <BannerCard className="bg-white"
          header="Use Client-first"
          title="Top agencies and freelancers around the world use Client-first"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={img}
        />

        <BannerCard1
          header="Free Revision Rounds"
          title="Get free revisions and one week of free maintenance"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={img1}
        />

        <BannerCard
          header="24/7 Support"
          title="Working with us, you will be getting 24/7 priority support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={img2}
        />

        <BannerCard1
          header="Quick Delivery"
          title="Guaranteed 1-week delivery for standard five-pager websites"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={img3}
        />
      </div>
    </section>
  );
};

export default BannerPage;
