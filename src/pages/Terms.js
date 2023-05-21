import React from "react";

const termsText = [
  "Acceptance of Terms: By using the Aquamet website and services, you agree to be bound by these Terms of Service.",
  "Service Description: Aquamet provides a smart probe for monitoring water quality remotely, a mobile app with assistive farm management tools, and advisory services both online and offline.",
  "Privacy Policy: By using our services, you agree to our Privacy Policy.",
  "Fees and Payment: Aquamet reserves the right to charge fees for its services. Payment is due upon receipt of invoice.",
  "Proprietary Rights: All content on the Aquamet website and mobile app, including text, graphics, logos, and images, is the property of Aquamet and is protected by copyright and other intellectual property laws.",
];

const privacyText = [
  "Information Collection: Aquamet collects information from its users, including personal information such as name, email address, and phone number.",
  "Information Use: Aquamet uses the information collected to provide its services, communicate with its users, and improve its products and services.",
  "Information Sharing: Aquamet does not share personal information with third parties unless required by law or as necessary to provide its services.",
  "Security: Aquamet takes reasonable measures to protect the security of its users' information, but cannot guarantee absolute security.",
  "Access and Correction: Users may access and correct their personal information by contacting Aquamet.",
  "Changes to Privacy Policy: Aquamet reserves the right to modify this Privacy Policy at any time.",
];

const Terms = () => {
  return (
    <section className="w-full h-full space-y-10">
      <div className="flex flex-col justify-center items-center space-y-10 pb-2">
        <h1 className="text-[#292F36] font-serif font-bold text-[36px] leading-[44px] text-center mt-20">
          Terms
        </h1>
        <div className="text-[16px] leading-[24px] md:max-w-2xl sm:mx-5">
          <div className="mb-4">
            <h5>Terms Of Service:</h5>
          </div>
          {termsText.map((text, index) => (
            <p key={index} className="mb-4">
              <span className="font-bold mr-2">{index + 1}.</span>
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10 pb-20">
        <h1 className="text-[#292F36] font-serif font-bold text-[36px] leading-[44px] text-center mt-20">
          Our Privacy Policy
        </h1>
        <div className="text-[16px] leading-[24px]  md:max-w-2xl sm:mx-5">
          <div className="mb-4">
            <h5>Privacy Policy:</h5>
          </div>
          {privacyText.map((text, index) => (
            <p key={index} className="mb-4">
              <span className="font-bold mr-2">{index + 1}.</span>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
