import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="flex__center">
      <Navbar />
    </div>
  );
};

export default App;
