import React from "react";
import Home from "./Home";
import Products from "./Products";
import Detail from "./Detail";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/details/:id" element={<Detail />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
