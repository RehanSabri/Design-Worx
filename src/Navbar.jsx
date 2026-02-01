import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="mursee-nav">
      {/* Left */}
      <div className="nav-logo-text">DW</div>

      {/* Center */}
      <div className="nav-center">
        <a className="nav-link">DESIGN</a>
        <a className="nav-link">BUILD</a>
        <a className="nav-link">PMC</a>
      </div>

      {/* Right */}
      <div>
        <button className="nav-btn">Work With Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
