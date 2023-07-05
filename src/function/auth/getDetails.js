import { useEffect, useState } from "react";
import axios from "axios";

export const GetUserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        const userToken = parsedUser?.token || "";

        const response = await axios.get(
          "https://aquamet.onrender.com/api/user/account/me",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (response.status === 200) {
          const { name } = response.data;
          setUserData(name);
          setError(null);
        } else {
          throw new Error("An error occurred while fetching user data.");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  return { userData, error };
};
