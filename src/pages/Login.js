import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../function/auth/useLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
    } catch (error) {
      toast.error("Login failed.");
    }
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
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              <div className="flex items-center justify-between pb-10">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <span className="text-sm text-blue-400 font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500">
                  Forgot password?
                </span>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-400 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-md px-5 py-2.5 text-center"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 items-center text-center pt-5">
                Don’t have an account yet?{" "}
                <span className="font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500">
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
