import React, { useState } from "react";
import Logo from "../../svgs/MainLogo.svg";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex flex-col">
      {/* TABLET AND DESKTOP */}
      {visible && (
        <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:bg-[#E5F3E8] p-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
            New
          </button>
          <p className="text-sm">
            With Instant Payment Links, you can generate and share a secure
            payment link with your customers
          </p>
          <button onClick={() => setVisible(false)}>
            <IoClose className="text-gray-700 hover:text-black text-lg" />
          </button>
        </div>
      )}

      <nav className="w-full flex flex-row justify-between items-center px-5 py-3 shadow-sm">
        <img src={Logo} alt="Pedmonie Logo" />
        <GiHamburgerMenu className="text-2xl cursor-pointer" />
      </nav>
    </div>
  );
}

export default Navbar;
