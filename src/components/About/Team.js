import person1 from "../../assests/About/frank.png";
import person2 from "../../assests/About/lady.png";
import person3 from "../../assests/About/gabi.png";

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
    </section>
  );
};

export default Team;
