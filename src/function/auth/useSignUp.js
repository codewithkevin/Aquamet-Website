import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import axios from "axios";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const [userEmail, setUserEmail] = useState("");

  const signup = async (email, password, name) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/user/account/signup", {
        email,
        password,
        name,
      });

      const responseData = response.data;

      if (!response.ok) {
        setError(responseData.error);
      } else {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(responseData));

        // update the auth context
        dispatch({ type: "LOGIN", payload: responseData });

        // update loading state
        setIsLoading(false);

        // set user email
        setUserEmail(responseData.email);
      }
    } catch (error) {
      setError("An error occurred during sign-up.");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error, userEmail };
};
