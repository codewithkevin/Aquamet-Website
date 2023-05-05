import React from "react";
import ug from "../../assests/Others/approach.png";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Approach = () => {
  return (
    <section loading="lazy" className="md:mt-5 pb-10">
      <div className="hidden sm:flex md:hidden lg:hidden flex-col mx-5 ">
        <h1 className="font-bold text-3xl text-center">Our Approach</h1>
        <div>
          <ul className="mt-4">
            <div className="flex flex-row items-center mb-3">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Time Saving</h1>
            </div>

            <div className="flex flex-row items-center mb-3">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Data Backed Advisory.</h1>
            </div>

            <div className="flex flex-row items-center mb-3">
            <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Low Cost</h1>
            </div>

            <div className="flex flex-row items-center mb-3">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Climate Friendly</h1>
            </div>

            <div className="flex flex-row items-center mb-3">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">
                Tailored for increased yield at harvest
              </h1>
            </div>
          </ul>
        </div>

        <div className="flex mt-3">
          <img className="md:hidden lg:hidden flex" src={ug} alt="" />
        </div>
      </div>

      <div class="md:flex flex-row mx-5 lg:mx-28 pb-4 space-x-3 md:space-x-10  sm:hidden">
        <div class="basis-1/2 md:flex hideen flex flex-col">
          <img className="md:flex lg:flex hidden" src={ug} alt="" />

          <div className="flex-col mt-5">
            <div className="flex flex-row items-center">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">
                Tailored for increased yield at harvest
              </h1>
            </div>
            <p className="ml-5">
              Our solution is specifically tailored to help farmers increase
              their yield at harvest. This is achieved through features such as
              the smart probe for monitoring water quality, which helps to
              reduce fish mortalities and increase yield.
            </p>
          </div>
        </div>

        <div class="basis-1/2">
          <h1 className="font-bold text-2xl">Our Approach</h1>
          <div className="flex-col mt-2">
            <div className="flex flex-row items-center">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Time saving</h1>
            </div>
            <p className="ml-5">
              Our solution is designed to save time for farmers by enabling them
              to remotely monitor water quality via SMS, mobile app, and
              advisory. This means farmers can quickly and easily access
              important information about their aquaculture operations without
              having to physically check on their farms.
            </p>
          </div>

          <div className="flex-col mt-2">
            <div className="flex flex-row items-center">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Low cost</h1>
            </div>
            <p className="ml-5">
              Our solution is designed to be affordable for farmers, with a low
              cost of ownership and operation. This means that farmers can
              access advanced technology and advisory services without having to
              incur high costs.
            </p>
          </div>

          <div className="flex-col mt-2">
            <div className="flex flex-row items-center">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Data backed advisory</h1>
            </div>
            <p className="ml-5">
              Our solution provides farmers with data-backed advisory services,
              which means that the advice provided is based on accurate and
              up-to-date data about their aquaculture operations. This helps
              farmers make more informed decisions and improve their yield.
            </p>
          </div>

          <div className="flex-col mt-2">
            <div className="flex flex-row items-center">
              <span className="bg-[#ECFBFF] p-1 rounded-full">
                <CheckRoundedIcon className="text-blue-600" fontSize="small" />
              </span>
              <h1 className="text-lg font-bold ml-2">Climate friendly</h1>
            </div>
            <p className="ml-5">
              Our solution is designed to be climate-friendly, using green
              energy and cutting down on fish mortalities. This helps farmers
              reduce their carbon footprint and improve the sustainability of
              their aquaculture operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
