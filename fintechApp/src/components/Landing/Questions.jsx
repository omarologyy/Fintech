import React from "react";
import Background from "../../images/BgG.jpg";
import Woman from "../../images/Woman.png";
function Questions() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="justify-center items-center flex flex-col text-center text-white p-4">
        <h1 className="text-lg font-bold m-6">Still have Questions?</h1>
        <p className="text-sm">
          <span>Cant find the answer you are looking</span>
          <br />
          <span>far? Please chat with our friendly</span>
          <br />
          <span>team.</span>
        </p>
        <img src={Woman} className="m-5" />
        <button className="text-white px-12 py-2.5 hover:opacity-50 rounded-full text-sm font-medium cursor-pointer border-2 border-white flex items-center justify-center">
          Get In Touch
        </button>
      </div>
    </div>
  );
}

export default Questions;
