import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Company Name</h2>
            <p>Address, City, Country</p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;