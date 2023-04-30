import React from "react";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import About from "../components/Home/About";
import Others from "../components/Home/Others";
import Farmers from "../components/Home/Farmers";
import Approach from "../components/Home/Approach";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      <Others />
      <Farmers />
      <Approach />
    </div>
  );
};

export default Home;
