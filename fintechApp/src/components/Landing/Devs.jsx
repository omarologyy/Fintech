import React from "react";
import People from "../../images/People.png";
import video from "../../svgs/video.svg";

function Devs() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
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
        <img />
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
  );
}

export default Devs;
