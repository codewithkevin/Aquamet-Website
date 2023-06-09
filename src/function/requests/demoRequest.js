import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const DemoRequest = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendDemo = async (firstName, lastName, email, phoneNumber) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aquamet.onrender.com/api/user/request/demo",
        {
          firstName,
          lastName,
          email,
          phoneNumber,
        }
      );

      const responseData = response.data;

      if (response.status !== 200) {
        toast.error(responseData.message);
        console.log("Reasponse data:" + responseData);
      } else {
        setLoading(false);
        toast.success("Request Sent", {
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
      console.log("Error Data: " + error);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, sendDemo };
};
