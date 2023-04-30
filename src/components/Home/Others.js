import { BiPlayCircle } from "react-icons/bi";

const Others = () => {
  return (
    <section className="flex flex-col items-center p-10">
      <div>
        <h1 className="mx-auto text-center font-bold text-3xl">
          What drives us?
        </h1>
      </div>

      <div className="mt-5 space-y-4 max-w-auto lg:max-w-lg">
        <div>
          <p className="font-medium flex items-center">
            <span className="mr-2 text-blue-600">
              <BiPlayCircle />
            </span>
            <span>
              We approach fish farming with precision and data driven approach.
            </span>
          </p>
        </div>
        <div>
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
    </section>
  );
};

export default Others;
