import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { InfoProvider } from "./context/InfoContext";
import Payment from "./pages/payment/Payment";

export default function App() {
  return (
      <BrowserRouter>
        <InfoProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/payment" element={<Payment />} />
          </Routes> 
        </InfoProvider>
      </BrowserRouter>
  );
}



