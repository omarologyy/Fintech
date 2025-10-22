import React, { useState } from "react";
import Green from "@/images/2Factor.png";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileCopyLine } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { IoShieldOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import qrcode from "@/svgs/QRCode.svg";
function Three() {
  const [formData, setFormData] = useState({
    tel: "",
  });
  const [copied, setCopied] = useState(false);
  const notify = () => toast("Copied to clipboard!");
  const navigate = useNavigate();

  // Check if all required fields are filled
  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextPage = () => {
    navigate("/signup/bank-verification");
  };
  const prevPage = () => {
    navigate("/signup/twofactorsteptwo");
  };

  const handleCopy = async () => {
    if (formData.email.trim() !== "") {
      try {
        await navigator.clipboard.writeText(formData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  return (
    <>
      <div className="hidden lg:flex flex-row h-screen space-x-25 overflow-hidden">
        {/* Left hand side */}
        <div className="relative h-full lg:w-1/2 flex flex-col items-center justify-start text-center space-y-10">
          <img
            src={Green}
            alt="2FA"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col h-full justify-between items-center p-4">
            <p className="text-sm md:text-base text-green-700 font-medium text-start self-start">
              Step 3/3 — 2-factor authenticator
            </p>
            <div className="flex flex-col text-sm text-green font-medium text-start space-y-4">
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-gray-400">
                <IoShieldOutline />
                <span>Download app</span>
              </div>
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-green-700">
                <IoShieldOutline />
                <span>Backup Secret key</span>
              </div>
              <div className="flex flex-row items-center text-sm w-fit space-x-2 text-gray-400">
                <BsShieldCheck />
                <span>Scan QR code</span>
              </div>
            </div>
            <div className="flex flex-row space-x-2">
              <HiOutlineExclamationCircle className="text-green-700 w-6 h-6" />
              <p className="text-sm text-green font-medium text-start">
                <span>We need your Phone Number for security</span>
                <br />
                <span>reasons and also for technical</span>
                <br />
                <span>communications</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right hand side */}
        <div className="flex flex-col justify-center items-start text-start h-full space-y-4 px-4">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-row space-x-8">
              <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-medium text-center">
                  Scan QR Code
                </h1>
                <img src={qrcode} />
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="text-sm">
                  <span>This key will help you protect and</span>
                  <br />
                  <span>recover your account from </span>
                  <br />
                  <span>fraudulent activity</span>
                </p>
                <form className="mt-3 w-full">
                  <div className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-1 w-full">
                    <input
                      name="tel"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jjfh23csag"
                      className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                      required
                    />
                    {/* ✅ Copy Icon */}
                    <RiFileCopyLine
                      className={`text-black cursor-pointer hover:text-green-600 transition ${
                        copied ? "text-green-600" : ""
                      }`}
                      onClick={handleCopy}
                      onChange={notify}
                      title={copied ? "Copied!" : "Copy to clipboard"}
                    />
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-start justify-center w-full mt-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-[#2E5C38] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-20 py-3 rounded-lg text-xs font-medium flex items-center justify-center transition`}
              >
                Previous
              </button>

              <button
                type="button"
                disabled={!isFormComplete}
                onClick={nextPage}
                className={`${
                  isFormComplete
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-20 py-3 rounded-lg text-xs font-medium flex items-center justify-center space-x-1 transition`}
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

export default Three;
