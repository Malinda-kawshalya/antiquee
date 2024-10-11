// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Css/Footer.css';  // Import your CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Auction House</h3>
          <p>
            We are the leading auction house offering a platform for buying and selling valuable items with secure transactions and real-time bidding.
          </p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>           {/* Use Link for React routing */}
            <li><Link to="/about">About Us</Link></li>   {/* Link to About Us Page */}
            <li><Link to="/contact">Contact Us</Link></li> {/* Link to Contact Us Page */}
            <li><Link to="/terms-and-privacy">Privacy Policy</Link></li> {/* Link to Terms & Privacy */}
          </ul>
        </div>
        
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Auction House | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
