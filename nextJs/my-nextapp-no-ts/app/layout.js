"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { BrowserRouter } from "react-router-dom";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
