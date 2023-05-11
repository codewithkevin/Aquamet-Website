import solution1 from "../assests/Solutions/image1.png";
import solution2 from "../assests/Solutions/image2.png";
import solution3 from "../assests/Solutions/image3.png";
import solution4 from "../assests/Solutions/image4.png";
import Newsletter from "../components/Home/Newsletter";

const Solution = () => {
  return (
    <section className="w-full h-full mt-20">
      <section class="flex flex-col justify-center items-center sm:space-y-10  md:space-y-44 pb-20 mx-5">
        <div className="space-y-10">
          <h1 className="text-[#146A96] font-serif font-normal text-[16px] leading-[24px] text-center">
            Our Solution
          </h1>
          <div class="md:max-w-5xl  mx-auto">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              We have the best solution to your needs
            </h1>
            <div class="text-center mt-5">
              <p class="md:text-xl sm:text-[16px] font-serif text-justify">
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

          <div className="mt-5 flex justify-center text-center">
            <img src={solution1} alt="" />
          </div>
        </div>

        <div className="space-y-10">
          <div class="md:max-w-5xl  mx-auto">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              Continuous real-time monitoring of water quality anywhere
            </h1>
            <div class="text-center mt-5">
              <p class="md:text-xl sm:text-[16px] font-serif text-justify">
                AquaMet provides a smart probe that enables farmers to
                continuously monitor their water quality remotely, in real-time,
                and from anywhere. This means that farmers can track the water
                quality of their aquaculture operations 24/7, without physically
                being present at the farm.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center text-center">
            <img src={solution2} alt="" />
          </div>
        </div>

        <div className="space-y-10">
          <div class="md:max-w-5xl  mx-auto">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              Alert system via SMS, IVR and mobile app notifications
            </h1>
            <div class="text-center mt-5">
              <p class="md:text-xl sm:text-[16px] font-serif text-justify">
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

        <div className="space-y-10">
          <div class="md:max-w-5xl  mx-auto">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              Obtain accurate and water quality records
            </h1>
            <div class="text-center mt-5">
              <p class="md:text-xl sm:text-[16px] font-serif text-justify">
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

        <div className="space-y-10">
          <div class="md:max-w-5xl  mx-auto">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              Interactive farm management tools on AquaMet Mobile App.
            </h1>
            <div class="text-center mt-5">
              <p class="md:text-xl sm:text-[16px] font-serif text-justify">
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
