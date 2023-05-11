import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "antd";

const Newsletter = () => {
  return (
    <section className="bg-[#B2E2FB] w-full h-full">
      <div className="flex flex-col items-center justify-center mx-5 pb-10">
        <h1 className="mx-auto text-center font-semibold text-[30px] leading-[38px] mt-14 font-serif">
          Sign up for our newsletter
        </h1>

        <div className="mt-5 max-w-auto lg:max-w-2xl">
          <p className="font-serif text-[18px] text-center leading-[28px]">
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <div className="mt-10 flex md:flex-row items-center sm:flex-col mb-5 space-x-3">
          <div className="flex flex-col">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
                "@media (min-width: 600px)": {
                  "& > :not(style)": { width: "40ch" },
                },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="Enter your email"
                variant="outlined"
              />
            </Box>
            <p className="ml-3">We care about your data in our privacy policy.</p>
          </div>

          <Button
            className="bg-[#146A96] font-medium md:w-[150px] sm:w-full border-2 border-[#146A96] mb-5"
            type="primary"
            size="large"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
