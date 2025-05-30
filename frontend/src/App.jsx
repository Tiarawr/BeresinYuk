import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallpage from "./wallpage";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallpage" element={<Wallpage />} />
    </Routes>
    </BrowserRouter>
  );
}