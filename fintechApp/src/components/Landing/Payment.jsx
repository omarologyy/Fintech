import React from "react";
import Background from "@/images/BgG.jpg";
import Backing from "@/images/trialTwo.jpg";
import Vector from "@/svgs/Vector.svg";
import { MdArrowOutward } from "react-icons/md";

function Payment() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div
        className="hidden min-h-screen bg-cover bg-center lg:flex flex-col items-center justify-center text-white px-6"
        style={{ backgroundImage: `url(${Backing})` }}
      >
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
          Seamless Payments in Just a Few Steps
        </h1>

        {/* Steps */}
        <div className="hidden md:flex items-start justify-between w-full max-w-5xl">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                1
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-52 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">Sign Up</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Create an account</span>
              <br />
              <span>and customize your</span>
              <br />
              <span>payment preferences.</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                2
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-52 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">
              <span>Generate</span>
              <br />
              <span>Payment Links</span>
            </h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Easily create and share</span>
              <br />
              <span>secure payment links</span>
              <br />
              <span>with customers.</span>
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                3
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-52 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">Accept Payments</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Customers can pay via</span>
              <br />
              <span>card, bank transfer,</span>
              <br />
              <span>USSD, or mobile wallets.</span>
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
              4
            </div>
            <h3 className="font-semibold text-base mt-6">
              <span>Track & Manage</span>
              <br />
              <span>Transactions</span>
            </h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Get real-time updates</span>
              <br />
              <span>and insights on your</span>
              <br />
              <span>payments.</span>
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-14 bg-white text-green-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1 shadow-md">
          <span>Create a Free Account</span>
          <MdArrowOutward className="h-5 w-5" />
        </button>
      </div>

      {/* TABLET VIEW */}
      <div
        className="hidden md:flex lg:hidden min-h-fit bg-cover bg-center flex-col items-center justify-center text-white p-4"
        style={{ backgroundImage: `url(${Backing})` }}
      >
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
          Seamless Payments in Just a Few Steps
        </h1>

        {/* Steps */}
        <div className="hidden md:flex items-start justify-between w-full max-w-2xl">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                1
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-30 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">Sign Up</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Create an account</span>
              <br />
              <span>and customize your</span>
              <br />
              <span>payment preferences.</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                2
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-30 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">
              <span>Generate</span>
              <br />
              <span>Payment Links</span>
            </h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Easily create and share</span>
              <br />
              <span>secure payment links</span>
              <br />
              <span>with customers.</span>
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center relative">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
                3
              </div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-30 h-[4px] bg-white opacity-40"></div>
            </div>
            <h3 className="font-semibold text-base mt-6">Accept Payments</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Customers can pay via</span>
              <br />
              <span>card, bank transfer,</span>
              <br />
              <span>USSD, or mobile wallets.</span>
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-lg font-semibold">
              4
            </div>
            <h3 className="font-semibold text-base mt-6">
              <span>Track & Manage</span>
              <br />
              <span>Transactions</span>
            </h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-200">
              <span>Get real-time updates</span>
              <br />
              <span>and insights on your</span>
              <br />
              <span>payments.</span>
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-14 bg-white text-green-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1 shadow-md">
          <span>Create a Free Account</span>
          <MdArrowOutward className="h-5 w-5" />
        </button>
      </div>

      {/* MOBILE VIEW */}
      <div
        className="md:hidden min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="justify-center items-center flex flex-col p-5">
          <h2 className="font-semibold text-lg text-center m-6 text-white">
            <span>Seamless Payments in</span>
            <br />
            <span>Just a Few Steps</span>
          </h2>
          {/* FIRST */}
          <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 mt-4">
            <h2 className="text-xl font-normal">1</h2>
          </div>
          <div className="text-white justify-start items-start text-center">
            <h2 className="text-lg m-4">Sign up</h2>
            <p className="text-xs">
              Create an account and customize
              <br />
              <span>your payment preferences.</span>
            </p>
          </div>
          {/* SECOND */}
          <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 mt-4">
            <h2 className="text-xl font-normal">2</h2>
          </div>
          <div className="text-white text-center items-center">
            <h2 className="text-lg m-4">Generate Payment Links</h2>
            <p className="text-xs">
              Easily create and share secure payment
              <br />
              <span>links with customers.</span>
            </p>
          </div>
          {/* THIRD */}
          <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 mt-4">
            <h2 className="text-xl font-normal">3</h2>
          </div>
          <div className="text-white text-center items-center">
            <h2 className="text-lg m-4">Accept Payments</h2>
            <p className="text-xs">
              Customers can pay via card, bank
              <br />
              <span>transfer, USSD, or mobile wallets.</span>
            </p>
          </div>
          {/* FOURTH */}
          <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 mt-4">
            <h2 className="text-xl font-normal">4</h2>
          </div>
          <div className="text-white text-center items-center">
            <h2 className="text-lg m-4">
              <span>Track & Manage</span>
              <br />
              <span>Transactions</span>
            </h2>
            <p className="text-xs">
              Create an account and customize
              <br />
              <span>your payment preferences.</span>
            </p>
          </div>
          {/* BUTTON */}
          <button className="mt-10 bg-white text-green px-4 py-2 items-center rounded-full text-sm cursor-pointer w-fit">
            <span className="text-black">Create a Free Account</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Payment;

{
  /* TABLET VIEW */
}
