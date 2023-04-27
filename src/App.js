import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import styled from "styled-components";
import signUp from "./pages/signUp";
import signIn from "./pages/signIn";

export default function App() {
  return (

    <PageContainer>
      {/* <Routes>
        <Route path="/signUp" element={signUp} />
        <Route path="/signIn" element={signIn} />
      </Routes> */}
    </PageContainer>

  );
}

const PageContainer = styled.main`
 background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`


