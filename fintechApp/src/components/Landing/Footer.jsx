import React from "react";
import Logo from "@/svgs/MainLogo.svg";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      {/* DESKTOP */}
      <div className="md:hidden lg:flex flex-col">
        <div className="flex flex-row justify-between items-start p-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-8 p-4">
            <img src={Logo} alt="Pedmonie logo" className="h-14 w-auto" />
            {/* Contact */}
            <div className="text-sm space-y-2">
              <p>hello@pedmonie.com</p>
              <p>(+234) 856 600 9000</p>
            </div>
          </div>

          {/* Right Section*/}
          <div className="space-x-12 flex flex-row flex-1 justify-end p-4">
            {/* Company */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Company</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Blog</p>
                <p>Career</p>
                <p>Pricing</p>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Resources</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Documentations</p>
                <p>Papers</p>
                <p>Press Conferences</p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Legal</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Data Processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Footer */}
        <div className="text-start justify-between items-center flex flex-row space-x-8 p-4">
          <p className="text-gray-400">© 2025 Pedmonie Inc.</p>
          {/* SOCIALS */}
          <div className="flex space-x-4">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      {/* TABLET */}
      <div className="hidden lg:hidden md:flex flex-col">
        <div className="flex flex-row justify-between items-start p-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-8 p-4">
            <img src={Logo} alt="Pedmonie logo" className="h-14 w-auto" />
            {/* Contact */}
            <div className="text-sm space-y-2">
              <p>hello@pedmonie.com</p>
              <p>(+234) 856 600 9000</p>
            </div>
          </div>

          {/* Right Section*/}
          <div className="space-x-12 flex flex-row flex-1 justify-end p-4">
            {/* Company */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Company</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Blog</p>
                <p>Career</p>
                <p>Pricing</p>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Resources</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Documentations</p>
                <p>Papers</p>
                <p>Press Conferences</p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Legal</h1>
              <div className="text-gray-400 text-sm cursor-pointer space-y-1">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Data Processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Footer */}
        <div className="text-start justify-between items-center flex flex-row space-x-8 p-4">
          <p className="text-gray-400">© 2025 Pedmonie Inc.</p>
          {/* SOCIALS */}
          <div className="flex space-x-4">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="md:hidden flex flex-col m-2">
        {/* Top line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Wrapper */}
        <div className="text-start m-4 space-y-8">
          {/* Sections */}
          <div className="space-y-6">
            {/* Company */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Company</h1>
              <p className="text-gray-400 text-sm">Blog</p>
              <p className="text-gray-400 text-sm">Career</p>
              <p className="text-gray-400 text-sm">Pricing</p>
            </div>

            {/* Resources */}
            <div className="space-y-1">
              <h1 className="font-bold mb-3 text-[#2E5C38]">Resources</h1>
              <p className="text-gray-400 text-sm">Documentations</p>
              <p className="text-gray-400 text-sm">Papers</p>
              <p className="text-gray-400 text-sm">Press Conferences</p>
            </div>

            {/* Legal */}
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
            {/* Contact */}
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
    </>
  );
}

export default Footer;
