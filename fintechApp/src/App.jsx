// import React from "react";
// import { SignUp, Login } from "@/components/Merchant/index.js";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Home.jsx";
// import Email from "@/components/Merchant/User/Email.jsx";
// import Sms from "@/components/Merchant/User/Sms.jsx";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />

//           <Route path="/signup" element={<SignUp />}>
//             <Route path="email" element={<Email />} />
//             <Route path="sms" element={<Sms />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { SignUp, Login } from "@/components/Merchant/index.js";
import Home from "./Home.jsx";
import Email from "@/components/Merchant/User/Email.jsx";
import Sms from "@/components/Merchant/User/Sms.jsx";
import Two from "@/components/Merchant/User/TwoFactorAuth/Two.jsx";
import One from "@/components/Merchant/User/TwoFactorAuth/One.jsx";
import Three from "./components/Merchant/User/TwoFactorAuth/Three.jsx";

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
    path: "/login",
    element: <Login />,
  },
  {},
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
