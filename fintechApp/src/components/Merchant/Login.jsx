import React, { useState } from "react";
import google from "@/svgs/google.svg";
import dots from "@/svgs/dots.svg";
import overlayPic from "@/svgs/overlayPic.svg";
import ellipse from "@/images/ellipse.png";
import SignUpBg from "@/images/SignUpBg.jpg";
import Logo from "@/svgs/MainLogo.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all required fields are filled
  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  const navigate = useNavigate();

  const handleClick = () => {
    if (isFormComplete) {
      navigate("/signup");
    }
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row h-screen space-x-4">
        {/* Left hand side */}
        <div className="relative h-screen lg:w-1/2 flex flex-col justify-center items-center text-center">
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
            <div className="relative flex items-center justify-center">
              <img src={ellipse} alt="Ellipse" className="w-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={overlayPic} alt="Overlay" className="w-2/5" />
              </div>
            </div>
          </div>
          <img
            src={dots}
            alt="Slider Dots"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 z-10"
          />
        </div>

        {/* Right hand side */}
        <div className="flex flex-col justify-start items-start p-2 w-[480px]">
          <img src={Logo} alt="Pedmonie Logo" className="mb-4 self-center" />
          <div className="flex flex-col text-start w-full">
            <h1 className="text-md font-medium mb-2">Login</h1>
            <p className="text-sm">
              for businesses, organizations and companies
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col space-y-4 mt-3 w-full">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <MdOutlineMailOutline className="text-black mr-2" />
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
            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <FaLock className="text-black mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <FaEye className="text-black" />
                ) : (
                  <FaEyeSlash className="text-black" />
                )}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-row space-x-4 items-center justify-center w-full mt-2">
              <button
                type="button"
                onClick={handleClick}
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-green-700 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition`}
              >
                Create Account
              </button>

              <button
                type="button"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
              >
                <img src={google} alt="Google Logo" className="h-5 w-5" />
                <span>Sign-up with Google</span>
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-600 font-medium cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col h-screen">
        {/* Left hand side */}
        <div className="relative h-screen w-full flex flex-col justify-center items-center text-center">
          <img
            src={SignUpBg}
            alt="Sign Up Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-lg text-white font-medium mb-15">
              <span>Powering businesses with seamless digital</span>
              <br />
              <span>payments</span>
            </p>
            <div className="relative flex items-center justify-center">
              <img src={ellipse} alt="Ellipse" className="w-4/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={overlayPic} alt="Overlay" className="w-2/3" />
              </div>
            </div>
          </div>
          <img
            src={dots}
            alt="Slider Dots"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 z-10 mt-8"
          />
        </div>

        {/* Right hand side */}
        <div className="flex flex-col justify-start items-start p-3 w-full">
          <img src={Logo} alt="Pedmonie Logo" className="mb-4 self-center" />
          <div className="flex flex-col text-start w-full">
            <h1 className="text-md font-medium mb-2">Login</h1>
            <p className="text-sm">
              for businesses, organizations and companies
            </p>
          </div>

          <form className="flex flex-col space-y-4 mt-3 w-full">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <MdOutlineMailOutline className="text-black mr-2" />
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

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <FaLock className="text-black mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <FaEye className="text-black" />
                ) : (
                  <FaEyeSlash className="text-black" />
                )}
              </button>
            </div>

            <div className="flex flex-row space-x-4 items-center justify-center w-full mt-2">
              <button
                type="submit"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-green-700 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition`}
              >
                Create Account
              </button>

              <button
                type="button"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
              >
                <img src={google} alt="Google Logo" className="h-5 w-5" />
                <span>Sign-up with Google</span>
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="text-green-600 font-medium cursor-pointer">
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Left hand side */}
        <div className="relative h-screen w-full flex flex-col justify-center items-center text-center">
          <img
            src={SignUpBg}
            alt="Sign Up Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-sm md:text-base text-white font-medium mb-6">
              <span>Powering businesses with seamless digital</span>
              <br />
              <span>payments</span>
            </p>
            <div className="relative flex items-center justify-center">
              <img src={ellipse} alt="Ellipse" className="w-1/3" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={overlayPic} alt="Overlay" className="w-1/4" />
              </div>
            </div>
          </div>
          <img
            src={dots}
            alt="Slider Dots"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 z-10 mt-8"
          />
        </div>

        {/* Right hand side */}
        <div className="flex flex-col justify-start items-start p-3 w-full">
          <img src={Logo} alt="Pedmonie Logo" className="mb-4 self-center" />
          <div className="flex flex-col text-start w-full">
            <h1 className="text-md font-medium mb-2">Login</h1>
            <p className="text-sm">
              for businesses, organizations and companies
            </p>
          </div>

          <form className="flex flex-col space-y-4 mt-3 w-full">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <MdOutlineMailOutline className="text-black mr-2" />
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
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-full">
              <FaLock className="text-black mr-2" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full text-sm outline-none border-none focus:ring-0 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <FaEye className="text-black" />
                ) : (
                  <FaEyeSlash className="text-black" />
                )}
              </button>
            </div>

            <div className="flex flex-row space-x-4 items-center justify-center w-full mt-2">
              <button
                type="submit"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-green-700 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition`}
              >
                Create Account
              </button>

              <button
                type="button"
                disabled={!isFormComplete}
                className={`${
                  isFormComplete
                    ? "bg-gray-500 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 transition`}
              >
                <img src={google} alt="Google Logo" className="h-5 w-5" />
                <span>Sign-up with Google</span>
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <span className="text-green-600 font-medium cursor-pointer">
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
