import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageBox from "./messagebox";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messagebox" element={<MessageBox/>}/> 
    </Routes>
    </BrowserRouter>
  );
}