import ug from "../../assests/Others/group1.png";
import { useNavigate } from "react-router-dom";

const Farmers = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/about");
  }

  return (
    <section className="sm:mt-5 md:mt-16 mx-5 mb-20">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-5">
          <strong className="text-3xl text-center">Our Farmers</strong>
          <div className="flow-root ... max-w-md text-gray-600 leading-[30px] mt-5 space-y-10">
            <p>
              Our fish farmers are at the heart of what we do. We farm with them
              to obtain fish hand knowledge about the pain points and address
              them with easy-to use technological tools.
            </p>
            <p>
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

        <div loading="lazy" className="mt-14 sm:mt-2">
          <img className="md:flex lg:flex rounded-3xl" src={ug} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Farmers;
