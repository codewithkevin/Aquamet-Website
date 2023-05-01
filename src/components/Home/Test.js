import { useState } from "react";

function Test() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ["Hello World1", "Hello World2", "Hello World3"];

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? titles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className={`${activeIndex === 0 ? "" : "hidden"} text-4xl mb-4`}>
        {titles[0]}
      </h1>
      <h1 className={`${activeIndex === 1 ? "" : "hidden"} text-4xl mb-4`}>
        {titles[1]}
      </h1>
      <h1 className={`${activeIndex === 2 ? "" : "hidden"} text-4xl mb-4`}>
        {titles[2]}
      </h1>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Test;
