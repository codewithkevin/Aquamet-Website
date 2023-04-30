import ug from "../../assests/Others/aquamet.png";
import { BiPlayCircle } from "react-icons/bi";

const Approach = () => {
  return (
    <section className="mt-5 mx-5 pb-10">
      <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        <div className="mt-8">
          <img className="md:flex lg:flex hidden" src={ug} alt="" />
        </div>

        <div className="mt-5 ml-5">
          <strong className="text-3xl text-center">Our Farmers</strong>
          <div>
            <p className="font-medium flex items-center">
              <span className="mr-2 text-blue-600">
                <BiPlayCircle />
              </span>
              <span>
                Time saving Our solution is designed to save time for farmers by
                enabling them to remotely monitor water quality via SMS, mobile
                app, and advisory. This means farmers can quickly and easily
                access important information about their aquaculture operations
                without having to physically check on their farms.
              </span>
            </p>
          </div>
          
          <div className="mt-5">
            <p className="font-medium flex items-center">
              <span className="mr-2 text-blue-600">
                <BiPlayCircle />
              </span>
              <span>
                From production to marketing, we efficiently deploy cutting edge
                tools to assist smallholder farmers make more and obtain more at
                harvest
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
