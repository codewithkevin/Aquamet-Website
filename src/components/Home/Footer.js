import React from "react";
import logo from "../../assests/logo2.png";

const Footer = () => {
  return (
    <section className="bg-[#292F36] w-full h-full flex flex-col">
      <div className="mb-10 p-5 sm:mx-5 mx-20 mt-10 space-y-5">
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <ul className="md:flex md:flex-wrap sm:grid sm:grid-cols-2 space-x-4">
            <li className="text-white sm:inline-block sm:ml-5">
              <a href="">Home</a>
            </li>
            <li className="text-white sm:inline-block sm:text-left">
              <a href="">About Us</a>
            </li>
            <li className="text-white sm:inline-block sm:text-left">

              <a href="">Our Solution</a>
            </li>
            <li className="text-white sm:inline-block sm:text-left">

              <a href="">News</a>
            </li>
            <li className="text-white sm:inline-block sm:text-left">

              <a href="">Contact Us</a>
            </li>
            <li className="text-white">
              <a href="">Terms</a>
            </li>
            <li className="text-white sm:inline-block sm:text-left">

              <a href="">Privacy</a>
            </li>
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
