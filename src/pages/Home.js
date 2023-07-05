import React from "react";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import About from "../components/Home/About";
import Others from "../components/Home/Others";
import Farmers from "../components/Home/Farmers";
import Approach from "../components/Home/Approach";
import Products from "../components/Home/Products";
import Mockup from "../components/Home/Mockup";
import Testiomonial from "../components/Home/Testiomonial";
import Solutions from "../components/Home/Solutions";
import Newsletter from "../components/Home/Newsletter";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      <Others />
      <Farmers />
      <Approach />
      <Products />
      <Mockup />
      <Testiomonial />
      <Solutions />
      <Newsletter />
    </div>
  );
};

export default Home;
