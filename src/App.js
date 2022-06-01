import React from "react";

import { Routes, Link, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import InsideMain from "./components/pages/InsideMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/inside" element={<InsideMain />} />
      <Route path="*" element={<div>404Pages</div>} />
    </Routes>
  );
}

export default App;
