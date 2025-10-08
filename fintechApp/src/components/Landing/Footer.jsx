import React from "react";
import Logo from "../../svgs/MainLogo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex flex-col m-2">
      {/* Top line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      {/*Wrapper */}
      <div className="text-start m-4 space-y-8">
        {/* Sections */}
        <div className="space-y-6">
          {/* COMPANY */}
          <div className="space-y-1">
            <h1 className="font-bold mb-3 text-[#2E5C38]">Company</h1>
            <p className="text-gray-400 text-sm">Blog</p>
            <p className="text-gray-400 text-sm">Career</p>
            <p className="text-gray-400 text-sm">Pricing</p>
          </div>

          {/* RESOURCES */}
          <div className="space-y-1">
            <h1 className="font-bold mb-3 text-[#2E5C38]">Resources</h1>
            <p className="text-gray-400 text-sm">Documentations</p>
            <p className="text-gray-400 text-sm">Papers</p>
            <p className="text-gray-400 text-sm">Press Conferences</p>
          </div>

          {/* LEGAL */}
          <div className="space-y-1">
            <h1 className="font-bold mb-3 text-[#2E5C38]">Legal</h1>
            <p className="text-gray-400 text-sm">Terms of Service</p>
            <p className="text-gray-400 text-sm">Privacy Policy</p>
            <p className="text-gray-400 text-sm">Cookie Policy</p>
            <p className="text-gray-400 text-sm">Data Processing</p>
          </div>
          {/* Bottom line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <img src={Logo} alt="Pedmonie logo" />
          {/* CONTACT */}
          <div className="text-sm space-y-4">
            <p>hello@pedmonie.com</p>
          </div>
          <div className="justify-between flex text-sm">
            <p>(+234) 856 600 9000</p>
            {/* SOCIALS */}
            <div className="flex space-x-4">
              <a href="#">
                {" "}
                <FaXTwitter />
              </a>
              <a href="#">
                {" "}
                <FaFacebook />
              </a>
              <a href="#">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
