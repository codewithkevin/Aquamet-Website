import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/user/account/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const responseData = await response.json();

      if (!response.ok) {
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
