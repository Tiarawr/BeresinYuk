import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallpage from "./wallpage";
import MessageBox from "./messagebox";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallpage" element={<Wallpage />} />
      <Route path="/messagebox" element={<MessageBox/>}/> 
    </Routes>
    </BrowserRouter>
  );
}