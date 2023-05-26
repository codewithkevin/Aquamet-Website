import person1 from "../../assests/About/frank.png";
import person2 from "../../assests/About/lady.png";
import person3 from "../../assests/About/gabi.png";
import member1 from "../../assests/About/member1.jpeg";
import member2 from "../../assests/About/member2.jpeg";
import member3 from "../../assests/About/member3.jpeg";

const Team = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-2xl my-4">Meet Our Team</h2>
        </div>

        <div className="grid md:flex sm:grid-cols lg:flex md:items-center justify-center lg:flex-row lg:justify-evenly lg:mx-4 p-5">
          <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20 text-center space-y-3">
            <img className="rounded-full" src={person1} alt="" />
            <h1 className="font-bold font-serif">Frank Owusu</h1>
            <h6 className="text-[#146A96]">Co-Founder & CEO</h6>
          </div>
          <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20 text-center space-y-3">
            <img className="rounded-full" src={person2} alt="" />
            <h1 className="font-bold font-serif">Priscilla Brempong</h1>
            <h6 className="text-[#146A96]">Co-Founder & CMO</h6>
          </div>
          <div className="sm:col-span-1 lg:col-auto p-4 lg:mb-20 text-center space-y-3">
            <img className="rounded-full" src={person3} alt="" />
            <h1 className="font-bold font-serif">Gabriel Lorlornyo</h1>
            <h6 className="text-[#146A96]">Co-Founder & CTO</h6>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-col items-center text-center">
          <h2 class="font-bold text-2xl my-4">Board Members</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:gap-1 gap-4  justify-center mx-4 p-5">
          <div class="col-span-1 p-4 mb-10 text-center space-y-3">
            <img class="rounded-full w-32 h-32 mx-auto" src={member1} alt="" />
            <h1 class="font-bold font-serif">Prof. Irene S. Egyir</h1>
            <h6 class="text-[#146A96]">Dean, School of Agriculture UG.</h6>
          </div>

          <div class="col-span-1 p-4 mb-10 text-center space-y-3">
            <img class="rounded-full w-32 h-32 mx-auto" src={member2} alt="" />
            <h1 class="font-bold font-serif">Dr. Godfred Owusu Boateng.</h1>
            <h6 class="text-[#146A96]">
              Lecturer, Department of Fisheries and Watershed Management, KNUST
            </h6>
          </div>

          <div class="col-span-1 p-4 mb-10 text-center space-y-3">
            <img class="rounded-full w-32 h-32 mx-auto" src={member3} alt="" />
            <h1 class="font-bold font-serif">Michael K. Adonteng</h1>
            <h6 class="text-[#146A96]">CEO, Ovules Consulting, UK</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
