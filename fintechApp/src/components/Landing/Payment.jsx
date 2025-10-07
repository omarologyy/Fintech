import React from "react";
import Background from "../../images/BgG.jpg";

function Payment() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="justify-center items-center flex flex-col p-5">
        <h2 className="font-semibold text-lg text-center m-6 text-white">
          <span>Seamless Payments in</span>
          <br />
          <span>Just a Few Steps</span>
        </h2>
        {/* FIRST */}
        <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 m-3">
          <h2 className="text-xl font-normal">1</h2>
        </div>
        <div className="text-white text-center items-center">
          <h2 className="text-lg m-4">Sign up</h2>
          <p className="text-xs">
            Create an account and customize
            <br />
            <span>your payment preferences.</span>
          </p>
        </div>
        {/* SECOND */}
        <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 m-3">
          <h2 className="text-xl font-normal">2</h2>
        </div>
        <div className="text-white text-center items-center">
          <h2 className="text-lg m-4">Generate Payment Links</h2>
          <p className="text-xs">
            Easily create and share secure payment
            <br />
            <span>links with customers.</span>
          </p>
        </div>
        {/* THIRD */}
        <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 m-3">
          <h2 className="text-xl font-normal">3</h2>
        </div>
        <div className="text-white text-center items-center">
          <h2 className="text-lg m-4">Accept Payments</h2>
          <p className="text-xs">
            Customers can pay via card, bank
            <br />
            <span>transfer, USSD, or mobile wallets.</span>
          </p>
        </div>
        {/* FOURTH */}
        <div className="inline-flex items-center justify-center bg-white rounded-full w-10 h-10 m-3">
          <h2 className="text-xl font-normal">4</h2>
        </div>
        <div className="text-white text-center items-center">
          <h2 className="text-lg m-4">
            <span>Track & Manage</span>
            <br />
            <span>Transactions</span>
          </h2>
          <p className="text-xs">
            Create an account and customize
            <br />
            <span>your payment preferences.</span>
          </p>
        </div>
        {/* BUTTON */}
        <button className="mt-10 bg-white text-green px-4 py-2 items-center rounded-full text-sm cursor-pointer w-fit">
          <span className="text-black">Create a Free Account</span>
        </button>
      </div>
    </div>
  );
}

export default Payment;
