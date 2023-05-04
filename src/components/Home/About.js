import React from "react";
import ug from "../../assests/Others/Person1.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/solution");
  }

  function contactSubmit(e) {
    e.preventDefault();
    navigate("/contact");
  }

  return (
    <section className="mt-5 mx-5 mb-10">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-5">
          <strong className="text-3xl text-center font-serif">
            Aquamet Technologies
          </strong>
          <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
            Aquamet is a registered company in Ghana that seeks to eradicate the
            numerous uncertainties in aquaculture production using technology.{" "}
            <br className="mt-5" /> Our solution comes with a smart probe for
            monitoring water quality remotely via SMS, mobile app and advisory
            both online(voice messages and interactive app) and offline.{" "}
            <br className="mt-5" /> Our primary goal is to foster aquaculture
            production through reducing high mortalities and increasing farmers’
            yield. <br className="mt-5" /> An array of assistive farm management
            tools such as feed estimator, record keeping, and management tips
            can also be found on our mobile app.
          </p>

          <div className="mt-10 flex md:flex-row sm:flex-col  justify-start md:space-x-5 sm:space-y-5 md:space-y-0">
            <button
              onClick={contactSubmit}
              className="bg-[#ffffff] hover:bg-blue-900 hover:text-white text-black  top-0 rounded-lg  px-5 py-2 border-2"
              type="button"
            >
              Get in touch
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#146A96] hover:bg-blue-900 text-white  top-0 rounded-lg  px-5 py-2"
              type="button"
            >
              Our Solution
            </button>
          </div>
        </div>

        <div loading="lazy" className="mb-10">
          <img
            className="md:flex lg:flex hidden md:mt-20 lg:mt-0"
            src={ug}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
