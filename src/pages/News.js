import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import error from "../assests/error.png";
import { Link } from "react-router-dom";

const News = () => {
  const { user } = useAuthContext();

  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <section></section>
      ) : (
        <section>
          <div className="flex flex-col justify-center items-center space-y-10 pb-2">
            <div className="mb-7 lg:mb-14 p-20 flex flex-col items-center justify-center">
              <div className="mt-10 flex flex-col items-center space-y-4">
                <div>
                  <img
                    className="md:flex lg:flex md:mt-20 lg:mt-0 md:w-[306px]"
                    src={error}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">
                    News page not found
                  </h1>
                  <p>
                    This page will be available once you login to your account.
                    You can create an account to get full access.
                  </p>
                </div>

                <div className="mt-10 flex flex-row space-x-10">
                  <Link to="/login">
                    <div className="bg-gray-200 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-300">
                      <h1 className="text-gray-800 box-border">Login</h1>
                    </div>
                  </Link>

                  <Link to="/signup">
                    <div className="bg-[#146A96] rounded-md px-4 py-2 cursor-pointer hover:bg-[#0B4B6E]">
                      <h1 className="text-white font-bold">Create Account</h1>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default News;
