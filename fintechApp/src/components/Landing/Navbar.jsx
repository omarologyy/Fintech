import React from "react";
import Logo from "../../svgs/MainLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center px-5 py-3 shadow-sm">
      <img src={Logo} alt="Pedmonie Logo" />
      <GiHamburgerMenu className="text-2xl cursor-pointer" />
    </nav>
  );
}

export default Navbar;
