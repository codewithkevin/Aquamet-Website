import { useEffect, useState } from "react";

export const GetUserDetails = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);
    const userToken = parsedUser ? parsedUser.token : null;
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserData(token);
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
        const { name } = userData; // Extract the name property from the userData object
        setUserData(name);
        console.log("Response is Okay");
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
