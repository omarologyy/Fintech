import React, { useState } from "react";
import Green from "@/images/2Factor.png";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { IoShieldOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
function BRN() {
  const [formData, setFormData] = useState({
    tel: "",
  });
  const navigate = useNavigate();

  // Check if all required fields are filled
  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextPage = () => {
    navigate("/signup");
  };
  const prevPage = () => {
    navigate("/signup/identity");
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row h-screen space-x-32 overflow-hidden">
        {/* Left hand side */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-60 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start">
              Business Registration Number
            </p>

            <h3 className="font-bold">CAC Number</h3>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col h-full justify-start items-center space-y-15 p-4">
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

          <div className="flex flex-col justify-center items-start text-start h-full space-y-4 px-8">
            <div className="flex flex-col">
              <p className="text-xl font-medium">
                <span>Input your CAC number to help us</span>
                <br />
                <span>verify your company status</span>
              </p>
              <form className="mt-3 w-full">
                <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full">
                  <input
                    name="tel"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-[#2E5C38] cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className="bg-gray-500 cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col h-screen overflow-hidden">
        {/* Left hand side */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-60 p-4">
            <p className="text-lg text-green-700 font-medium text-start">
              Business Registration Number
            </p>

            <h3 className="font-bold text-4xl">CAC Number</h3>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col h-full justify-start items-center space-y-15 p-4">
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

          <div className="flex flex-col justify-center items-start text-center h-full space-y-4 px-8">
            <div className="flex flex-col">
              <p className="text-3xl font-medium">
                <span>Input your CAC number to help us</span>
                <br />
                <span>verify your company status</span>
              </p>
              <form className="mt-3 w-full">
                <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full">
                  <input
                    name="tel"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-[#2E5C38] cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className="bg-gray-500 cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col h-screen overflow-hidden">
        {/* Left hand side */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-40 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start">
              Business Registration Number
            </p>

            <h3 className="font-bold">CAC Number</h3>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col h-full justify-start items-center space-y-15 p-4">
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

          <div className="flex flex-col justify-center items-center text-center h-full space-y-4 px-8">
            <div className="flex flex-col">
              <p className="text-xl font-medium">
                <span>Input your CAC number to help us</span>
                <br />
                <span>verify your company status</span>
              </p>
              <form className="mt-3 w-full">
                <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full">
                  <input
                    name="tel"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                    required
                  />
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-[#2E5C38] cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className="bg-gray-500 cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BRN;
