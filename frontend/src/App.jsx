import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;