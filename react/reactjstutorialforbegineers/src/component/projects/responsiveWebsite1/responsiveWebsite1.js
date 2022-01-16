import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import Service from "./components/services";
import { Routes, Route } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/navbar";

function ResponsiveWebsite1() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default ResponsiveWebsite1;
