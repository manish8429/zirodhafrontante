import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/Universe"
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";  
import Notfound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/product" element={<ProductPage />}/>
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/support" element={<SupportPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="*" element={<Notfound />}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
);