import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const NewSubscribe = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendSubscribe = async (email) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aquamet.onrender.com/api/user/request/news",
        {
          email,
        }
      );

      console.log("Data: ", response);

      if (response.status !== 200) {
        toast.error(response.message);
        console.log("Reasponse data:" + response);
      } else {
        setLoading(false);
        toast.success("Subscribed", {
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
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, sendSubscribe };
};
