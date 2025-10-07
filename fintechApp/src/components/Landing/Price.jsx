import React from "react";
import Background from "../../images/BgG.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
function Price() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-bold  p-6">
          <span>Pricing That Fits Your</span>
          <br />
          <span>Business</span>
        </h1>
        <p>
          <span>Effortless payments, real-time insights,</span>
          <br />
          <span>and unmatched security—all in one</span>
          <br />
          <span> place.</span>
        </p>
        <div className="m-5">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-white dark:text-gray-300">
              Annually
            </span>
          </label>
        </div>
        {/* BUTTON */}
        <button className="m-5 bg-white text-green px-4 py-2 items-center rounded-full text-sm cursor-pointer w-fit">
          <span className="text-black">Save 15% with annual billing</span>
        </button>
        {/* CARDS */}
        <div className="space-y-4 m-4">
          {/* FIRST CARD*/}
          <div className="bg-yellow-300 rounded-3xl w-72 h-72 flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl w-full h-full mt-5 text-black text-center">
              <h1 className="m-2">Tier One</h1>
              <h1 className="m-2">Free</h1>
              <p className="text-gray-400 text-sm">pay per transaction</p>
              <hr className="border-green-800 my-4" />
              <p className="p-2 text-center text-md">
                Best for Small Businesses
              </p>
              <hr className="border-green-800 my-4" />
              <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <IoIosArrowRoundForward className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* SECOND CARD */}
          <div className="bg-green-300 rounded-3xl w-72 h-72 flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl w-full h-full mt-5 text-black text-center">
              <h1 className="m-2">Tier One</h1>
              <h1 className="m-2">Free</h1>
              <p className="text-gray-400 text-sm">pay per transaction</p>
              <hr className="border-green-800 my-4" />
              <p className="p-2 text-center text-md">
                Best for Small Businesses
              </p>
              <hr className="border-green-800 my-4" />
              <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <IoIosArrowRoundForward className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* THIRD CARD*/}
          <div className="bg-blue-300 rounded-3xl w-72 h-72 flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl w-full h-full mt-5 text-black text-center">
              <h1 className="m-2">Tier One</h1>
              <h1 className="m-2">Free</h1>
              <p className="text-gray-400 text-sm">pay per transaction</p>
              <hr className="border-green-800 my-4" />
              <p className="p-2 text-center text-md">
                Best for Small Businesses
              </p>
              <hr className="border-green-800 my-4" />
              <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <IoIosArrowRoundForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;

{
  /* <p className="text-sm text-white m-2">
              <span>Pedmonie made it easier to</span>
              <br />
              <span>collect payments from my</span>
              <br />
              <span>customers worldwide!</span>
            </p>
            <div className="flex flex-row pt-10">
              <div className="flex flex-col text-white m-3">
                <h2 className="text-sm font-bold">Ronald Richards</h2>
                <p className="text-xs">
                  <span>Ceo and Co-founder</span>
                  <br />
                  <span>of XYZ Company</span>
                </p>
              </div>
            </div> */
}
