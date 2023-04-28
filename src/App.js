import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { InfoProvider } from "./context/InfoContext";
import Payment from "./pages/payment/Payment";

export default function App() {
  return (
    <PageContainer>
      <BrowserRouter>
      <InfoProvider>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      </Routes> 
        </InfoProvider>
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.main`
 background-color:  #F3D011;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`


