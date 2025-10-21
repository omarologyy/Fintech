import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Faq from "@/images/FB.jpg";

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
    <>
      <div className="bg-gray-300">
        {/* DESKTOP VIEW */}
        <div className="hidden justify-center items-center text-center lg:flex flex-col">
          <div
            className="hidden md:block bg-cover bg-center rounded-3xl p-8 m-4 mx-auto max-w-4xl w-full"
            style={{ backgroundImage: `url(${Faq})` }}
          >
            <h1 className="mt-5 font-bold text-3xl">
              <span>Frequently Asked Questions (FAQs)</span>
            </h1>
            <p className="text-sm text-black mt-4">
              <span>Everything You Need to Know About Pedmonie</span>
            </p>
            <div className="mt-8">
              {faqs.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-row space-x-2 text-start">
                    <button onClick={() => toggleDropdown(index)}>
                      {openIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </button>
                    <h4 className="font-bold text-sm">{item.question}</h4>
                  </div>

                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm text-start">
                      {item.answer}
                    </p>
                  )}

                  <hr className="border-gray-300 my-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* TABLET VIEW */}
        <div
          className="hidden lg:hidden md:block flex-col justify-center items-center bg-cover bg-center rounded-3xl mt-6 mx-auto max-w-2xl w-full relative overflow-hidden"
          style={{
            backgroundImage: `url(${Faq})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-white/70 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 p-8 w-full text-center">
            <h1 className="mt-5 font-bold text-3xl">
              <span>Frequently Asked Questions (FAQs)</span>
            </h1>
            <p className="text-sm text-black mt-4">
              <span>Everything You Need to Know About Pedmonie</span>
            </p>

            <div className="mt-8 text-start">
              {faqs.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-row space-x-2">
                    <button onClick={() => toggleDropdown(index)}>
                      {openIndex === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
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

        {/* MOBILE VIEW */}
        <div className="md:hidden justify-center items-center text-center flex flex-col">
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
    </>
  );
}

export default FAQs;
