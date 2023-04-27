import React from "react";
import { Carousel } from "antd";

const Hero = () => {
  const slideOne = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url('https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideTwo = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2NlYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideThree = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url('https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=956&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slideFour = {
    height: "870px",
    color: "#fff",
    lineHeight: "160px",
    backgroundImage: `url('https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-[100vh] w-full justify-center">
      <Carousel autoplay>
        <div>
          <div style={slideOne}>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

            <div className="absolute top-1/3 left-14 lg:left-28">
              <div className="">
                <h1>Real time water quality monitoring and management in fish farms.</h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
