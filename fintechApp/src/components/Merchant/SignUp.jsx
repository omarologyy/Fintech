import React, { useState } from "react";
import google from "../../svgs/google.svg";
import dots from "../../svgs/dots.svg";
import overlayPic from "../../svgs/overlayPic.svg";
import ellipse from "../../images/ellipse.png";
import SignUpBg from "../../images/SignUpBg.jpg";
import Logo from "../../svgs/MainLogo.svg";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  // this function toggles password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  // this function toggles confirm Password visibility
  const ConfirmPasswordVisibility = () => {
    setConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-row h-screen space-x-4">
      {/* Left hand side */}
      <div className="relative h-screen w-1/2 flex flex-col justify-center items-center text-center">
        <img
          src={SignUpBg}
          alt="Sign Up Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-sm md:text-base text-white font-medium mb-12">
            <span>Powering businesses with seamless digital</span>
            <br />
            <span>payments</span>
          </p>

          {/* Ellipse and overlayPic */}
          <div className="relative flex items-center justify-center">
            <img src={ellipse} alt="Ellipse" className="w-1/2" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={overlayPic} alt="Overlay" className="w-2/5" />
            </div>
          </div>
        </div>
        {/* Slider dots */}
        <img
          src={dots}
          alt="Slider Dots"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 z-10"
        />
      </div>

      {/* Right hand side */}
      <div className="flex flex-col justify-start items-start p-2 w-[480px]">
        {/* Logo */}
        <img src={Logo} alt="Pedmonie Logo" className="mb-4 self-center" />
        <div className="flex flex-col text-start w-full">
          <h1 className="text-md font-medium mb-2">Create your account</h1>
          <p className="text-sm">for businesses, organizations and companies</p>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4 mt-3 w-full  ">
          {/* Half width form */}
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <LuUserRound className="text-black" />
              <input
                type="text"
                placeholder="Enter your First Name"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <LuUserRound className="text-black" />
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
          </div>
          {/* Full width form */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <LuUserRound className="text-black" />
              <input
                type="text"
                placeholder="Enter your Middle Name (optional)"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <MdOutlineMailOutline className="text-black" />
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <FaPhone className="text-black" />
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <SlCalender className="text-black" />
              <input
                type="text"
                placeholder="Enter your Date of Birth"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
              />
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <div className="flex flex-row justify-between items-start w-full">
                <FaLock className="text-black mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <FaEye className="text-black" />
                  ) : (
                    <FaEyeSlash className="text-black" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center border border-gray-300 rounded-md px-3 py-1 space-x-3 w-full">
              <div className="flex flex-row justify-between items-start w-full">
                <FaLock className="text-black mr-2" />
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={ConfirmPasswordVisibility}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <FaEye className="text-black" />
                  ) : (
                    <FaEyeSlash className="text-black" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <input type="checkbox" className="h-4 w-4" />
              <p className="text-sm ml-2">
                I agree to all
                <span className="text-green-600 font-medium">
                  {" "}
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green-600 font-medium">
                  Privacy Policy
                </span>
              </p>
            </div>
            <div className="flex flex-row space-x-4 items-center justify-center w-full">
              <button className="border-2 border-green-600 text-green-600 px-8 py-2.5 rounded-2xl text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <span>Create Account</span>
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-2.5 rounded-2xl text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <img src={google} alt="Google Logo" className="h-5 w-5" />
                <span>Sign-up with Google</span>
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="text-green-600 font-medium cursor-pointer">
                  Log In
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
