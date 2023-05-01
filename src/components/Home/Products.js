import React from "react";
import { Button } from "antd";

const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-5 pb-10">
      <h1 className="mx-auto text-center font-bold text-3xl">
        Our Products and Services
      </h1>

      <div className="mt-5 max-w-auto lg:max-w-2xl">
        <p>
          Aquamet smart probe, Aquamet Mobile App which offers expert advisory
          services, feed estimator and record keeping, Aquastall for buying and
          selling products and more.
        </p>
      </div>

      <div>
        <div className="mt-5 space-x-5 flex flex-row top-10">
          <Button
            className="bg-white text-[#146A96] font-medium w-[150px] border-2 border-[#146A96]"
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
