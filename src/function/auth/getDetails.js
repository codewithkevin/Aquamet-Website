import { useEffect, useState } from "react";

export const GetUserDetails = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    // Retrieve the token from localStorage or wherever it is stored
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);
    const userToken = parsedUser ? parsedUser.token : null;
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserData(token); // Call the function with the token
    }
  }, [token]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("/api/user/account/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        // Do something with the user data
        console.log(userData);
        setUserData(userData);
      } else {
        console.error(
          "An error occurred while fetching user data.",
          response.status
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching user data.", error);
    }
  };

  return { userData, token };
};
