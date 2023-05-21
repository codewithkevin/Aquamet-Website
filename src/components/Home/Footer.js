import React from "react";
import logo from "../../assests/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#292F36] w-full h-full flex flex-col">
      <div className="mb-10 p-5 sm:mx-5 mx-20 mt-10 space-y-5">
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <ul className="md:flex md:flex-wrap sm:grid sm:grid-cols-2 space-x-4">
            <Link to="/">
              <li className="text-white sm:inline-block sm:ml-5">Home</li>
            </Link>

            <Link to="/about">
              <li className="text-white sm:inline-block sm:text-left">
                About Us
              </li>
            </Link>

            <Link to="/solution">
              <li className="text-white sm:inline-block sm:text-left">
                Our Solution
              </li>
            </Link>

            <Link to="/news">
              <li className="text-white sm:inline-block sm:text-left">News</li>
            </Link>

            <Link to="/contact">
              <li className="text-white sm:inline-block sm:text-left">
                Contact Us
              </li>
            </Link>

            <Link to="/terms">
              <li className="text-white">Terms</li>
            </Link>

            <Link to="/terms">
              <li className="text-white sm:inline-block sm:text-left">
                Privacy
              </li>
            </Link>
          </ul>
        </div>

        <div className="border-t border-gray-400"></div>

        <div>
          <p className="text-white">
            © 2023, Aquamet Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
