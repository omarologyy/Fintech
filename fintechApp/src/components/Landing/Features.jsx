import React from "react";
import Bg1 from "../../svgs/Bg.svg";
import Bg2 from "../../svgs/Frame2.svg";
import Background from "../../svgs/Bg.svg";
import EasyUse from "../../svgs/EasyUse.svg";
import Protect from "../../svgs/Protect.svg";
import FreeTransaction from "../../svgs/FreeTransaction.svg";

function Features() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
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
            Cards, bank transfers, USSD, and digital wallets—give your customers
            the flexibility they need.
          </p>
          <a href="#" className="text-xs hover:underline text-gray-300 m-4">
            Learn More
          </a>
        </div>

        {/* CARD 2 */}
        <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
          <img src={FreeTransaction} alt="Logos" className="h-10 w-auto m-2" />
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
  );
}

export default Features;
