import React from "react";
import Intro from "../components/Products/Intro";
import Solutions from "../components/Home/Solutions";
import Mockup from "../components/Home/Mockup";
import Newsletter from "../components/Home/Newsletter";
import Start from "../components/Products/Start";

const Products = () => {
  return (
    <div className="w-full h-full mt-20 mb-5 space-y-10">
      <Intro />
      <Solutions />
      <Mockup />
      <Start />
      <Newsletter />
    </div>
  );
};

export default Products;
