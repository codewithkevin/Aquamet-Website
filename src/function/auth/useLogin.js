import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://aquamet.onrender.com/api/user/account/login",
        {
          email,
          password,
        }
      );

      const responseData = response.data;

      if (response.status !== 200) {
        setError(responseData.message);
        toast.error(responseData.message);
        console.log("Response", response);
      } else {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(responseData));

        // update the auth context
        dispatch({ type: "LOGIN", payload: responseData });

        // update loading state
        setIsLoading(false);

        toast.success("Welcome Back", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      setError(error.response.data);
      toast.error(error.response.data);
      console.log("Error", error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
