import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const PhonePicker = () => {
  const [value, setValue] = useState();

  return (
    <div className="flex flex-col">
      <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
        Phone Number
      </h6>
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          className="flex-1 outline-none"
        />
      </div>
    </div>
  );
};

export default PhonePicker;
