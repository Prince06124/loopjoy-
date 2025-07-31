import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecordVideo from "./components/RecordVideo";
import LandingPage from "./components/Landingpage";
import Sendgift from "./components/Sendgift";
import OpenGift from "./components/Opengift";
import Checkout from "./components/Checkout";
import LoadingState from "./components/Loadingstate";
import Payment from "./components/Payment";
import './index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/record" element={<RecordVideo />} />
        <Route path="/sendgift" element={<Sendgift />} />
        <Route path="/opengift" element={<OpenGift />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/loadingstate" element={<LoadingState />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
