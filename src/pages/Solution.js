import solution1 from "../assests/Solutions/image1.png";
import solution2 from "../assests/Solutions/image2.png";
import solution3 from "../assests/Solutions/image3.png";
import solution4 from "../assests/Solutions/image4.png";
import Newsletter from "../components/Home/Newsletter";

const Solution = () => {
  return (
    <section loading="lazy" className="w-full h-full ">
      <section className="flex flex-col justify-cebnter items-center sm:space-y-10  md:space-y-14 pb-20">
        <div className="space-y-10 g-[#B2E2FB] w-full p-10">
          <h1 className="text-[#146A96] font-serif font-bold text-[16px] leading-[24px] text-center mt-20">
            Our Solution
          </h1>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="200"
            className="md:max-w-6xl  mx-auto"
          >
            <h1 className="font-serif font-bold md:text-[36px] sm:text-[28px] md:leading-[44px] sm:leading-[31px] text-center">
              We have the best solution to your needs
            </h1>
            <div className="text-center mt-5 max-w-3xl items-center mx-auto">
              <p className="md:text-[20px] sm:text-[16px] font-serif text-center leading-[30px] font-normal text-[#475467]">
                Our solution comes with a smart probe for monitoring water
                quality remotely via SMS, mobile app and advisory both
                online(voice messages and interactive app) and offline. Our
                primary goal is to foster aquaculture production through
                reducing high mortalities and increasing farmers’ yield. An
                array of assistive farm management tools such as feed estimator,
                record keeping, and management tips can also be found on our
                mobile app.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="200"
            className="mt-5 flex justify-center text-center"
          >
            <img src={solution1} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="space-y-10 p-10"
        >
          <div className="md:max-w-5xl  mx-auto mb-[10rem]">
            <h1 className="ffont-serif font-bold md:text-[36px] sm:text-[28px] md:leading-[44px] sm:leading-[31px] text-center">
              Continuous real-time monitoring of water quality anywhere
            </h1>
            <div className="text-center mt-5 space-y-5">
              <p className="md:text-[20px] sm:text-[16px] font-serif  leading-[30px] font-normal text-[#475467] text-left">
                AquaMet provides a smart probe that enables farmers to
                continuously monitor their water quality remotely, in real-time,
                and from anywhere.
              </p>
              <p className="md:text-[20px] sm:text-[16px] font-serif  leading-[30px] font-normal text-[#475467] text-left">
                This means that farmers can track the water quality of their
                aquaculture operations 24/7, without physically being present at
                the farm.
              </p>
            </div>
          </div>

          <div className="flex justify-center text-center">
            <img src={solution2} alt="" />
          </div>
        </div>

        <div className="space-y-10 p-10">
          <div className="md:max-w-5xl mx-auto mb-[10rem]">
            <h1 className="ffont-serif font-bold md:text-[36px] sm:text-[28px] md:leading-[44px] sm:leading-[31px] text-center">
              Alert system via SMS, IVR and mobile app notifications
            </h1>
            <div className="text-center mt-5">
              <p className="md:text-[20px] sm:text-[16px] font-serif  leading-[30px] font-normal text-[#475467] text-left">
                In case of any irregularities in the water quality, AquaMet
                sends real-time alerts to farmers via SMS, IVR, and mobile app
                notifications. This helps farmers take immediate action to
                prevent the spread of diseases and reduce the mortality rate of
                fish.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center text-center">
            <img src={solution3} alt="" />
          </div>
        </div>

        <div className="space-y-10 p-10">
          <div className="md:max-w-5xl  mx-auto mb-[10rem]">
            <h1 className="ffont-serif font-bold md:text-[36px] sm:text-[28px] md:leading-[44px] sm:leading-[31px] text-center">
              Obtain accurate and water quality records
            </h1>
            <div className="text-center mt-5">
              <p className="md:text-[20px] sm:text-[16px] font-serif  leading-[30px] font-normal text-[#475467] text-left">
                AquaMet allows farmers to obtain accurate and reliable records
                of their water quality, which is essential for the successful
                production of healthy fish. These records are stored in a secure
                database and can be accessed anytime for future reference.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center text-center">
            <img src={solution4} alt="" />
          </div>
        </div>

        <div className="space-y-10 p-10">
          <div className="md:max-w-5xl  mx-auto">
            <h1 className="ffont-serif font-bold md:text-[36px] sm:text-[28px] md:leading-[44px] sm:leading-[31px] text-center">
              Interactive farm management tools on AquaMet Mobile App.
            </h1>
            <div className="text-center mt-5">
              <p className="md:text-[20px] sm:text-[16px] font-serif  leading-[30px] font-normal text-[#475467] text-left">
                The AquaMet mobile app includes interactive farm management
                tools such as a feed estimator, record-keeping, and management
                tips. These tools help farmers make informed decisions about
                their aquaculture operations and improve their yield.
              </p>
              <p>
                The mobile app is user-friendly and provides farmers with the
                necessary information and functionality required for their work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </section>
  );
};

export default Solution;
