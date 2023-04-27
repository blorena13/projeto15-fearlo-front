import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <PageContainer>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes> 
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.main`
 /* background-color: #8c11be; */
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`


