import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { SignUp, Login } from "@/components/Merchant/index.js";
import {
  Email,
  Sms,
  Identity,
  BRN,
  BVN,
} from "@/components/Merchant/User/index.js";
import Home from "./Home.jsx";
import {
  One,
  Two,
  Three,
} from "@/components/Merchant/User/TwoFactorAuth/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup/email",
    element: <Email />,
  },
  {
    path: "/signup/sms",
    element: <Sms />,
  },
  {
    path: "/signup/twofactorstepone",
    element: <One />,
  },
  {
    path: "/signup/twofactorsteptwo",
    element: <Two />,
  },
  {
    path: "/signup/twofactorstepthree",
    element: <Three />,
  },
  {
    path: "/signup/bank-verification",
    element: <BVN />,
  },
  {
    path: "/signup/identity",
    element: <Identity />,
  },
  {
    path: "/signup/business-registration-number",
    element: <BRN />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {},
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
