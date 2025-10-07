import React from "react";
import Navbar from "./components/Landing/Navbar";
import Hero from "./components/Landing/Hero";
import Features from "./components/Landing/Features";
import Payment from "./components/Landing/Payment";
import Praises from "./components/Landing/Praises";
import Price from "./components/Landing/Price";

function App() {
  return (
    <>
      {/* LANDING PAGE */}
      <Navbar />
      <Hero />
      <Features />
      <Payment />
      <Praises />
      <Price />
    </>
  );
}

export default App;
