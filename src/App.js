import React from "react";

import { Routes, Link, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
