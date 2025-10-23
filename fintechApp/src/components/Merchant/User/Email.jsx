import React, { useState } from "react";
import Green from "@/images/2Factor.png";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Email() {
  const [formData, setFormData] = useState({
    email: "",
  });

  // Check if all required fields are filled
  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (isFormComplete) {
      navigate("/signup/sms");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row h-screen space-x-32">
        {/* Left hand side */}
        <div className="relative h-screen lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-between items-center p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-center self-center">
              Step 1/3 Email Verification
            </p>
            <p className="text-3xl text-green font-medium text-start">
              <span>Please confirm the</span>
              <br />
              <span>validity of your</span>
              <br />
              <span>email address</span>
            </p>
            <div className="flex flex-row space-x-2">
              <HiOutlineExclamationCircle className="text-green-700 w-6 h-6" />
              <p className="text-sm text-green font-medium text-start ">
                <span>We need your email for security</span>
                <br />
                <span>reasons and also for technical</span>
                <br />
                <span>communications</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right hand side */}
        <div className="flex flex-col justify-center items-start text-start h-screen space-y-4 px-8">
          <h1 className="text-2xl font-medium text-start">
            <span>Check your email for a</span>
            <br />
            <span>verification link</span>
          </h1>
          <form className="mt-3">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full space-x-2">
              <MdOutlineMailOutline className="text-black " />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
            </div>
          </form>
          <p>
            <span>Didn’t receive the email? Please check your</span>
            <br />
            <span>spam folder or try to reset the email</span>
          </p>
          {/* Buttons */}
          <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
            <button
              type="button" // ✅ change from submit
              disabled={!isFormComplete}
              onClick={() => {
                if (isFormComplete);
              }}
              className={`${
                isFormComplete
                  ? "bg-[#2E5C38] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition`}
            >
              Resend Email
            </button>

            <button
              type="button"
              disabled={!isFormComplete}
              onClick={handleNext}
              className={`${
                isFormComplete
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col h-screen">
        {/* Left hand side */}
        <div className="relative h-screen w-full flex flex-col justify-center items-center text-center">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-between items-center p-4">
            <p className="text-xl text-green-700 font-medium text-center self-center">
              Step 1/3 Email Verification
            </p>
            <p className="text-3xl text-green font-medium text-start">
              <span>Please confirm the</span>
              <br />
              <span>validity of your</span>
              <br />
              <span>email address</span>
            </p>
            <div className="flex flex-row space-x-2">
              <HiOutlineExclamationCircle className="text-green-700 w-8 h-8" />
              <p className="text-lg text-green font-medium text-start ">
                <span>We need your email for security</span>
                <br />
                <span>reasons and also for technical</span>
                <br />
                <span>communications</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right hand side */}
        <div className="flex flex-col justify-center items-center text-center h-screen space-y-4 px-8">
          <h1 className="text-4xl font-medium text-center">
            <span>Check your email for a</span>
            <br />
            <span>verification link</span>
          </h1>
          <form className="mt-3">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full space-x-2">
              <MdOutlineMailOutline className="text-black " />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
            </div>
          </form>
          <p>
            <span>Didn’t receive the email? Please check your</span>
            <br />
            <span>spam folder or try to reset the email</span>
          </p>
          {/* Buttons */}
          <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
            <button
              type="button" // ✅ change from submit
              disabled={!isFormComplete}
              onClick={() => {
                if (isFormComplete);
              }}
              className={`${
                isFormComplete
                  ? "bg-[#2E5C38] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition`}
            >
              Resend Email
            </button>

            <button
              type="button"
              disabled={!isFormComplete}
              onClick={handleNext}
              className={`${
                isFormComplete
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Left hand side */}
        <div className="relative h-screen w-full flex flex-col justify-center items-center text-center">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-between items-center p-4">
            <p className="text-xl text-green-700 font-medium text-center self-center">
              Step 1/3 Email Verification
            </p>
            <p className="text-xl text-green font-medium text-start">
              <span>Please confirm the</span>
              <br />
              <span>validity of your</span>
              <br />
              <span>email address</span>
            </p>
            <div className="flex flex-row space-x-2">
              <HiOutlineExclamationCircle className="text-green-700 w-5 h-5" />
              <p className="text-lg text-green font-medium text-start ">
                <span>We need your email for security</span>
                <br />
                <span>reasons and also for technical</span>
                <br />
                <span>communications</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right hand side */}
        <div className="flex flex-col justify-center items-center text-center h-screen space-y-4 px-8">
          <h1 className="text-xl font-medium text-center">
            <span>Check your email for a</span>
            <br />
            <span>verification link</span>
          </h1>
          <form className="mt-3">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full space-x-2">
              <MdOutlineMailOutline className="text-black " />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
            </div>
          </form>
          <p>
            <span>Didn’t receive the email? Please check your</span>
            <br />
            <span>spam folder or try to reset the email</span>
          </p>
          {/* Buttons */}
          <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
            <button
              type="button" // ✅ change from submit
              disabled={!isFormComplete}
              onClick={() => {
                if (isFormComplete);
              }}
              className={`${
                isFormComplete
                  ? "bg-[#2E5C38] cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition`}
            >
              Resend Email
            </button>

            <button
              type="button"
              disabled={!isFormComplete}
              onClick={handleNext}
              className={`${
                isFormComplete
                  ? "bg-gray-500 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
