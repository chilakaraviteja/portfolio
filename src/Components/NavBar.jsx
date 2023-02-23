import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="log_name">
        Ravi Teja Chilaka
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/contact" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About me
          </a>
        </li>
      </ul>
      <div className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
