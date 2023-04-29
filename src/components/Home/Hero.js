import { useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      console.log("Width " + window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full justify-center">
      <Carousel autoplay>
        <div>
          <div style={slideOne}>
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
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
            <div className="relative top-1/4 left-4 lg:left-28 w-full flex flex-col">
              <div className="max-w-[22rem] sm:max-w-[22rem] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
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
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
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
                <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-wide z-10 relative">
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
