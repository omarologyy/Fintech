import React, { useState } from "react";
import Green from "@/images/2Factor.png";
import Image from "@/svgs/placeholderImage.svg";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { IoShieldOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
function BVN() {
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
    navigate("/signup/business-registration-number");
  };
  const prevPage = () => {
    navigate("/signup/bank-verification");
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row h-screen space-x-8 overflow-hidden">
        {/* Left hand side */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-30 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start">
              Identity Verification
            </p>
            <div className="space-y-12">
              <article className="text-start">
                <div className="mt-2 space-y-2">
                  <h2 className="font-bold">The document must confirm</h2>
                  <div className="space-y-2 ">
                    <p className="flex space-x-4">
                      <span>FullName</span>
                      <span>Danny Jones</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Date of birth</span>
                      <span>18-08-2000</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Made a mistake?</span>
                      <span>Edit details</span>
                    </p>
                  </div>
                </div>
              </article>
              <article className="text-start">
                <h2 className="font-bold">Image requirements</h2>
                <div className="mt-2 space-y-2">
                  <p>File size should not above 10mb</p>
                  <p>Colorful, Clear and readable file</p>
                  <p>JPEG,JPG or PNG format</p>
                </div>
              </article>
            </div>
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
              <p className="text-xl font-medium">Verify your Identity</p>

              <form className="mt-6 w-full">
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col">
                    <label className="text-sm">Select document type</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full mt-2">
                      <input
                        name="tel"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Government issued country</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full mt-2">
                      <input
                        name="tel"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-green-300 h-60 w-full mt-4 rounded-lg justify-center items-center flex">
                  <div className="justify-center items-center flex flex-col ">
                    <img src={Image} />
                    <p>Drag file here to upload or choose file</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-gray-500 cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className=" bg-[#2E5C38] cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
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
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-30 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start">
              Identity Verification
            </p>
            <div className="space-y-12">
              <article className="text-start">
                <div className="mt-2 space-y-2">
                  <h2 className="font-bold">The document must confirm</h2>
                  <div className="space-y-2 ">
                    <p className="flex space-x-4">
                      <span>FullName</span>
                      <span>Danny Jones</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Date of birth</span>
                      <span>18-08-2000</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Made a mistake?</span>
                      <span>Edit details</span>
                    </p>
                  </div>
                </div>
              </article>
              <article className="text-start">
                <h2 className="font-bold">Image requirements</h2>
                <div className="mt-2 space-y-2">
                  <p>File size should not above 10mb</p>
                  <p>Colorful, Clear and readable file</p>
                  <p>JPEG,JPG or PNG format</p>
                </div>
              </article>
            </div>
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
              <p className="text-xl font-medium">Verify your Identity</p>

              <form className="mt-6 w-full">
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col">
                    <label className="text-sm">Select document type</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full mt-2">
                      <input
                        name="tel"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Government issued country</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full mt-2">
                      <input
                        name="tel"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-green-300 h-60 w-full mt-4 rounded-lg justify-center items-center flex">
                  <div className="justify-center items-center flex flex-col ">
                    <img src={Image} />
                    <p>Drag file here to upload or choose file</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-gray-500 cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className=" bg-[#2E5C38] cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
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
        <div className="relative h-full lg:w-2/5 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-start items-center space-y-5 p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start">
              Identity Verification
            </p>
            <div className="space-y-12">
              <article className="text-start">
                <div className="mt-2 space-y-2">
                  <h2 className="font-bold">The document must confirm</h2>
                  <div className="space-y-2 ">
                    <p className="flex space-x-4">
                      <span>FullName</span>
                      <span>Danny Jones</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Date of birth</span>
                      <span>18-08-2000</span>
                    </p>
                    <p className="flex space-x-4">
                      <span>Made a mistake?</span>
                      <span>Edit details</span>
                    </p>
                  </div>
                </div>
              </article>
              <article className="text-start">
                <h2 className="font-bold">Image requirements</h2>
                <div className="mt-2 space-y-2">
                  <p>File size should not above 10mb</p>
                  <p>Colorful, Clear and readable file</p>
                  <p>JPEG,JPG or PNG format</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col h-full justify-start items-center space-y-4 p-4">
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
              <p className="text-md font-medium">Verify your Identity</p>

              <form className="mt-6 w-full">
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col">
                    <label className="text-[10px]">Select document type</label>
                    <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full ">
                      <input
                        name="tel"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px]">
                      Government issued country
                    </label>
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
                  </div>
                </div>
                <div className="bg-green-300 h-35 w-full mt-4 rounded-lg justify-center items-center flex">
                  <div className="justify-center items-center flex flex-col ">
                    <img src={Image} />
                    <p className="text-sm">
                      Drag file here to upload or choose file
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-1">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className="bg-gray-500 cursor-pointer text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextPage}
                className=" bg-[#2E5C38] cursor-pointer text-white px-12 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition"
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

export default BVN;
