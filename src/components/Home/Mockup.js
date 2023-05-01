import React from "react";
import { Button } from "antd";

const Mockup = () => {
  return (
    <section className="md:mt-5 pb-10">
      <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-28 pb-4 space-x-3 space-y-3 md:space-x-10">
        <div className="flex flex-col basis-1/2">
          <div>
            <h1 className="text-2xl font-bold mb-4">AquaStall - Marketplace</h1>
            <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mb-5">
              Sell your fish or other inputs by creating your stall. You can
              also buy your fresh quality farmed fish right from the farm.
              Obtain all your fish farm inputs on our stall.
            </p>
          </div>

          <div>
            <Button
              className="bg-[#146A96] font-medium"
              type="primary"
              size="large"
            >
              Visit AquaStall
            </Button>
          </div>
        </div>

        <div className="basis-1/2 border-2 border-black flex justify-center items-center h-[50vh] sm:h-[100vh] md:h-[30vh]">
          <h1 className="text-center text-xl font-bold">
            AQUASTALL MOCKUP <hr /> GOES HERE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
