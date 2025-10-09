import React from "react";
import Bg1 from "../../svgs/Bg.svg";
import Bg2 from "../../svgs/Frame2.svg";
import Background from "../../svgs/Bg.svg";
import flutterwave from "../../svgs/flutterwave.svg";
import opay from "../../svgs/opay.svg";
import trivago from "../../svgs/trivago.svg";
import paystack from "../../svgs/paystack.svg";
import EasyUse from "../../svgs/EasyUse.svg";
import Protect from "../../svgs/Protect.svg";
import Green from "../../svgs/Green.svg";
import FreeTransaction from "../../svgs/FreeTransaction.svg";
import Desktop from "../../images/VectorBg.jpg";

function Features() {
  return (
    <>
      <div className="bg-gray-200">
        {/* DESKTOP & TABLET VIEW */}
        <div
          className="hidden md:block min-h-screen bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${Desktop})` }}
        >
          {/* Partnerships */}
          <div className="justify-between items-start flex flex-row">
            <p>We proudly partner with over 1,000+ businesses</p>
            <div className="flex flex-row space-x-3">
              <img src={flutterwave} alt="Flutterwave" className="w-auto" />
              <img src={opay} alt="Opay" className="w-auto" />
              <img src={paystack} alt="Paystack" className="w-auto" />
              <img src={trivago} alt="Trivago" className="w-auto" />
            </div>
          </div>

          {/* Green background */}
          <div className="flex justify-center items-center mt-8">
            <div className="relative flex justify-center items-center w-full">
              {/* Background Image */}
              <img
                src={Green}
                alt="Background"
                className="w-full h-auto object-cover"
              />

              {/* Overlay Box */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#295B37] w-[80%] lg:w-[60%] py-8 px-10 text-white flex justify-between items-center clip-shape">
                  {/* FIRST COLUMN */}
                  <div className="flex flex-col items-start justify-start text-center">
                    <p className="text-4xl font-bold">100k+</p>
                    <p className="text-sm mt-2">Payments daily</p>
                  </div>

                  {/* SECOND COLUMN */}
                  <div className="flex flex-col items-start justify-start text-center">
                    <p className="text-4xl font-bold">5M+</p>
                    <p className="text-sm mt-2">API calls</p>
                  </div>

                  {/* THIRD COLUMN */}
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-4xl font-bold">6</p>
                    <p className="text-sm mt-2">Payment Options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="justify-center flex flex-col items-center m-12">
            <h1 className="text-3xl font-bold">
              Powerful Features to Elevate Your Business
            </h1>
            <p className="text-sm text-gray-400 m-4">
              Effortless payments, real-time insights, and unmatched
              security—all in one place.
            </p>
          </div>

          {/* Cards */}
          <div className="justify-between items-center flex flex-row p-6 space-x-3">
            {/* Card 1 */}
            <div className="bg-gray-200 rounded-3xl p-6 w-72 h-78 flex flex-col text-center">
              <img src={EasyUse} alt="Logos" className="h-15 w-auto m-2" />
              <h3 className="font-bold text-lg text-black m-2 ">
                Accept All Payment Methods
              </h3>
              <p className="text-sm text-black m-2">
                Cards, bank transfers, USSD, and digital wallets—give your
                customers the flexibility they need.
              </p>
              <a href="#" className="text-xs hover:underline text-black m-3">
                Learn More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 rounded-3xl p-6 w-72 h-78 flex flex-col text-center">
              <img
                src={FreeTransaction}
                alt="Logos"
                className="h-15 w-auto m-2"
              />
              <h3 className="font-bold text-lg text-black m-2 ">
                Automated Payouts & Settlements
              </h3>
              <p className="text-sm text-black m-2">
                Withdraw funds quickly and manage your cash flow without hassle.
              </p>
              <a href="#" className="text-xs hover:underline text-black m-3">
                Learn More
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 rounded-3xl p-6 w-72 h-78 flex flex-col text-center">
              <img src={Protect} alt="Logos" className="h-15 w-auto m-2" />
              <h3 className="font-bold text-lg text-black m-2 ">
                Fast & Secure Transactions
              </h3>
              <p className="text-sm text-black m-2">
                Process payments in seconds with bank-level security to keep
                your business and customers safe.
              </p>
              <a href="#" className="text-xs hover:underline text-black m-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center m-4">
        <div className="text-center items-center">
          <h1 className="font-bold text-3xl">
            <span>Powerful Features</span>
            <br />
            <span>to Elevate Your</span>
            <br />
            <span>Business</span>
          </h1>
          <p className="text-sm text-black m-3">
            Effortless payments, real-time insights, and
            <br />
            <span> unmatched security—all in one place.</span>
          </p>
        </div>
        <div className="space-y-4 m-4">
          {/* CARD 1 */}
          <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
            <img src={EasyUse} alt="Logos" className="h-10 w-auto m-2" />
            <h3 className="font-bold text-lg text-white m-2 ">
              Accept All Payment Methods
            </h3>
            <p className="text-sm text-gray-300 m-2">
              Cards, bank transfers, USSD, and digital wallets—give your
              customers the flexibility they need.
            </p>
            <a href="#" className="text-xs hover:underline text-gray-300 m-4">
              Learn More
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
            <img
              src={FreeTransaction}
              alt="Logos"
              className="h-10 w-auto m-2"
            />
            <h3 className="font-bold text-lg text-white m-2 ">
              Automated Payouts & Settlements
            </h3>
            <p className="text-sm text-gray-300 m-2">
              Withdraw funds quickly and manage your cash flow without hassle.
            </p>
            <a href="#" className="text-xs hover:underline text-gray-300">
              Learn More
            </a>
          </div>
          {/* CARD 3 */}
          <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
            <img src={Protect} alt="Logos" className="h-10 w-auto m-2" />
            <h3 className="font-bold text-lg text-white m-2 ">
              Fast & Secure Transactions
            </h3>
            <p className="text-sm text-gray-300 m-2">
              Process payments in seconds with bank-level security to keep your
              business and customers safe.
            </p>
            <a href="#" className="text-xs hover:underline text-gray-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
