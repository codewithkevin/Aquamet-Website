import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import axios from "axios";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name, phoneNumber) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://aquamet.onrender.com/api/user/account/signup",
        {
          email,
          password,
          name,
          phoneNumber,
        }
      );

      const responseData = response.data;

      if (response.status !== 200) {
        setError(responseData.message);
      } else {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(responseData));

        // update the auth context
        dispatch({ type: "LOGIN", payload: responseData });

        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred during sign-up.");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
