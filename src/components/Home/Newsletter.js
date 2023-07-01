import TextField from "@mui/material/TextField";
import { Button } from "antd";
import { useState } from "react";
import { NewSubscribe } from "../../function/requests/newSubscribe";
import { ToastContainer } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const { loading, sendSubscribe } = NewSubscribe();

  const handleSendSubscribe = () => {
    sendSubscribe(email);
  };

  return (
    <section data-aos="zoom-in-down" className="bg-[#B2E2FB] w-full h-full">
      <div className="flex flex-col items-center justify-center mx-5 pb-10">
        <h1 className="mx-auto text-center font-semibold text-[30px] leading-[38px] mt-14 font-serif">
          Sign up for our newsletter
        </h1>

        <div className="mt-5 max-w-auto lg:max-w-2xl">
          <p className="font-serif text-[18px] text-center leading-[28px]">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <div className="mt-10 flex md:flex-row items-center sm:flex-col mb-5 space-x-3">
          <div className="flex flex-col">
            <TextField
              type="text"
              id="news-email-input"
              label="Email Address"
              style={{ backgroundColor: "white" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="ml-3">
              We care about your data in our privacy policy.
            </p>
          </div>

          <Button
            className="bg-[#146A96] font-medium md:w-[150px] sm:w-full border-2 border-[#146A96] mb-5"
            type="primary"
            size="large"
            onClick={handleSendSubscribe}
          >
            {loading ? "Sending....." : "Send"}
          </Button>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Newsletter;
