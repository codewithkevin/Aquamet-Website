import React from "react";
import Intro from "../components/Products/Intro";
import Solutions from "../components/Home/Solutions";
import Mockup from "../components/Home/Mockup";
import Newsletter from "../components/Home/Newsletter";
import Start from "../components/Products/Start";
import { ToastContainer } from "react-toastify";

const Products = () => {
  return (
    <div className="w-full h-full  space-y-10">
      <Intro />
      <Solutions />
      <Mockup />
      <Start />
      <Newsletter />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Products;
