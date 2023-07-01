import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ConfirmPage = () => {
  const [email, setEmail] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     signup(email, password, name);
  //   };

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
            <h3 className="text-gray-900">Forgot password?</h3>
            <p className="text-gray-500 text-sm mt-3">
              No worries! Enter your email to reset your password.
            </p>
          </div>
        </div>
        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email" // Use the appropriate input type for the name field
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-400 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-md px-5 py-2.5 text-center "
              >
                Reset Password
              </button>

              <div className="flex flex-row justify-center pt-10 space-x-5">
                <Link to="/login">
                  <span>
                    <ArrowBackIcon />
                  </span>
                </Link>{" "}
                <h5 className="text-gray-400 font-light">Back to Log In</h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmPage;
