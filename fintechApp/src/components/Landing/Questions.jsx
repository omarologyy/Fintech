import React from "react";
import Background from "@/images/BgG.jpg";
import Woman from "@/images/Woman.png";
function Questions() {
  return (
    <>
      {/* DESKTOP VIEW*/}
      <div
        className="hidden lg:flex bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="justify-between items-center flex flex-row text-center text-white p-4">
          <img src={Woman} className="m-5" />
          <div className="flex flex-col justify-start items-start text-start text-white p-4 space-y-2">
            <h1 className="text-lg font-bold">Still have Questions?</h1>
            <p className="text-sm">
              Cant find the answer you are looking far? Please chat with our
              friendly team.
            </p>
          </div>
          <button className="text-white px-12 py-2.5 ml-80 hover:opacity-50 rounded-full text-sm font-medium cursor-pointer border-2 border-white flex items-start justify-start">
            Get In Touch
          </button>
        </div>
      </div>
      {/* TABLET VIEW  */}
      <div
        className="hidden md:flex lg:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="justify-start items-start flex flex-row text-center text-white p-4">
          <img src={Woman} className="m-5" />
          <div className="flex flex-col justify-start items-start text-start text-white p-4 space-y-4">
            <h1 className="text-lg font-bold mt-6">Still have Questions?</h1>
            <p className="text-sm">
              Cant find the answer you are looking far? Please chat with our
              friendly team.
            </p>
            <button className="text-white px-12 py-2.5 hover:opacity-50 rounded-full text-sm font-medium cursor-pointer border-2 border-white flex items-start justify-start">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div
        className="md:hidden bg-cover bg-center"
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
    </>
  );
}

export default Questions;
