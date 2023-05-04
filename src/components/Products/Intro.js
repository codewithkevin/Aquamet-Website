import device from "../../assests/Others/device.png";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 pb-20">
      <div className="mb-7  lg:mb-14">
        <h1 className="text-[#146A96] font-serif font-normal text-[16px] leading-[24px] text-center">
          Our Products
        </h1>

        <div className="mt-4">
          <h1 className="font-serif font-bold text-[48px] leading-[60px] text-center ">
            Aquamet Products
          </h1>

          <div className="mx-0 mt-5 space-y-4 max-w-auto sm:mx-5  sm:flex sm:flex-col sm:items-center md:text-justify md:max-w-lg lg:max-w-lg">
            <p className="">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more customers. Trusted by best
              companies.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 mx-5 mb-7  lg:mb-14">
        <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 sm:gap-4 md:gap-28 md:grid-cols-2 lg:grid-cols-2 lg:space-x-7">
          <div className="mt-5 md:mt-10">
            <div className="">
              <strong className="text-3xl font-serif">
                Aquamet Smart Probe
              </strong>
            </div>
            <p className="flow-root max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
              Our smart probe is an submersible probe, which makes water quality
              monitoring and management easily accessible everywhere on 24/7
              basis. Water quality is monitored in real time on our mobile app
              and with daily SMS notifications to the farmers phone or connected
              device.
            </p>

            <button class="bg-[#146A96]  text-white mt-10 font-normal py-2 px-4 rounded border-[#146A96]">
              Get the smart probe
            </button>
          </div>

          <div
            loading="lazy"
            className="mb-10  border-4 p-6 rounded-tl-[180px] rounded-br-[180px] border-[#146A96]"
          >
            <img className="" src={device} alt="" />
          </div>
        </div>
      </div>

      <div className="mt- l mb-7 mx-5  lg:mb-14">
        <strong className="text-2xl font-serif">Aquamet Mobile App</strong>
        <div className="max-w-md  md:max-w-6xl space-y-3 mt-2">
          <p>
            Use our engineered management tools for a fish better yield. (
            real-time advisory with aquaculture experts anytime, feed estimator,
            record keeping , water quality monitoring and many more).
          </p>
          <p>
            Expert advisory services; Right from facility(ponds, tarpaulin
            tanks, plastic tanks, concrete tanks or cages) construction,
            stocking and harvesting, obtain expert advisory from our aquaculture
            experts in fish health, fish nutrition, and production technicians
            to maximize your production output.
          </p>
          <p>
            Feed estimator; Maximixe your feed by managing it efficiently. Use
            our automatic feed estimator to calculate daily feed allowance for
            your tilapaia or catfish with tips on application. Waste no feed,
            grow healthy and cost efficient fish.
          </p>
          <p>
            Record Keeping; Keep track of your production processes. From number
            of fishes stocked, utilities ussed, other inputs applied over the
            production cycle, marketing etc. to your outputs thus fish harveted,
            sold etc. Keep your production trends and make informed decisions to
            avoid loses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
