import React from "react";

const Start = () => {
  return (
    <section class="flex flex-col justify-center items-center space-y-10 pb-20 bg-[#ECFBFF]">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-6 mt-6">
          Start your small-scale to large-scale farm
        </h1>
        <div class="text-center max-w-3xl">
          <p class="text-xl">
            Aquamet Technologies offers assistance in starting and managing
            aquaculture farms, from small-scale to large-scale, with the use of
            their smart probe technology for remote water quality monitoring and
            their mobile app for farm management tools and advisory services.
          </p>
          <button class="bg-white  text-[#146A96] mt-10 font-normal py-2 px-4 rounded border-[#146A96]">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Start;
