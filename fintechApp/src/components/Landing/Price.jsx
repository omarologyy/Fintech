import React from "react";
import Background from "../../images/BgG.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
function Price() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col justify-center items-center text-center bg-black">
        <div className="flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="font-medium text-4xl p-6">
            Pricing That Fits Your Business
          </h1>
          <p>
            <span>
              Effortless payments, real-time insights, and unmatched
              security—all{" "}
            </span>
            <br />
            <span>in one place.</span>
          </p>
          <div className="flex flex-row space-x-4">
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
          </div>
          {/* CARDS */}
          <div className="space-y-4 mt-4">
            {/* FIRST CARD*/}
            <div className="bg-yellow-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-4xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-5">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier One</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">Free</h1>
                      <p className="text-gray-400 text-sm mt-4 ml-2">
                        pay per transaction
                      </p>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Small Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>
                        Accept payments via cards, bank transfers, and USSD
                      </li>
                      <li>Secure transactions with fraud protection</li>
                      <li>Access to real-time transaction reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND CARD */}
            <div className="bg-blue-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-4xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-5">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier Two</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">₦50,000</h1>
                      <p className="text-gray-400 text-sm mt-4 ml-2">
                        per month
                      </p>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Growing Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>Everything in Basic, plus:</li>
                      <li>Lower transaction fees for higher volumes</li>
                      <li>Automated payouts for faster access to funds</li>
                      <li> Customizable payment pages</li>
                      <li> Priority customer support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* THIRD CARD*/}
            <div className="bg-green-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-4xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-5">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier Three</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">Custom</h1>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Large-Scale Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>Everything in Pro, plus:</li>
                      <li>Dedicated account manager</li>
                      <li>Advanced API access for custom integrations</li>
                      <li>Multi-currency support for global payments</li>
                      <li>Tailored pricing based on business needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden flex-col justify-center items-center text-center bg-black">
        <div className="flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="font-medium text-4xl p-6">
            Pricing That Fits Your Business
          </h1>
          <p>
            <span>
              Effortless payments, real-time insights, and unmatched
              security—all{" "}
            </span>
            <br />
            <span>in one place.</span>
          </p>
          <div className="flex flex-row space-x-4">
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
          </div>
          {/* CARDS */}
          <div className="space-y-4 mt-4">
            {/* FIRST CARD*/}
            <div className="bg-yellow-300 rounded-3xl items-center flex justify-center w-fit">
              <div className="bg-white rounded-2xl w-3xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-3">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier One</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">Free</h1>
                      <p className="text-gray-400 text-sm mt-4 ml-2">
                        pay per transaction
                      </p>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Small Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>
                        Accept payments via cards, bank transfers, and USSD
                      </li>
                      <li>Secure transactions with fraud protection</li>
                      <li>Access to real-time transaction reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* SECOND CARD */}
            <div className="bg-blue-300 rounded-3xl items-center flex justify-center w-fit">
              <div className="bg-white rounded-2xl w-3xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-5">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier Two</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">₦50,000</h1>
                      <p className="text-gray-400 text-sm mt-4 ml-2">
                        per month
                      </p>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Growing Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>Everything in Basic, plus:</li>
                      <li>Lower transaction fees for higher volumes</li>
                      <li>Automated payouts for faster access to funds</li>
                      <li> Customizable payment pages</li>
                      <li> Priority customer support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* THIRD CARD*/}
            <div className="bg-green-300 rounded-3xl items-center flex justify-center w-fit">
              <div className="bg-white rounded-2xl w-3xl mt-5 p-2 text-black flex flex-col">
                <div className="flex flex-row justify-between items-start p-5">
                  <div className="flex flex-col text-start">
                    <h1 className="mt-2 text-2xl">Tier Three</h1>
                    <div className="flex flex-row items-baseline space-x-4">
                      <h1 className="mt-6 text-2xl font-medium">Custom</h1>
                    </div>
                    <hr className="border-green-800 my-4 w-80 " />
                    <p className="text-start text-md">
                      Best for Large-Scale Businesses
                    </p>
                    <button className="items-start justify-start border-2 border-black text-black px-4 py-2.5 mt-4 rounded-full text-sm font-medium hover:bg-gray-100 flex space-x-1 w-fit">
                      <span>Get Started</span>
                      <IoIosArrowRoundForward className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-start font-bold cursor-pointer text-lg mt-2">
                      What's Included
                    </p>
                    <ul className="list-disc list-inside text-sm text-start mt-4">
                      <li>Everything in Pro, plus:</li>
                      <li>Dedicated account manager</li>
                      <li>Advanced API access for custom integrations</li>
                      <li>Multi-currency support for global payments</li>
                      <li>Tailored pricing based on business needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className="md:hidden min-h-screen bg-cover bg-center"
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
            <div className="bg-yellow-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-full max-w-xs mt-5 p-2 text-black text-center flex flex-col">
                <h1 className="m-2">Tier One</h1>
                <h1 className="m-2">Free</h1>
                <p className="text-gray-400 text-sm">pay per transaction</p>
                <hr className="border-green-800 my-4" />
                <p className="p-2 text-center text-md">
                  Best for Small Businesses
                </p>
                <hr className="border-green-800 my-4" />
                <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1 w-fit mx-auto">
                  <span>Get Started</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
                <p className="underline cursor-pointer text-gray-400 text-sm m-2">
                  What's Included
                </p>
              </div>
            </div>
            {/* SECOND CARD */}
            <div className="bg-green-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-full max-w-xs mt-5 p-2 text-black text-center flex flex-col">
                <h1 className="m-2">Tier Two</h1>
                <h1 className="m-2">₦50,000</h1>
                <p className="text-gray-400 text-sm">per month</p>
                <hr className="border-green-800 my-4" />
                <p className="p-2 text-center text-md">
                  Best for growing Businesses
                </p>
                <hr className="border-green-800 my-4" />
                <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1 w-fit mx-auto">
                  <span>Get Started</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
                <p className="underline text-gray-400 cursor-pointer text-sm m-2">
                  What's Included
                </p>
              </div>
            </div>
            {/* THIRD CARD*/}
            <div className="bg-blue-300 rounded-3xl items-center flex justify-center">
              <div className="bg-white rounded-2xl w-full max-w-xs mt-5 p-2 text-black text-center flex flex-col">
                <h1 className="m-2">Tier Three</h1>
                <h1 className="m-2">Custom</h1>
                <hr className="border-green-800 my-4" />
                <p className="p-2 text-center text-md">
                  Best for Large-Scale Businesses
                </p>
                <hr className="border-green-800 my-4" />
                <button className="border-2 border-green-700 text-green-600 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1 w-fit mx-auto">
                  <span>Get Started</span>
                  <IoIosArrowRoundForward className="h-5 w-5" />
                </button>
                <p className="underline cursor-pointer text-gray-400 text-sm m-2">
                  What's Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
