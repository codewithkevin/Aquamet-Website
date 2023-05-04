import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "antd";

const Newsletter = () => {
  return (
    <section className="bg-[#F9FAFB] w-full h-full mt-10">
      <div className="flex flex-col mt-10 items-center justify-center mx-5 pb-10">
        <h1 className="mx-auto text-center font-bold text-3xl">
          Sign up for our newsletter
        </h1>

        <div className="mt-5 max-w-auto lg:max-w-2xl">
          <p>
            Be the first to know about releases and industry news and insights.
          </p>
        </div>

        <div className="mt-10 flex md:flex-row items-center sm:flex-col mb-5 space-x-3">
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

          <Button
            className="bg-[#146A96] font-medium md:w-[150px] sm:w-full border-2 border-[#146A96]"
            type="primary"
            size="large"
          >
            Subscribe
          </Button>
        </div>

        <div className="float-left">
          <p>We care about your data in our privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
