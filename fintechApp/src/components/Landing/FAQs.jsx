import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Pedmonie work?",
      answer:
        "Pedmonie allows businesses to accept payments seamlessly through multiple methods, including cards, bank transfers, USSD, and mobile wallets. Simply sign up, integrate with your platform, or generate a payment link to start receiving payments.",
    },
    {
      question: "Is Pedmonie secure?",
      answer:
        "Payments typically process within 1–3 business days depending on the institution.",
    },
    {
      question: "What types of payments can I accept?",
      answer:
        "It connects students and institutions with trusted payment partners worldwide.",
    },
    {
      question: "How does it take to receive my funds?",
      answer:
        "Simply download the app, sign up, and follow the onboarding steps to begin.",
    },
    {
      question: "Do I need a website to use Pedmonie?",
      answer:
        "Simply download the app, sign up, and follow the onboarding steps to begin.",
    },
    {
      question: "Can I integrate Pedmonie with my website or app?",
      answer:
        "Simply download the app, sign up, and follow the onboarding steps to begin.",
    },
  ];
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-300">
      <div className="justify-center items-center text-center flex flex-col">
        <h1 className="m-5 font-bold text-xl">
          <span>Frequently Asked Questions</span>
          <br />
          <span>(FAQs)</span>
        </h1>
        <p className="text-xs text-black">
          <span>Everything You Need to Know About</span>
          <br />
          <span>Pedmonie</span>
        </p>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 m-4 overflow-y-auto flex flex-col">
          {faqs.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row space-x-2 text-start">
                <button onClick={() => toggleDropdown(index)}>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                <h4 className="font-bold text-sm">{item.question}</h4>
              </div>

              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
              )}

              <hr className="border-gray-300 my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
