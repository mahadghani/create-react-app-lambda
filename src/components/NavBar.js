// FILE: src/components/NavBar.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// CSS
import "../static/NavBar.css";

// Images
import logo from "../images/vv_logo_s.jpg"; // Importing the image

const Contact = () => {
  return (
    <div className="container mt-5">
      <nav className="navbar">
        <Link className="navbar_logo" to="/home">
          <img src={logo} alt="Viral Vision"></img>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link text-center text-white fw-bold fs-5"
              to="/home"
            >
              <p>Home</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-center text-white fw-bold fs-5"
              to="/services"
            >
              <p>Services</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-center text-white fw-bold fs-5"
              to="/CaseStudies"
            >
              <p>Case Studies</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-center text-white fw-bold fs-5"
              to="/FAQs"
            >
              <p>FAQs</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-center text-white fw-bold fs-5"
              to="/contact"
            >
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;
