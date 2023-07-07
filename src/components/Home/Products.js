import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/products");
  }

  return (
    <section className="flex flex-col items-center justify-center pb-10 bg-[#B2E2FB]">
      <h1 className="mx-auto text-center font-bold text-3xl mt-10 font-serif">
        Our Products and Services
      </h1>

      <div className="mt-5 max-w-auto lg:max-w-2xl mx-5">
        <p className="font-serif text-center">
          Aquamet smart probe, Aquamet Mobile App which offers expert advisory
          services, feed estimator and record keeping, Aquastall for buying and
          selling products and more.
        </p>
      </div>

      <div>
        <div className="mt-5">
          <Button
            onClick={handleSubmit}
            className="bg-white text-[#146A96] font-medium md:w-[150px] sm:w-[300px] border-2 border-[#146A96]"
            type="primary"
            size="large"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
