import React from "react";
import { SignUp, Login } from "./components/Merchant/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* LANDING PAGE */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<></>} />
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
      {/* MERCHANT DASHBOARD */}
    </>
  );
}

export default App;
