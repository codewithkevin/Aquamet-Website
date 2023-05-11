import group from "../../assests/About/Aboutgroup.png";
import group2 from "../../assests/About/vision.png";
import { Button } from "antd";

const Intro = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center space-y-0">
        <div className="flex flex-col items-center bg-[#B2E2FB] w-full pb-10">
          <h1 className="text-[#146A96] font-serif font-semibold text-[16px] leading-[24px] text-center mt-20">
            About Us
          </h1>

          <div className="mt-4">
            <h1 className="font-serif font-bold text-[48px] leading-[60px] text-center text-[#29F36]">
              Aquamet Technologies
            </h1>

            <div className="mx-0 mt-5 space-y-4 max-w-auto sm:mx-5 sm:flex sm:flex-col sm:items-center md:text-justify md:max-w-2xl lg:max-w-3xl">
              <p className="font-serif font-medium leading-[30px] text-justify text-[#475467]">
                We are driven by the huge potential in the aquaculture industry
                as a prominent way of reducing Ghana’s 62% fish deficit. We are
                keen on empowering more small holder farmers and new and
                potential farmers with the needed tools to make their production
                sustainable.
              </p>
              <p className="font-serif font-medium leading-[30px] text-justify text-[#475467]">
                With our interest in providing the needed resources for farmers
                to make more, our team is made up of engineers, software
                developers and aquaculture experts who are obsessed with growth.
              </p>
              <p className="font-serif font-medium leading-[30px] text-justify text-[#475467]">
                We work hand in hand with farmers, processors, marketers and key
                stakeholders in the aquaculture and fisheries sector to provide
                the best solutions for them
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 mx-5 mb-7  md:mb-14">
          <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 lg:space-x-7">
            <div className="mt-5 md:mt-20">
              <div className="sm:text-center md:text-left">
                <strong className="text-[36px] leading-[44px] font-serif font-semibold">
                  We’re an impact driven company
                </strong>
              </div>
              <p className="flow-root max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                We provide one of the most predictive and advisory based water
                quality monitoring in ponds, cages and tanks. Tailored and
                connected holding facilities. Mobile and convenient monitoring.
                Robust farm management tools to reduce uncertainties and cuts
                mortalities by 45%.
              </p>
            </div>

            <div loading="lazy" className="mb-10">
              <img
                className="md:flex lg:flex  md:mt-20 lg:mt-0 md:w-[606px]"
                src={group}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-5 mx-5 mb-7  lg:mb-14">
          <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-2 lg:space-x-7">
            <div className="mt-5 lg:mt-20">
              <div className="sm:text-center md:text-left">
                <strong className="text-3xl font-serif">Our Mission</strong>
              </div>
              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Our mission is to revolutionize the aquaculture industry in
                Ghana by providing innovative technology solutions that enable
                farmers to monitor water quality remotely and improve their
                production yield, resulting in higher profits and more
                sustainable practices.
              </p>
            </div>

            <div className="mt-5 lg:mt-20">
              <div className="sm:text-center md:text-left">
                <strong className="text-3xl font-serif">Our Vision</strong>
              </div>
              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Our vision is to be the leading aquaculture technology company
                in Ghana, known for our innovative solutions that transform the
                industry and create sustainable practices for the future. We
                envision a future where farmers can produce high-quality fish in
                a cost-effective and environmentally friendly way, thanks to the
                support and tools provided by Aquamet.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 lg:mt-10 mx-5 mb-7  md:mb-14">
          <div className="lg:flex lg:flex-row lg:justify-evenly grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-2 lg:space-x-7">
            <div className="mt-5 md:mt-20 ">
              <div className=" md:text-left sm:text-center">
                <strong className="text-3xl  font-serif">
                  Our Core Values
                </strong>
              </div>

              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Passion: We are passionate about innovation and sustainability
                in aquaculture.
              </p>
              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Diligence: We approach every project and task with diligence,
                ensuring that we meet our customers' needs and exceed their
                expectations.
              </p>
              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Commitment: We are committed to providing exceptional customer
                service and support, and to building strong relationships with
                our customers and partners.
              </p>
              <p className="flow-root ... max-w-md text-gray-600 leading-[32px] mt-5 font-serif">
                Consistency: We prioritize consistent quality in our work and
                products/services.
              </p>
            </div>

            <div loading="lazy" className="mb-10 mt-5 lg:mt-20">
              <img
                className="md:flex lg:flex  md:mt-20 lg:mt-0 md:w-[606px]"
                src={group2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
