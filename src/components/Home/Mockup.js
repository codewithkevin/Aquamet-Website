import React from "react";
import { Button } from "antd";
import mockup from "../../assests/Others/Mockup.png";

const Mockup = () => {
  return (
    <section loading="lazy" className="md:mt-20 pb-10 sm:mt-10">
      <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-[16rem] pb-4 space-x-3 space-y-3 md:space-x-10">
        <div className="flex flex-col basis-1/2 sm:mb-20 mb-0">
          <div className="mt-0 lg::mt-14 md:mt-10">
            <h1 className="text-2xl font-semibold mb-4 font-dmsans">
              AquaStall <span className=""> - Marketplace</span>
            </h1>
            <p className="flow-root ... max-w-2xl text-gray-600 leading-[32px] mb-5">
              Sell your fish or other inputs by creating your stall. You can
              also buy your fresh quality farmed fish right from the farm.
              Obtain all your fish farm inputs on our stall.
            </p>
          </div>

          <div className="flex sm:justify-center md:justify-normal mt-0 lg:mt-10">
            <Button
              className="bg-[#146A96] font-medium md:w-[150px] sm:w-[450px] text-center"
              type="primary"
              size="large"
            >
              Visit AquaStall
            </Button>
          </div>
        </div>

        <div className="basis-1/2 mt-10 border-4 border-black rounded-xl">
          <img src={mockup} alt="aquamet" />
        </div>
      </div>
    </section>
  );
};

export default Mockup;
