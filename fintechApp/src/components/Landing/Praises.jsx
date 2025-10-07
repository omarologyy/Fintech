import React from "react";
import colon from "../../svgs/colon.svg";
import Man from "../../images/Man.png";

function Praises() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-xl text-center m-6 font-semibold">
        <span>Words of praises from</span>
        <br />
        <span>others about our</span>
        <br />
        <span>presence</span>
      </h1>
      <div className="space-y-4 m-4">
        {/* FIRST */}
        <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
          <img src={colon} alt="Logos" className="h-5 w-auto self-start" />
          <p className="text-sm text-white m-2">
            <span>Pedmonie made it easier to</span>
            <br />
            <span>collect payments from my</span>
            <br />
            <span>customers worldwide!</span>
          </p>
          <div className="flex flex-row pt-10">
            <img src={Man} />
            <div className="flex flex-col text-white m-3">
              <h2 className="text-sm font-bold">Ronald Richards</h2>
              <p className="text-xs">
                <span>Ceo and Co-founder</span>
                <br />
                <span>of XYZ Company</span>
              </p>
            </div>
          </div>
        </div>
        {/* SECOND */}
        <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
          <img src={colon} alt="Logos" className="h-5 w-auto self-start" />
          <p className="text-sm text-white m-2">
            <span>Pedmonie made it easier to</span>
            <br />
            <span>collect payments from my</span>
            <br />
            <span>customers worldwide!</span>
          </p>
          <div className="flex flex-row pt-10">
            <img src={Man} />
            <div className="flex flex-col text-white m-3">
              <h2 className="text-sm font-bold">Ronald Richards</h2>
              <p className="text-xs">
                <span>Ceo and Co-founder</span>
                <br />
                <span>of XYZ Company</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER PRAISES */}
      <div className="flex flex-row space-x-2">
        <button className="border-2 bg-[#2E5C38] border-green-700 rounded-full w-5 h-5"></button>
        <button className="border-2  border-green-700 rounded-full w-5 h-5"></button>
        <button className="border-2 border-green-700 rounded-full w-5 h-5"></button>
      </div>
    </div>
  );
}

export default Praises;
