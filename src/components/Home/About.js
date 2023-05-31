import ug from "../../assests/Others/Person1.png";
import { Link } from "react-router-dom";
import AOS from "../Essentials/AOSInitializer";

const About = () => {
  return (
    <section className="mt-5 md:mt-20  mx-5 mb-10">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div data-aos="fade-up-left" className="md:mt-10 sm:mt-4">
          <div className="md:max-w-3xl sm:max-w-[1rem] mb-4">
            <strong className="text-[36px]  font-semibold leading-[38px] text-center font-dmsans">
              Aquamet Technologies
            </strong>
          </div>
          <div className="flow-root ... max-w-2xl  mt-2 md:space-y-2 space-y-5">
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              Aquamet is a registered company in Ghana that seeks to eradicate
              the numerous uncertainties in aquaculture production using
              technology.
            </p>
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              Our solution comes with a smart probe for monitoring water quality
              remotely via SMS, mobile app and advisory both online(voice
              messages and interactive app) and offline.
            </p>
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              Our primary goal is to foster aquaculture production through
              reducing high mortalities and increasing farmers’ yield.
            </p>
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              An array of assistive farm management tools such as feed
              estimator, record keeping, and management tips can also be found
              on our mobile app.
            </p>
          </div>

          <div className="mt-5 flex md:flex-row sm:flex-col  justify-start md:space-x-5 sm:space-y-5 md:space-y-0">
            <Link to="/contact">
              <button
                className="bg-[#ffffff] hover:bg-blue-900 hover:text-white text-black  top-0 rounded-lg  px-5 py-2 border-2"
                type="button"
              >
                Get in touch
              </button>
            </Link>
            <Link to="/solution">
              <button
                className="bg-[#146A96] hover:bg-blue-900 text-white  top-0 rounded-lg  px-5 py-2"
                type="button"
              >
                Our Solution
              </button>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up-right"
          loading="lazy"
          className="mb-10 mt-0 sm:mt-5 lg:mt-0 md:mt-[8rem]"
        >
          <img
            className="md:flex lg:flex  md:mt-2 lg:mt-0 rounded-3xl"
            src={ug}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
