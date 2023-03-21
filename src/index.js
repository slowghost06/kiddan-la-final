import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Style
import "./styles.scss";
//Pages
import {
  About,
  Home,
  Team,
  Work,
  Contact,
  PageNotFound,
  PlaneAnimation
} from "./pages";

import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/planeanimation" element={<PlaneAnimation />} />
      </Routes>
    </Router>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
