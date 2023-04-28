import React from "react";
import { Carousel, Button } from "antd";
import { BiPlayCircle } from "react-icons/bi";
import slide1 from "../../assests/Hero/slide1.png";
import slide2 from "../../assests/Hero/slide2.png";
import slide3 from "../../assests/Hero/slide3.png";
import slide4 from "../../assests/Hero/slide4.png";

const Hero = () => {
  const slideOne = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideTwo = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideThree = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideFour = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url(${slide4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-[100vh] w-full justify-center">
      <Carousel autoplay>
        <div>
          <div style={slideOne}>
            <div className="relative top-1/4 left-4 lg:left-28  w-full flex flex-col">
              <div className="w-[450px] space-y-7 mb-10">
                <h1 className="text-white  max-w-2xl text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
                  Real time water quality monitoring and management in fish
                  farms.
                </h1>
                <p className="w-[350px] text-white">
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
          <div style={slideTwo}>
            <div className="relative top-1/4 left-4 lg:left-28  w-full flex flex-col">
              <div className="w-[450px] space-y-7 mb-10">
                <h1 className="text-white  max-w-2xl text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
                  Real time water quality monitoring and management in fish
                  farms.
                </h1>
                <p className="w-[350px] text-white">
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
            <div className="relative top-1/4 left-4 lg:left-28  w-full flex flex-col">
              <div className="w-[450px] space-y-7 mb-10">
                <h1 className="text-white  max-w-2xl text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
                  Real time water quality monitoring and management in fish
                  farms.
                </h1>
                <p className="w-[350px] text-white">
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
            <div className="relative top-1/4 left-4 lg:left-28  w-full flex flex-col">
              <div className="w-[450px] space-y-7 mb-10">
                <h1 className="text-white  max-w-2xl text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
                  Real time water quality monitoring and management in fish
                  farms.
                </h1>
                <p className="w-[350px] text-white">
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
