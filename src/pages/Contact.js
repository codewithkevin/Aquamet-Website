import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Newsletter from "../components/Home/Newsletter";
import PhonePicker from "../components/Essentials/PhonePicker";

const Contact = () => {
  return (
    <div className="w-full h-full space-y-10">
      <section className="flex flex-col justify-center items-center space-y-10 pb-20">
        <div className="mb-7 bg-[#B2E2FB] w-full max-auto lg:mb-14 p-10">
          <h1 className="text-[#146A96] font-serif font-bold text-[16px] leading-[24px] text-center mt-20">
            Contact Us
          </h1>

          <div className="mt-4">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              We’d love to hear from you
            </h1>

            <div className="mt-5">
              <p className="text-center">Our friendly team is always here to chat.</p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col mx-5 lg:mx-[16rem] md:space-y-0 sm:space-y-10  md:space-x-10 w-full">
          <div className="basis-1/2  flex items-center flex-col space-y-5">
            <div className="w-[48px] h-[48px] bg-[#ECFBFF] border-2 rounded-full p-1">
              <EmailIcon className="text-[#146A96]" fontSize="large" />
            </div>

            <div>
              <h1 className="font-serif text-[20px]  font-semibold">Email</h1>
            </div>

            <div>
              <h6 className="text-[#146A96] font-serif text-[16px] leading-[24px] font-normal cursor-pointer">
                aquamettechologies@gmail.com
              </h6>
            </div>
          </div>

          <div className="basis-1/2  flex items-center flex-col space-y-5">
            <div className="w-[48px] h-[48px] bg-[#ECFBFF] border-2 rounded-full p-1">
              <PhoneIcon className="text-[#146A96]" fontSize="large" />
            </div>

            <div>
              <h1 className="font-serif text-[20px]  font-semibold">Phone</h1>
            </div>

            <div>
              <h6 className="text-[#146A96] font-serif text-[16px] leading-[24px] font-normal cursor-pointer">
                0546200481, 0542569023
              </h6>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="mt-4">
            <h1 className="font-serif font-bold md:text-[48px] sm:text-[28px] md:leading-[60px] sm:leading-[31px] text-center ">
              Get in touch
            </h1>

            <div className="mx-0 mt-5 space-y-4 max-w-auto sm:mx-5  sm:flex sm:flex-col sm:items-center md:text-justify md:max-w-lg lg:max-w-lg">
              <p className="">
                We’d love to hear from you. Please fill out this form.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 md:mx-0 sm:mx-5">
            <div className="flex md:flex-row sm:flex-col md:space-y-0 sm:space-y-10 md:justify-between gap-0 md:gap-[10rem] lg:gap-[15rem]">
              <div className="flex flex-col">
                <h6 className="font-serif text-[14px] leading-[20px] mb-4 ml-1">
                  First name
                </h6>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </div>
              <div className="flex flex-col">
                <h6 className="font-serif text-[14px] leading-[20px] mb-4 ml-1">
                  Last name
                </h6>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Email
              </h6>
              <TextField
                id="outlined-basic"
                label="example@gmail.com"
                variant="outlined"
              />
            </div>

            <PhonePicker />

            <div className="flex flex-col">
              <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
                Message
              </h6>

              <TextField
                id="outlined-multiline-static"
                label="Leava your meassage......"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <Checkbox />
              <h6 className="font-serif text-sm">
                You agree to our friendly privacy policy.
              </h6>
            </div>

            <Button variant="contained" sx={{ backgroundColor: "#146A96" }}>
              Send message
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Contact;
