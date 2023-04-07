import React from "react";
// import { Routes, Route } from "react-router-dom";
import Sticky from "./components/Sticky";
import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* <Routes>
        <Route path="/" exact element={<Dashboard />} />
      </Routes> */}

      <Sticky />
    </div>
  );
};

export default App;
