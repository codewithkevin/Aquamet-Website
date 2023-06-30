import { useEffect, useState } from "react";
import axios from "axios";

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
      const response = await axios.get(
        "https://aquamet.onrender.com/api/user/account/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        const { name } = userData; // Extract the name property from the userData object
        setUserData(name);
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
