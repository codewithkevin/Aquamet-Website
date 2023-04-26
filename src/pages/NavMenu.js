import { useState } from "react";
import logo from "../assests/logo.png";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap lg:px-[90px] px-6 py-2 bottom-1 border">
      <div className="flex flex-row items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={logo} className="top-2" alt="Logo" />
        <h1 className="text-[#146A96] text-2xl font-extrabold ml-2">Aquamet</h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            About Us
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Products
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Our Solution
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            News
          </a>
        </div>

        <div className="flex flex-row items-center">
          <div>Log In</div>
          <div className="ml-5">
            <button className="inline-flex items-center bg-[#146A96] border-0 py-2 px-4 text-white rounded-lg">
              <h5 className="font-normal">Visit AquaStall</h5>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
