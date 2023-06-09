import ug from "../../assests/Others/group1.png";

const Farmers = () => {
  return (
    <section className="sm:mt-10 md:mt-16 mx-5 mb-20">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-5">
          <strong className="text-[37px] text-center font-dmsans md:font-medium sm:font-semibold leading-[44px]">
            Our Farmers
          </strong>
          <div className="flow-root ... max-w-2xl text-gray-600 leading-[30px] mt-5 sm:space-y-3 lg:space-y-10">
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              Our fish farmers are at the heart of what we do. We farm with them
              to obtain fish hand knowledge about the pain points and address
              them with easy-to use technological tools.
            </p>
            <p className="font-serif text-[18px] leading-[28px] text-gray-600 font-normal">
              We are currently working with some 500 fish farmers, mostly
              smallholder pond and cage farmers who are located in the Greater
              Accra, Kumasi and Asutuare in the Eastern region. Our key
              motivation is to empower these farmers to scale their production
              significantly to off-set local fish deficit. In the coming years,
              we will be serving over a 100,000 farmers and other aquaculture
              value chain players across West Africa with our solutions.
            </p>
          </div>
        </div>

        <div loading="lazy" className="mt-14 sm:mt-2 md:mt-[8rem] lg:mt-0">
          <img className="md:flex lg:flex rounded-3xl" src={ug} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Farmers;
