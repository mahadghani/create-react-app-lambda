import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// CSS
import "./static/Reset.css";
import "./static/App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
