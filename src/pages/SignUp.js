import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../function/auth/useSignUp";

const SignUp = () => {
  const [name, setName] = useState(""); // Add name state variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { signup, isLoading, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };

  return (
    <section className="bg-gray-50 md:h-full sm:h-[100vh] md:mt-2 sm:mt-28">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center mb-6 text-2xl font-semibold  space-y-3 dark:text-white">
          <img
            className="w-50 h-20"
            src="http://localhost:3000/static/media/logo512.9a3ca2850c06c503ecfe.png"
            alt="logo"
          />

          <div className="flex flex-col items-center">
            <h3 className="text-gray-900">Log in to your account</h3>
            <p className="text-gray-500 text-sm mt-3">
              Provide your details below
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text" // Use the appropriate input type for the name field
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <span>Password must be at least 8 characters.</span>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-400 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-md px-5 py-2.5 text-center "
              >
                {isLoading ? "Loading....." : "Sign Up"}
              </button>

              {error && <p className="text-red-500">{error}</p>}

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 items-center text-center pt-5">
                Already have an account?{" "}
                <span className="font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500">
                  <Link to="/login">Sign In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
