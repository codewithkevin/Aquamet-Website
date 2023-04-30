import React from "react";
import ug from "../../assests/Others/Person1.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/about");
  }

  return (
    <section className="mt-5 mx-5 mb-10">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-5">
          <strong className="text-3xl text-center">Aquamet Technologies</strong>
          <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5">
            Aquamet is a registered company in Ghana that seeks to eradicate the
            numerous of uncertainties in aquaculture production using
            technology. <hr className="mt-5" /> Our solution comes with a smart
            probe for monitoring water quality remotely via SMS, mobile app and
            advisory both online(voice messages and interactive app) and
            offline. <hr className="mt-5" /> Our primary goal is to foster
            aquaculture production through reducing high mortalities and
            increasing farmers’ yield. <hr className="mt-5" /> An array of
            assistive farm management tools such as feed estimator, record
            keeping, and management tips can also be found on our mobile app.
          </p>

          <div className="mt-10 flex flex-row justify-start space-x-5">
            <button
              onClick={handleSubmit}
              className="bg-[#ffffff] hover:bg-blue-900 text-black  top-0 rounded-lg  px-5 py-2 border-2"
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

        <div className="mb-10">
          <img className="md:flex lg:flex hidden" src={ug} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
