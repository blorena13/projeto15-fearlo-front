import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Payment from "./pages/payment/Payment";
import Home from "./pages/Home";
import Bird from "./pages/Bird";
import Cat from "./pages/Cat";
import Dog from "./pages/Dog";
import Fish from "./pages/Fish";
import Search from "./pages/Search";
import { InfoProvider } from "./context/InfoContext";

export default function App() {

  return (
    
        <BrowserRouter>
          <InfoProvider>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/bird" element={<Bird/>} />
              <Route path="/cat" element={<Cat/>} />
              <Route path="/dog" element={<Dog/>} />
              <Route path="/fish" element={<Fish />} />
              <Route path="/search" element={<Search/>} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/payment" element={<Payment/>} />
            </Routes>
          </InfoProvider> 
        </BrowserRouter>
    
  );
}
