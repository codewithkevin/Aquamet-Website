import { Carousel, Button } from "antd";
import { BiPlayCircle } from "react-icons/bi";
import slide1 from "../../assests/Hero/slide1.png";
import slide2 from "../../assests/Hero/slide2.png";
import slide3 from "../../assests/Hero/slide3.png";
import slide4 from "../../assests/Hero/slide4.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import logo from "../../assests/logo2.png";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-number-input";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Hero = () => {
  const slideOne = {
    height: "93vh",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideTwo = {
    height: "93vh",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideThree = {
    height: "93vh",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideFour = {
    height: "93vh",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState();

  return (
    <div loading="lazy" className="relative h-[100vh] w-full justify-center">
      <Carousel autoplay>
        <div>
          <div style={slideOne}>
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative font-sans">
                  Reduce high mortalities and obtain 35% more fish at harvest
                  with our predictive management tools
                </h1>
                <p className="text-white mt-5">
                  Empowering Aquaculture Production Through Technology.
                </p>
              </div>

              <div className="btnHolder space-x-5 flex flex-row top-10">
                <Button
                  className="bg-[#146A96] font-medium"
                  type="primary"
                  size="large"
                >
                  Visit AquaStall
                </Button>
                <Button
                  onClick={handleClickOpen}
                  className="bg-white text-[#146A96] font-medium w-[150px]"
                  size="large"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="mr-2">
                    <BiPlayCircle />
                  </span>
                  <span className="text-[#146A96]">Demo</span>
                </Button>

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

                      <div className="float-right mt-5 cursor-pointer">
                        <CloseIcon style={{ fontSize: "2rem" }} />
                      </div>
                    </div>

                    <div className="form-container space-y-2 mx-auto max-w-lg">
                      <h2 className="font-serif font-bold leading-[28px] text-[18px]">
                        Request a Demo
                      </h2>
                      <p>
                        Provide your details below to get access to the demo of
                        Aquamet Solution
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
                        />
                      </div>
                      <div className="flex flex-col">
                        <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                          Last name
                        </h6>
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          variant="outlined"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                        Email
                      </h6>
                      <TextField
                        id="outlined-basic"
                        label="example@gmail.com"
                        variant="outlined"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                        Phone Number
                      </h6>
                      <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={value}
                          onChange={setValue}
                          className="flex-1 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <div className="float-left">
                        <img src={logo} alt="" />
                      </div>

                      <div className="float-right mt-5 cursor-pointer">
                        <CloseIcon style={{ fontSize: "2rem" }} />
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={slideTwo}>
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative font-sans">
                  Revolutionizing Aquaculture with Smart Water Monitoring and
                  Farm Management Tools.
                </h1>
                <p className="text-white mt-5">
                  Empowering Aquaculture Production Through Technology.
                </p>
              </div>

              <div className="btnHolder space-x-5 flex flex-row top-10">
                <Button
                  className="bg-[#146A96] font-medium"
                  type="primary"
                  size="large"
                >
                  Visit AquaStall
                </Button>
                <Button
                  className="bg-white text-[#146A96] font-medium w-[150px]"
                  size="large"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="mr-2">
                    <BiPlayCircle />
                  </span>
                  <span className="text-[#146A96]">Demo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={slideThree}>
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative font-sans">
                  AquaStall: Buy/sell fish farm inputs and high-quality fish
                  from 500+ farmers.
                </h1>
                <p className="text-white mt-5">
                  Empowering Aquaculture Production Through Technology.
                </p>
              </div>

              <div className="btnHolder space-x-5 flex flex-row top-10">
                <Button
                  className="bg-[#146A96] font-medium"
                  type="primary"
                  size="large"
                >
                  Visit AquaStall
                </Button>
                <Button
                  className="bg-white text-[#146A96] font-medium w-[150px]"
                  size="large"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="mr-2">
                    <BiPlayCircle />
                  </span>
                  <span className="text-[#146A96]">Demo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={slideFour}>
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative font-sans">
                  Get expert advice and tools to improve your fish farm
                  production and harvest.
                </h1>
                <p className="text-white mt-5">
                  Empowering Aquaculture Production Through Technology.
                </p>
              </div>

              <div className="btnHolder space-x-5 flex flex-row top-10">
                <Button
                  className="bg-[#146A96] font-medium"
                  type="primary"
                  size="large"
                >
                  Visit AquaStall
                </Button>
                <Button
                  className="bg-white text-[#146A96] font-medium w-[150px]"
                  size="large"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span className="mr-2">
                    <BiPlayCircle />
                  </span>
                  <span className="text-[#146A96]">Demo</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
