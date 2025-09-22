"use client";

import React from "react";
import Contact from "../contact/page";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const RoutesOfApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesOfApp;
