import React, { useState } from "react";
import logo from "../../../assests/logo2.png";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import PhonePicker from "../PhonePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { StartFarm } from "../../../function/requests/startFarm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NewFarmers = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [idtype, setIdType] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [location, setLocation] = useState("");
  const [farmlocationInfo, setFarmLocationInfo] = useState("");
  const [farmFacilities, setFarmFacilities] = useState("");
  // const [meetingVenue, setMeetingVenue] = useState("");

  const { loading, sendStartFarm } = StartFarm();

  const handleSubmit = () => {
    sendStartFarm(
      fullName,
      email,
      phoneNumber,
      age,
      idtype,
      idnumber,
      location,
      farmlocationInfo,
      farmFacilities
    );
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
        <div className="p-5 flex flex-col w-full space-y-10">
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
              Start Your Dream Fish Farm
            </h2>
            <p>
              This form is intended to collect details in real time from
              potential farmers who wants to start their farm. Read more
            </p>
          </div>

          <div className="flex flex-col md:space-y-0 sm:space-y-10 md:justify-between gap-0 md:gap-[5rem] lg:gap-[5rem]">
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Full name
              </h6>
              <TextField
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="name"
                label="Enter your name"
                variant="outlined"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
              Email
            </h6>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="example@gmail.com"
              variant="outlined"
            />
          </div>

          <div>
            <PhonePicker onChange={(value) => setPhoneNumber(value)} />
          </div>

          <div className="flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-10 md:justify-between gap-0 md:gap-[5rem] lg:gap-[5rem]">
            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Age
              </h6>
              <TextField
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="age"
                label="Eg: 25"
                variant="outlined"
              />
            </div>
          </div>

          <div className="flex flex-col my-5 space-y-1">
            <h6 className="font-serif text-[14px] leading-[20px]  ml-1 font-bold">
              ID Type<span className="text-red-500">*</span>
            </h6>
            <FormControl>
              <RadioGroup
                defaultValue={idtype}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Ghana card"
                  control={<Radio />}
                  label="Ghana card"
                  onChange={() => setIdType("Ghana card")}
                />
                <FormControlLabel
                  value="Passport"
                  control={<Radio />}
                  label="Passport"
                  onChange={() => setIdType("Passport")}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="flex flex-col">
            <h6 className="font-serif text-[14px] leading-[20px]  ml-1 font-bold">
              ID Number<span className="text-red-500">*</span>
            </h6>
            <TextField
              type="text"
              value={idnumber}
              onChange={(e) => setIdNumber(e.target.value)}
              id="idnumber"
              label="Enter ID Number"
              variant="outlined"
            />
          </div>

          <div className="flex flex-col my-5 space-y-1">
            <h6 className="font-serif text-[14px] leading-[20px]  ml-1 font-bold">
              Current Location*<span className="text-red-500">*</span>
            </h6>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={location}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Ghana"
                  onChange={() => setLocation("Ghana")}
                  control={<Radio />}
                  label="Ghana"
                />
                <FormControlLabel value="USA" control={<Radio />} label="USA" />
                <FormControlLabel
                  value="Europe"
                  onChange={() => setLocation("Europe")}
                  control={<Radio />}
                  label="Europe"
                />
                <div className="flex flex-row ">
                  <FormControlLabel
                    value="Others"
                    onChange={(e) => setLocation(e.target.value)}
                    control={<Radio />}
                    label="Others"
                  />
                  <TextField id="standard-basic" variant="standard" />
                </div>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="flex flex-col">
            <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
              Where in Ghana will your fish farm be situated? and the GPS
              address of the intended site(if any)*
            </h6>
            <TextField
              type="text"
              value={farmlocationInfo}
              onChange={(e) => setFarmLocationInfo(e.target.value)}
              id="current Location"
              label="Enter your answer"
              variant="outlined"
            />
          </div>

          <div className="flex flex-col my-5 space-y-1">
            <h6 className="font-serif text-[14px] leading-[20px]  ml-1 font-bold">
              Which of the following facilities do you intend to use for your
              fish farm.
            </h6>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={farmFacilities}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Ghana"
                  onChange={() => setFarmFacilities("Ghana")}
                  control={<Radio />}
                  label="Ghana"
                />
                <FormControlLabel value="USA" control={<Radio />} label="USA" />
                <FormControlLabel
                  value="Europe"
                  onChange={() => setFarmFacilities("Europe")}
                  control={<Radio />}
                  label="Europe"
                />
                <div className="flex flex-row ">
                  <FormControlLabel
                    value="Others"
                    onChange={(e) => setFarmFacilities(e.target.value)}
                    control={<Radio />}
                    label="Others"
                  />
                  <TextField id="standard-basic" variant="standard" />
                </div>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="mx-5">
            <div className="flex flex-row justify-center space-x-5 mt-5 mx-5">
              <div>
                <Button variant="outlined" className="w-[240px] sm:w-[150px]">
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  onClick={handleSubmit}
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

export default NewFarmers;
