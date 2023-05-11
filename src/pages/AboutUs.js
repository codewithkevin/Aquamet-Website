import React from "react";
import Intro from "../components/About/Intro";
import Team from "../components/About/Team";
import Newsletter from "../components/Home/Newsletter";
import FAQSection from "../components/About/FAQ";
import Products from "../components/Home/Products";

const Aboutus = () => {
  return (
    <div className="w-full h-full  space-y-10">
      <Intro />
      <Products />
      <Team />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default Aboutus;
