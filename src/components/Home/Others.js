import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import AOS from "../Essentials/AOSInitializer";

const Others = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="100"
      className="flex flex-col items-center p-10 bg-[#B2E2FB]"
    >
      <div>
        <h1 className="mx-auto text-center font-medium text-[36px] leading-[44px] font-dmsans">
          What drives us?
        </h1>
      </div>

      <div className="mt-5 space-y-4 max-w-auto lg:max-w-lg">
        <div>
          <p className="font-medium flex items-center">
            <span className="bg-[#ECFBFF] p-1 rounded-full">
              <CheckRoundedIcon className="text-blue-600" fontSize="small" />
            </span>
            <span className="ml-3 font-serif">
              We approach fish farming with precision and data driven approach.
            </span>
          </p>
        </div>
        <div>
          <p className="font-medium flex items-center font-serif">
            <span className="bg-[#ECFBFF] p-1 rounded-full">
              <CheckRoundedIcon className="text-blue-600" fontSize="small" />
            </span>
            <span className="ml-3">
              From production to marketing, we efficiently deploy cutting edge
              tools to assist smallholder farmers make more and obtain more at
              harvest
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Others;
