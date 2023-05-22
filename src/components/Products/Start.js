import { useState } from "react";
import NewFarmers from "../Essentials/PopUp/NewFarmers";

const Start = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex flex-col justify-center items-center space-y-10 pb-20 bg-[#ECFBFF]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 mt-6">
          Start your small-scale to large-scale farm
        </h1>
        <div className="text-center max-w-3xl">
          <p className="text-xl font-medium">
            We assist you source your and construct your ponds or tanks, provide
            you with access to quality feed, fingerlings and the right tools to
            maximize your yield
          </p>

          <button
            onClick={handleClickOpen}
            className="bg-white  text-[#146A96] mt-10 font-normal py-2 px-4 rounded border-[#146A96]"
          >
            Get Started Now
          </button>
        </div>
      </div>

      <div className="relative">
        {open && (
          <div className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
        )}
        <div className="relative z-10">
          <NewFarmers open={open} handleClose={handleClose} />
        </div>
      </div>
    </section>
  );
};

export default Start;
