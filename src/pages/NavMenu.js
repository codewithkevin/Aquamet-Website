import { useState } from "react";
import logo from "../assests/logo512.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../function/auth/useLogout";
import { GetUserDetails } from "../function/auth/getDetails";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const { userData } = GetUserDetails();

  const handleNavItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap lg:px-[130px] px-6 py-2 bg-white shadow">
      <Link onClick={handleNavItemClick} to="/">
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
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
            onClick={handleNavItemClick}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
            onClick={handleNavItemClick}
          >
            Products
          </Link>
          <Link
            to="/solution"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
            onClick={handleNavItemClick}
          >
            Our Solution
          </Link>
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
            onClick={handleNavItemClick}
          >
            News
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-7 text-[16px] text-[#475467]  font-medium"
            onClick={handleNavItemClick}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-row items-center sm:space-x-3 sm:pt-5">
          <div className="">
            {user ? (
              <div className="flex flex-row items-center space-x-3">
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    width: 32,
                    height: 32,
                    fontSize: 16,
                  }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                >
                  {userData ? userData.charAt(0) : ""}
                </Avatar>
                <h1 className="font-bold text-lg">{userData}</h1>
              </div>
            ) : (
              <button className="inline-flex items-center bg-[#146A96] border-0 py-2 px-4 text-white rounded-lg">
                <h5 className="font-normal">Visit AquaStall</h5>
              </button>
            )}
          </div>
          <div>
            <h1 className="text-[16px] text-[#475467]  font-medium">
              {user ? (
                <div>
                  <button
                    className="inline-flex items-center bg-[#146A96] border-0 py-2 px-2 text-white rounded-lg"
                    onClick={handleLogout}
                  >
                    <span className="font-medium">Log Out</span>
                  </button>
                </div>
              ) : (
                <div>
                  <Link onClick={handleNavItemClick} to="/login">
                    Login
                  </Link>
                </div>
              )}
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
