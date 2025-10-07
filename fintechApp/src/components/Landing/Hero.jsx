import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import flutterwave from "../../svgs/flutterwave.svg";
import opay from "../../svgs/opay.svg";
import trivago from "../../svgs/trivago.svg";
import paystack from "../../svgs/paystack.svg";

function Hero() {
  return (
    <div className="justify-center items-center flex flex-col">
      {/* MAIN HEADING */}
      <div className="mt-6 text-center">
        <h1 className="font-normal text-2xl">
          <span>Effortless</span>
          <br />
          <span>Payments</span>
        </h1>
        <h1 className="text-2xl">
          <span>For your</span>
          <span className="text-green-400"> Business</span>
        </h1>
      </div>
      {/* LITTLE TEXT */}
      <div className="m-4">
        <p className="text-sm text-gray-400">
          Accept all forms of payments seamlessly
        </p>
        <span className="justify-center text-sm text-gray-400 p-6">
          online, in-store, and on-the-go
        </span>
      </div>
      {/* BUTTONS */}
      <div className="flex flex-row space-x-3 items-center m-4">
        <button className="bg-[#2E5C38] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
          Get Started Today
        </button>

        <button className="border-2 border-green-600 text-green-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
          <span>Learn More</span>
          <IoIosArrowRoundForward className="h-5 w-5" />
        </button>
      </div>

      {/* PARTNERS */}
      <div className="text-xs text-black m-4 ">
        <p>We proudly partner with over 1,000+ businesses</p>
      </div>
      <div className="flex flex-row space-x-3">
        <img src={flutterwave} />
        <img src={opay} />
        <img src={paystack} />
        <img src={trivago} />
      </div>
      {/* HERO FOOTER */}
      <div className="flex flex-col bg-[#2E5C38] w-full p-8 m-2">
        <div>
          <div className="flex flex-row space-x-6 text-white justify-between items-center">
            {/* FIRST COLUMN */}
            <div className="flex flex-col justify-start items-start">
              <p className="text-3xl font-bold">100k+</p>
              <p>Payments daily</p>
            </div>
            {/* SECOND COLUMN */}
            <div className="flex flex-col justify-start items-start">
              <p className="text-3xl font-bold">5M</p>
              <p>API calls</p>
            </div>
            {/* THIRD COLUMN */}
            <div className="flex flex-col justify-center items-center ">
              <p className="text-3xl font-bold">6</p>
              <p>Payments Options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
