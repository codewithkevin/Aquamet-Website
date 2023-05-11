import React from "react";
import Intro from "../components/About/Intro";
import Team from "../components/About/Team";
import Newsletter from "../components/Home/Newsletter";
import FAQSection from "../components/About/FAQ";

const Aboutus = () => {
  return (
    <div className="w-full h-full  mb-5">
      <Intro />
      <Team />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default Aboutus;
