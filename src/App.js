import React from "react";
// import { Routes, Route } from "react-router-dom";
import Sticky from "./components/Sticky";

const App = () => {
  return (
    <div>
      {/* <Navbar />

      <Routes>
        <Route path="/AllTools" element={<AllTools />} />
        <Route path="/" exact element={<Hero />} />
      </Routes>

      <Footer /> */}
      <Sticky />
    </div>
  );
};

export default App;
