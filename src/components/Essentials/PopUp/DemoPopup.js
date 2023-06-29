import React, { useState } from "react";
import logo from "../../../assests/logo2.png";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import PhonePicker from "../PhonePicker";
import { DemoRequest } from "../../../function/requests/demoRequest";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DemoPopup = ({ open, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { loading, sendDemo } = DemoRequest();

  const handleSendDemo = () => {
    sendDemo(firstName, lastName, email, phoneNumber);
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
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

          <div className="form-container space-y-2 mx-auto max-w-lg">
            <h2 className="font-serif font-bold leading-[28px] text-[18px]">
              Request a Demo
            </h2>
            <p>
              Provide your details below to get access to the demo of Aquamet
              Solution
            </p>
          </div>

          <div className="flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-10 md:justify-between gap-0 md:gap-[5rem] lg:gap-[5rem]">
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                First name
              </h6>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Last name
              </h6>
              <TextField
                type="text"
                id="name"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
              Email
            </h6>
            <TextField
              type="email"
              id="email"
              label="example@gmail.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <PhonePicker onChange={(value) => setPhoneNumber(value)} />
          </div>

          <div className="mx-5">
            <div className="flex flex-row justify-center space-x-5 mt-5 mx-5">
              <div>
                <Button
                  variant="outlined"
                  className="w-[240px] sm:w-[150px]"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="w-[240px] sm:w-[150px]"
                  onClick={handleSendDemo}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DemoPopup;
