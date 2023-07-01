import React, { useState } from "react";
import logo from "../../../assests/logo2.png";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import PhonePicker from "../PhonePicker";
import { SmartProbeRequest } from "../../../function/requests/smartProbeRequest";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductRequest = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfProbes, setNumberOfProbes] = useState("");
  const [location, setLocation] = useState("");

  const { loading, sendSmartProbeRequest } = SmartProbeRequest();

  const handleSumbit = () => {
    const data = {
      fullName,
      email,
      phoneNumber,
      numberOfProbes,
      location,
    };

    sendSmartProbeRequest(data);
  };

  const handleCancel = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setNumberOfProbes("");
    setLocation("");
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="p-5 flex flex-col w-full space-y-5">
          <div className="flex flex-row justify-between">
            <div className="float-left">
              <img src={logo} alt="" />
            </div>

            <div
              onClick={handleClose}
              className="float-right mt-5 cursor-pointer"
            >
              <CloseIcon style={{ fontSize: "2rem" }} />
            </div>
          </div>

          <div className="form-container space-y-2 max-w-lg">
            <h2 className="font-serif font-bold leading-[28px] text-[18px]">
              Smart Probe Request
            </h2>
            <p>Provide your details below to place your order</p>
          </div>

          <div className="flex flex-col md:space-y-0">
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Full Name*
              </h6>
              <TextField
                type="text"
                id="product-fullName-input"
                label="Enter your full name"
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
              Email Address*
            </h6>
            <TextField
              type="email"
              id="product-email-input"
              label="example@gmail.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <PhonePicker onChange={(value) => setPhoneNumber(value)} />
          </div>

          <div className="flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-10 md:justify-between gap-0 md:gap-[5rem] lg:gap-[5rem]">
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Number of Probes*
              </h6>
              <TextField
                type="number"
                id="product-numberOfProbes-input"
                label="Enter number of probes"
                variant="outlined"
                value={numberOfProbes}
                onChange={(e) => setNumberOfProbes(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Location*
              </h6>
              <TextField
                type="text"
                id="product-location-input"
                label="Eg: East Legon, Accra"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-center space-x-5 mt-5 mx-5">
              <div>
                <Button
                  onClick={handleCancel}
                  variant="outlined"
                  className="w-[240px] sm:w-[150px]"
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  onClick={handleSumbit}
                  variant="contained"
                  className="w-[240px] sm:w-[150px]"
                >
                  {loading ? "Sending....." : "Send"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductRequest;
