import { useState } from "react";
import logo from "../assests/logo512.png";
import { Link, useNavigate } from "react-router-dom";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between flex-wrap lg:px-[130px] px-6 py-2 bottom-1 border">
      <Link to="/">
        <div className="flex flex-row items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <img src={logo} className="top-2 w-20  h-18" alt="Logo" />
        </div>
      </Link>
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
          <Link
            to="/about"
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
          >
            About Us
          </Link>
          <Link
            to="/products"
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
          >
            Products
          </Link>
          <Link
            to="/solution"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
          >
            Our Solution
          </Link>
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
          >
            News
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-row items-center">
          <div>
            <h1 className="text-[16px] text-[#475467]  font-medium">Log In</h1>
          </div>
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
