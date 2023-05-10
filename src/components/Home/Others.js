import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Others = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-[#B2E2FB]">
      <div>
        <h1 className="mx-auto text-center font-bold text-3xl">
          What drives us?
        </h1>
      </div>

      <div className="mt-5 space-y-4 max-w-auto lg:max-w-lg">
        <div>
          <p className="font-medium flex items-center">
            <span className="bg-[#ECFBFF] p-1 rounded-full">
              <CheckRoundedIcon className="text-blue-600" fontSize="small" />
            </span>
            <span className="ml-3">
              We approach fish farming with precision and data driven approach.
            </span>
          </p>
        </div>
        <div>
          <p className="font-medium flex items-center">
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
