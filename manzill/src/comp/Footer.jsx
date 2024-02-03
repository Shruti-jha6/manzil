import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Manzil</h2>
            <p>Kashmere Gate ISBT, Delhi -11006</p>
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
            <p>Email: manzill-top1.com</p>
            <p>Phone: +91 6578 212 377</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;