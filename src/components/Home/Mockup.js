import { useState } from "react";
import { Button } from "antd";
import mockup from "../../assests/Others/Mockup.png";
import MessageModal from "../Essentials/MessageModal";

const Mockup = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <section loading="lazy" className="md:mt-20 pb-10 sm:mt-10">
      <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-[16rem] pb-4  space-y-3 md:space-x-10">
        <div
          data-aos="fade-right"
          className="flex flex-col basis-1/2 sm:mb-20 mb-0"
        >
          <div className="mt-0 lg::mt-14 md:mt-10">
            <h1 className="text-2xl font-semibold mb-4 font-dmsans">
              AquaStall <span className=""> - Marketplace</span>
            </h1>
            <p className="flow-root ... max-w-2xl text-gray-600 leading-[32px] mb-5">
              Sell your fish or other inputs by creating your stall. You can
              also buy your fresh quality farmed fish right from the farm.
              Obtain all your fish farm inputs on our stall.
            </p>
          </div>

          <div className="flex sm:justify-center md:justify-normal mt-0 lg:mt-10">
            <Button
              onClick={toggleModal}
              className="bg-[#146A96] font-medium md:w-[150px] sm:w-[450px] text-center"
              type="primary"
              size="large"
            >
              Visit AquaStall
            </Button>
          </div>
        </div>

        {showModal && (
          <MessageModal message="Coming Soon..." onClose={toggleModal} />
        )}
        <div
          data-aos="fade-left"
          className="w-full md:w-1/2 mt-10 rounded-xl overflow-hidden md:pt-5"
        >
          <div className="border-4 border-black">
            <img src={mockup} alt="aquamet" className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockup;
