import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StartFarm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendStartFarm = async (
    fullName,
    email,
    phoneNumber,
    age,
    idtype,
    idnumber,
    location,
    farmlocationInfo,
    farmFacilities,
    meetingVenue,
    meetingDate,
    meetingTime
  ) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aquamet.onrender.com/api/user/request/farm",
        {
          fullName,
          email,
          phoneNumber,
          age,
          idtype,
          idnumber,
          location,
          farmlocationInfo,
          farmFacilities,
          meetingVenue,
          meetingDate,
          meetingTime,
        }
      );

      if (response.status !== 200) {
        toast.error(response.data);
        console.log("Reasponse data:" + response.data);
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
      console.log("Error", error.response);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, sendStartFarm };
};
