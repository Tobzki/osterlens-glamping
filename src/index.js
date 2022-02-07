import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./pages/Images/Images";
import Home from "./pages/Home/Home";
import PricesBookings from "./pages/PricesBookings/PricesBookings";
import QA from "./pages/QA/QA";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/images" element={<Images />} />
      <Route path="/booking" element={<PricesBookings />} />
      <Route path="/questions" element={<QA />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
