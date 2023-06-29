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
      const response = await axios.post("/api/user/account/login", {
        email,
        password,
      });

      const responseData = response.data;

      if (response.status !== 200) {
        setError(responseData.message);
        toast.error(responseData.message);
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
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
