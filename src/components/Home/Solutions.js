import React from "react";
import phone from "../../assests/Others/phone1.png";
import phone2 from "../../assests/Others/phone2.png";

const Solutions = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-[16rem] lg lg:max-40 pb-4 space-y-3 md:space-x-10 lg:space-x-5">
        <div className="flex flex-col basis-1/2 mt-0  md:mt-24">
          <div className="md:max-w-md sm:max-w-xs max-auto">
            <h1 className="text-4xl font-bold mb-4">
              All-in-one <span className="text-[#146A96]">Solution</span> for
              any fish farm
            </h1>
            <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mb-5">
              Download our mobile application now!
            </p>
          </div>

          <div className="flex flex-row items-center">
            <button>
              <a
                href="https://apps.apple.com/us/app/my-app/id1234567890"
                target="_blank"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                />
              </a>
            </button>

            <button>
              <a
                href="https://play.google.com/store/apps/details?id=com.myapp"
                target="_blank"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  class="h-14"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="md:hidden sm:flex sm:justify-center w-[285px] h-[431px] ml-5">
          <img src={phone2} alt="" />
        </div>

        <div className="basis-1/2 sm:mr-28 md:block sm:hidden">
          <div className="relative h-[384.66px] mx-auto">
            {/* <div className="absolute inset-0 bg-[#ECFBFF] rounded-full w-[70%] left-28"></div> */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src={phone}
                alt="Phone"
                className="h-[384.66px] object-contain"
              />
            </div>
            <div className="absolute top-0 left-[49%]  mt-16 md:left-[49%] xl:left-[50%] xl:transform xl:-translate-x-50% xl:mt-10">
              <img
                src={phone2}
                alt="Phone"
                className="h-[384.66px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
