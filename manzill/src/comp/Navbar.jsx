import React from 'react';
import './Nav.css';
import logo from '../img/logo-manzil.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="tabs-container">
        <ul className="tabs">
          <li><a href="#home">Home</a></li>
          <li><a href="#grow">Grow</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#legal">Legal</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


