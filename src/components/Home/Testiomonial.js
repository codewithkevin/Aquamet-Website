import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ug from "../../assests/Others/group2.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = useState(6);

  const titles = [
    {
      title:
        "Excellent service, they helped me set up my fish farm and provided training for me to produce fish with no prior experience",
      name: "Tetteh",
      position: "CEO and Customer, Dynamo farms",
    },
    {
      title:
        "Excellent service, they helped me set up my fish farm and provided training for me to produce fish with no prior experience",
      name: "Abu",
      position: "Customer from Aqumate, Adenta",
    },
    {
      title:
        "They assisted me to revamp my fish farm with their services and now my farm is profitable. Will highly recommend their services",
      name: "Madam Patricia",
      position: "ustomer from Aqumate, Dodowa",
    },
  ];

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? titles.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#B2E2FB] w-full h-full">
      <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-[16rem] pb-16 space-x-3 space-y-3 md:space-x-10 mt-10 gap-6">
        <div className="basis-1/2 md:mt-[5rem]">
          <div className="w-full mt-10  md:h-[20vh] sm:h-[25vh]">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={value} readOnly />
            </Box>
            {titles.map((title, index) => (
              <h1
                key={index}
                className={`${
                  activeIndex === index ? "" : "hidden"
                } text-2xl mb-4 md:max-w-3xl font-serif font-semibold leading-[37px]`}
              >
                {title.title}
              </h1>
            ))}
          </div>

          <div className="text-lg mb-4 flex md:flex-row sm:flex-col md:items-center sm:mt-[4.5rem] md:mt-16">
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center">
                <Avatar alt="Remy Sharp" src="" />
                <h6 className="ml-2">
                  {titles[activeIndex].name}
                  <hr />
                </h6>
              </div>
              <div className="ml-12">
                <p className="text-xs">{titles[activeIndex].position}</p>
              </div>
            </div>

            <div className="flex  md:justify-between space-x-10 md:ml-7 sm:mt-4">
              <button
                className="text-black  bg-white border-2 rounded-full px-4 py-3"
                onClick={handlePrevClick}
              >
                <ArrowBackIcon fontSize="small" />
              </button>
              <button
                className="text-black  bg-white border-2 rounded-full px-4 py-3"
                onClick={handleNextClick}
              >
                <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>

        <div className="basis-1/2   lg:mr-40">
          <img className="" src={ug} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
