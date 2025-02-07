import React from "react";
import Navbar from "../components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LiveMarket from "../pages/LiveMarket";
import News from "../pages/News";
import ContactUs from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import About from "../pages/About";
import LoginSignup from "../pages/LoginSignup";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<LiveMarket />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
