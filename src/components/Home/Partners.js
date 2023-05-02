import React from "react";
import ug from "../../assests/Partners/ug.png";
import absa from "../../assests/Partners/absa.png";
import partner from "../../assests/Partners/partner.png";

const Partners = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl my-4">Our trusted partners</h2>
      </div>

      <div className="grid md:flex sm:grid-cols-2 lg:flex md:items-center md:justify-center lg:flex-row lg:justify-evenly lg:mx-4 p-5">
       
        <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20">
          <h1 className="font-extrabold text-xl">
            KOSMOS <br /> INNOVATION <br /> CENTER
          </h1>
        </div>

        <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20">
          <img src={ug} alt="" />
        </div>

        <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20">
          <img src={absa} alt="" />
        </div>

        <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20">
          <img src={partner} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Partners;
