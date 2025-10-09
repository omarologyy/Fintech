import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import flutterwave from "../../svgs/flutterwave.svg";
import opay from "../../svgs/opay.svg";
import trivago from "../../svgs/trivago.svg";
import paystack from "../../svgs/paystack.svg";
import globe from "../../svgs/globe.svg";
import market from "../../images/market.png";

function Hero() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex bg-gray-100">
        <div className="flex flex-row justify-between items-start w-full m-5">
          {/* FIRST COLUMN */}
          <div className="flex flex-col m-4">
            <button className="bg-green-100 text-black px-4 py-2 rounded-full flex flex-row text-sm font-medium hover:bg-gray-100 items-center w-fit space-x-2">
              <img src={globe} />
              <span>Payment Solution</span>
            </button>
            <h1 className="text-4xl font-bold mt-8">
              <span>Effortless Payments for</span>
              <br />
              <span>Your</span>
              <span className="text-green-500"> Business</span>
            </h1>
            <p className="text-md text-gray-400 mt-6">
              <span>Accept all forms of payments</span>
              <br />
              <span>seamlessly-online, in store,</span>
              <br />
              <span>and on the go</span>
            </p>
            {/* BUTTONS */}
            <div className="flex flex-row space-x-3 items-center mt-8">
              <button className="bg-[#2E5C38] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
                Get Started Today
              </button>

              <button className="border-2 border-green-600 text-green-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
                <span>Learn More</span>
                <IoIosArrowRoundForward className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* SECOND COLUMN */}
          <img src={market} alt="Market" className="w-lg h-lg" />
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden md:flex-col md:items-center md:justify-center m-6 p-6 space-y-4">
        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <img src={market} alt="Market" className="max-w-sm w-full h-auto" />
        </div>

        {/* MAIN HEADING */}
        <div className="text-center">
          <h1 className="text-4xl font-medium">
            Effortless Payments for Your{" "}
            <span className="text-green-400">Business</span>
          </h1>
        </div>

        {/* SUBTEXT */}
        <div className="m-4 text-center">
          <p className="text-sm text-gray-400">
            Accept all forms of payments seamlessly — online, in-store, and
            on-the-go
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-row space-x-3 justify-center items-center m-4">
          <button className="bg-[#2E5C38] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
            Get Started Today
          </button>

          <button className="border-2 border-green-600 text-green-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
            <span>Learn More</span>
            <IoIosArrowRoundForward className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="block md:hidden mt-6 text-center">
        <h1 className="font-normal text-2xl">
          <span>Effortless</span>
          <br />
          <span>Payments</span>
        </h1>
        <h1 className="text-2xl">
          <span>For your</span>
          <span className="text-green-400"> Business</span>
        </h1>
      </div>
      <div className="block md:hidden m-4 text-center items-center">
        <p className="text-sm text-gray-400">
          Accept all forms of payments seamlessly
        </p>
        <span className="justify-center text-sm text-gray-400 p-6">
          online, in-store, and on-the-go
        </span>
      </div>
      {/* BUTTONS */}
      <div className="md:hidden flex flex-row space-x-3 justify-center items-center m-4">
        <button className="bg-[#2E5C38] text-white px-4 py-2.5 rounded-full text-xs font-medium hover:bg-green-700 flex items-center justify-center">
          Get Started Today
        </button>

        <button className="border-2 border-green-600 text-green-600 px-4 py-2.5 rounded-full text-xs font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
          <span>Learn More</span>
          <IoIosArrowRoundForward className="h-5 w-5" />
        </button>
      </div>
      {/* PARTNERS (Mobile Only) */}
      <div className="flex flex-col md:hidden items-center justify-center space-y-3 mt-4 p-2">
        <div className="text-xs text-black text-center">
          <p>We proudly partner with over 1,000+ businesses</p>
        </div>
        <div className="flex flex-row space-x-3 justify-center items-center">
          <img src={flutterwave} alt="Flutterwave" className=" w-auto" />
          <img src={opay} alt="Opay" className=" w-auto" />
          <img src={paystack} alt="Paystack" className=" w-auto" />
          <img src={trivago} alt="Trivago" className=" w-auto" />
        </div>
      </div>
    </>
  );
}

export default Hero;

// function Hero() {
//   return (
//     <div className=" flex flex-col">
//       {/* DESKTOP VIEW   */}
//       <div className="hidden lg:flex lg:flex-row lg:m-4 lg:justify-between">
//         {/* FIRST COLUMN */}
//         <div className="lg:flex lg:flex-col">
//           <button className="bg-green-100 text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
//             <img src={globe} />
//             <span>Payment Solution</span>
//           </button>
//         </div>
//         {/* SECOND COLUMN */}
//         <img src={market} alt="Market" className="lg:w-lg lg:h-lg" />
//       </div>
//       {/* TABLET VIEW */}
//       <div className="hidden md:block md:m-6 md:p-6">
//         <img src={market} alt="Market" />
//       </div>

//       {/* MAIN HEADING */}
//       {/* TABLET VIEW*/}
//       <div className="hidden md:flex md:flex-col md:text-center md:justify-center md:items-center">
//         <h1 className="text-4xl font-medium">
//           Effortless Payments for Your{" "}
//           <span className="text-green-400">Business</span>
//         </h1>
//       </div>

//       {/* MOBILE VIEW */}
//       <div className="block md:hidden mt-6 text-center">
//         <h1 className="font-normal text-2xl">
//           <span>Effortless</span>
//           <br />
//           <span>Payments</span>
//         </h1>
//         <h1 className="text-2xl">
//           <span>For your</span>
//           <span className="text-green-400"> Business</span>
//         </h1>
//       </div>
//       {/* LITTLE TEXT */}
//       {/* TABLET VIEW */}
//       <div className="hidden md:block m-4 text-center">
//         <p className="text-sm text-gray-400">
//           Accept all forms of payments seamlessly-online, in-store, and
//           on-the-go
//         </p>
//       </div>
//       {/* MOBILE */}
//       <div className="block md:hidden m-4">
//         <p className="text-sm text-gray-400">
//           Accept all forms of payments seamlessly
//         </p>
//         <span className="justify-center text-sm text-gray-400 p-6">
//           online, in-store, and on-the-go
//         </span>
//       </div>
//       {/* BUTTONS */}
//       <div className="flex flex-row space-x-3 items-center m-4">
//         <button className="bg-[#2E5C38] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 flex items-center justify-center">
//           Get Started Today
//         </button>

//         <button className="border-2 border-green-600 text-green-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center justify-center space-x-1">
//           <span>Learn More</span>
//           <IoIosArrowRoundForward className="h-5 w-5" />
//         </button>
//       </div>

//       {/* PARTNERS */}
//       <div className="text-xs text-black m-4 ">
//         <p>We proudly partner with over 1,000+ businesses</p>
//       </div>
//       <div className="flex flex-row space-x-3">
//         <img src={flutterwave} />
//         <img src={opay} />
//         <img src={paystack} />
//         <img src={trivago} />
//       </div>
//       {/* HERO FOOTER */}
//       <div className="flex flex-col bg-[#2E5C38] w-full p-8 m-2">
//         <div>
//           <div className="flex flex-row space-x-6 text-white justify-between items-center">
//             {/* FIRST COLUMN */}
//             <div className="flex flex-col justify-start items-start">
//               <p className="text-3xl font-bold">100k+</p>
//               <p>Payments daily</p>
//             </div>
//             {/* SECOND COLUMN */}
//             <div className="flex flex-col justify-start items-start">
//               <p className="text-3xl font-bold">5M</p>
//               <p>API calls</p>
//             </div>
//             {/* THIRD COLUMN */}
//             <div className="flex flex-col justify-center items-center ">
//               <p className="text-3xl font-bold">6</p>
//               <p>Payments Options</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
