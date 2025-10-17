import React, { useState } from "react";
import Logo from "../../svgs/MainLogo.svg";
import { IoClose } from "react-icons/io5";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
function Navbar() {
  const [visible, setVisible] = useState(true);
  // const [openPrice, setOpenPrice] = useState(null);
  // const [openLearn, setOpenLearn] = useState(null);
  // const [openSupport, setOpenSupport] = useState(null);

  // const toggleDropdownOne = (index) => {
  //   setOpenPrice(openPrice === index ? null : index);
  // };
  // const toggleDropdownTwo = (index) => {
  //   setOpenLearn(openLearn === index ? null : index);
  // };
  // const toggleDropdownThree = (index) => {
  //   setOpenSupport(openSupport === index ? null : index);
  // };
  return (
    <div className="flex flex-col">
      {/* TABLET AND DESKTOP */}
      {visible && (
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:bg-[#E5F3E8] p-2 space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
            New
          </button>
          <p className="text-sm">
            With <span className="font-bold">Instant Payment Links,</span> you
            can generate and share a secure payment link with your customers
          </p>
          <button onClick={() => setVisible(false)}>
            <IoClose className="text-gray-700 hover:text-black text-lg ml-60" />
          </button>
        </div>
      )}

      <nav className="w-full flex flex-row justify-between items-center px-5 py-3 shadow-sm">
        <img src={Logo} alt="Pedmonie Logo" />
        {/* NavLinks */}
        <div>
          <ul className="hidden lg:flex flex-row space-x-8 text-sm text-gray-600 cursor-pointer">
            <li className="hover:text-green-600">Customers</li>
            <li className="hover:text-green-600">Pricing</li>
            <li className="hover:text-green-600">Learn</li>
            <li className="hover:text-green-600">Developers</li>
            <li className="hover:text-green-600">Support</li>
          </ul>
        </div>
        {/* BUTTONS */}
        <div className="flex flex-row space-x-3 items-center">
          <button className="bg-white border-2 border-green-600 text-green-600 px-4 py-2.5 hover:bg-gray-200 rounded-full text-sm font-medium flex items-center justify-center">
            Login
          </button>
          <button className="bg-[#2E5C38] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
