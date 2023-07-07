import React from "react";
import { ToastContainer } from "react-toastify";

const CustomToastContainer = () => {
  return (
    <div>
      <ToastContainer
        className="w-10" // Adjust the width as per your requirements
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CustomToastContainer;
