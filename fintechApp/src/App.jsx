import React from "react";
import Navbar from "./components/Landing/Navbar";
import Hero from "./components/Landing/Hero";
import Features from "./components/Landing/Features";
import Payment from "./components/Landing/Payment";
import Praises from "./components/Landing/Praises";
import Price from "./components/Landing/Price";
import Devs from "./components/Landing/Devs";
import FAQs from "./components/Landing/FAQs";
import Questions from "./components/Landing/Questions";
import Footer from "./components/Landing/Footer";

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
      <Devs />
      <FAQs />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
