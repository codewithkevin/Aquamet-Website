import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ug from "../../assests/Others/group2.png";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titles = [
    {
      title:
        "Aquamet Helped  us at every step of the process, setting up our fish farm.",
      name: "Katherine Mos",
      position: "CEO, Welldone Fish Farm",
    },
    {
      title:
        "Aquamet assisted us at every step of the process, setting up our fish farm.",
      name: "Frank",
      position: "CEO, Aquamet Company",
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
    <section className="flex md:flex-row sm:flex-col mx-5 lg:mx-28 pb-4 space-x-3 space-y-3 md:space-x-10">
      <div className="basis-1/2 md:mt-[10rem]">
        {titles.map((title, index) => (
          <h1
            key={index}
            className={`${
              activeIndex === index ? "" : "hidden"
            } text-3xl mb-4 font-bold md:max-w-md`}
          >
            {title.title}
          </h1>
        ))}
        <div className="text-lg mb-4 flex flex-row items-center mt-10">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <h6 className="ml-2">
                {titles[activeIndex].name}
                <hr />
              </h6>
            </div>
            <div className="ml-12">
              <p className="text-xs">{titles[activeIndex].position}</p>
            </div>
          </div>

          <div className="flex justify-between space-x-10 ml-7">
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
    </section>
  );
};

export default Testimonial;
