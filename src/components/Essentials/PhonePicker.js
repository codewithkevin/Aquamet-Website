import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const PhonePicker = ({ onChange }) => {
  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col">
      <h6 className="font-serif text-[14px] leading-[20px] mb-2 ml-1">
        Phone Number
      </h6>
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <PhoneInput
          id="phone-input"
          name="phone"
          placeholder="Enter phone number"
          value={value}
          onChange={handleChange}
          className="flex-1 outline-none"
        />
      </div>
    </div>
  );
};

export default PhonePicker;
