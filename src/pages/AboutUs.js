import React from "react";
import Intro from "../components/About/Intro";
import About from "../components/Home/About";
import Team from "../components/About/Team";

const Aboutus = () => {
  return (
    <div className="w-full h-full mt-20 mb-5">
      <Intro />
      <Team />
    </div>
  );
};

export default Aboutus;
