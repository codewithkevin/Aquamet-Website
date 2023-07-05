import React from "react";
import Intro from "../components/Products/Intro";
import Solutions from "../components/Home/Solutions";
import Mockup from "../components/Home/Mockup";
import Newsletter from "../components/Home/Newsletter";
import Start from "../components/Products/Start";
import { ToastContainer } from "react-toastify";

const Products = () => {
  return (
    <section className="w-full h-full">
      <div className="space-y-10">
        <Intro />
        <Solutions />
        <Mockup />
        <Start />
        <Newsletter />
      </div>
    </section>
  );
};

export default Products;
