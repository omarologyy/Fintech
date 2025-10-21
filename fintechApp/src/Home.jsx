import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Payment,
  Praises,
  Price,
  Devs,
  FAQs,
  Questions,
  Footer,
} from "@/components/Landing/index.js";

function Home() {
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

export default Home;
