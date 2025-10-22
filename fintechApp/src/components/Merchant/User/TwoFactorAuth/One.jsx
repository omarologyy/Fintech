import React from "react";
import Green from "@/images/2Factor.png";
import icon from "@/svgs/icn.svg";
import identity from "@/svgs/identity.svg";
import goog from "@/svgs/goog.svg";
import { BsShieldCheck } from "react-icons/bs";
import { IoShieldOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function One() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/signup/twofactorsteptwo");
  };
  const prevPage = () => {
    navigate("/signup/sms");
  };
  return (
    <>
      <div className="hidden lg:flex flex-row h-screen space-x-20 overflow-hidden">
        {/* LEFT SIDE */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-40 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start self-start">
              Step 3/3 — 2-factor authenticator
            </p>

            <div className="flex flex-col text-sm text-green font-medium text-start space-y-4">
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-green-700">
                <BsShieldCheck />
                <span>Download app</span>
              </div>
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-gray-400">
                <IoShieldOutline />
                <span>Backup Secret key</span>
              </div>
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-gray-400">
                <IoShieldOutline />
                <span>Scan QR code</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between items-start text-start h-full px-4">
          {/* Header link */}
          <div className="w-full flex justify-end pt-4">
            <Link
              to="/"
              className="text-green-400 flex flex-row space-x-2 items-center"
            >
              <span>Skip this process now</span>
              <IoIosArrowRoundForward className="h-5 w-5" />
            </Link>
          </div>

          {/* Centered content */}
          <div className="flex flex-col justify-center items-start flex-1 space-y-4">
            <div className="bg-green-50 bg-opacity-10 backdrop-blur-lg p-6 w-lg h-[350px] flex flex-col space-y-4">
              <div className="flex flex-row space-x-8 items-center justify-between">
                <div className="flex flex-col justify-between items-start h-full">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-2.5">
                      <img src={goog} className="w-5 h-5" alt="Google icon" />
                      <img
                        src={identity}
                        className="w-5 h-5"
                        alt="Identity icon"
                      />
                    </div>
                    <h2 className="text-md text-green-700">Google Identity</h2>
                    <p className="text-sm leading-5">
                      How can we build trust with users across
                      <br />
                      the world through privacy-centric
                      <br />
                      technology?
                    </p>
                  </div>
                </div>

                {/* Image section */}
                <div className="relative bg-gray-200 bg-opacity-10 backdrop-blur-lg rounded-3xl p-3 w-2/5 h-[300px] overflow-hidden">
                  <img
                    src={icon}
                    className="absolute right-0 top-0 w-[450px] h-full object-contain"
                    alt="App icon"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-center justify-start w-3/4 mt-2">
              <button
                type="button"
                onClick={prevPage}
                className="bg-[#2E5C38] cursor-pointer text-white px-20 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                onClick={nextPage}
                type="button"
                className="bg-gray-500 cursor-pointer text-white px-20 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
              >
                <span>Next</span>
              </button>
            </div>
          </div>

          {/* Padding at bottom to balance space */}
          <div className="pb-4" />
        </div>
      </div>
    </>
  );
}

export default One;
