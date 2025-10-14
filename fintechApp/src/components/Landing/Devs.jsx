import React from "react";
import People from "../../images/People.png";
import video from "../../svgs/video.svg";
import meeting from "../../svgs/meeting.svg";

function Devs() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-row justify-center items-start p-8 space-x-10">
        <div className="relative mt-6">
          <img src={meeting} />
          <img
            src={video}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        {/* Side note */}
        <div className="flex flex-col justify-start items-start p-4 text-start space-y-6">
          <h1 className="font-bold text-2xl">
            <span>Well documented and</span>
            <br />
            <span>ready-to-use APIs for</span>
            <br />
            <span>developers</span>
          </h1>
          <p className="text-gray-400 text-sm">
            <span>We have done the core payment integrations and</span>
            <br />
            <span>abstractions so your team can easily integrate with</span>
            <br />
            <span>our APIs and access multiple payment functionalities</span>
          </p>
          <button className="bg-[#2E5C38] text-white px-6 py-2.5 mt-2 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
            Read the API Documentation
          </button>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden lg:hidden md:flex flex-col justify-center items-center p-8 space-x-10">
        <div className="relative mt-6">
          <img src={meeting} />
          <img
            src={video}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        {/* Side note */}
        <div className=" justify-center items-center p-4 text-center space-y-6">
          <h1 className="font-bold text-2xl">
            Well documented and ready-to-use APIs for developers
          </h1>
          <p className="text-gray-400 text-sm">
            <span>
              We have done the core payment integrations and abstractions so
              your team can easily
            </span>
            <br />
            <span>
              integrate with our APIs and access multiple payment
              functionalities
            </span>
          </p>
          <button className="bg-[#2E5C38] text-white px-6 py-2.5 mt-2 rounded-full text-sm font-medium hover:bg-green-700 items-center justify-center">
            Read the API Documentation
          </button>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center text-center p-4">
        <h1 className="font-bold text-2xl m-4">
          <span>Well documented and ready-</span>
          <br />
          <span>to-use APIs for developers</span>
        </h1>
        <div className="relative">
          <img src={People} />
          <img
            src={video}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        <p className="text-gray-400 text-md m-5">
          <span>We have done the core payment</span>
          <br />
          <span>integrations and abstractions so your</span>
          <br />
          <span>team can easily integrate with our APIs</span>
          <br />
          <span>and access multiple payment</span>
          <br />
          <span>functionalities</span>
        </p>
        <button className="bg-[#2E5C38] text-white px-12 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
          Read the API Documentation
        </button>
      </div>
    </>
  );
}

export default Devs;
