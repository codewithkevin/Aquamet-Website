import React, { useState } from "react";
import { Button } from "@mui/material";

const faqs = [
  {
    question: "Is there a free trial for AquaStall?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "You will receive a tracking number via email once your order has shipped. You can use this tracking number to track your order on our website or the carrier's website.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, we offer free standard shipping on all orders over $50. For orders under $50, there is a flat rate shipping fee of $5.",
  },
  {
    question: "Can other info be added to my stall after setting up?",
    answer:
      "Yes, we offer free standard shipping on all orders over $50. For orders under $50, there is a flat rate shipping fee of $5.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, we offer free standard shipping on all orders over $50. For orders under $50, there is a flat rate shipping fee of $5.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, we offer free standard shipping on all orders over $50. For orders under $50, there is a flat rate shipping fee of $5.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        Frequently asked questions
      </h2>

      <p className="text-center">
        Everything you need to know about Aquamet and our solutions.
      </p>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-6 focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                className={`${
                  activeIndex === index ? "transform rotate-180" : ""
                } w-5 h-5 text-gray-500`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.292 7.292a1 1 0 0 1 1.414 0L10 9.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${activeIndex === index ? "block" : "hidden"} py-2`}
            >
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F9FAFB] w-full h-full mt-10 text-center space-y-5">
        <h1>Still have questions?</h1>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>

        <Button variant="contained" style={{ backgroundColor: "#146A96" }}>
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;
