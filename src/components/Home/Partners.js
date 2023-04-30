import React from "react";
import ug from "../../assests/Partners/ug.png";
import absa from "../../assests/Partners/absa.png";
import partner from "../../assests/Partners/partner.png";

const Partners = () => {
  return (
    <div className="flex flex-col mb-20">
      <div className="text-center">
        <h2 className="font-bold text-2xl my-4">Our trusted partners</h2>
      </div>
      <div className="flex flex-wrap  items-center mx-10 lg:mx-32">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2 mb-10">
          <h1 className="font-extrabold text-2xl">
            KOSMOS <hr /> INNOVATION <hr /> CENTER
          </h1>
          <p className="font-bold text-xs max-w-[13rem]">
            INESTING IN THE FUTURE, ONE ENTREPRENEUR AT A TIME
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2 mb-10">
          <img src={ug} alt="" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2 mb-10 lg:order-last">
          <img src={absa} alt="" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2 mb-10 lg:order-last">
          <img src={partner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
