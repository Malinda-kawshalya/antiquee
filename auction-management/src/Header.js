import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <header className={`header ${menuActive ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">SMART HOME</Link>
      </div>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>

          <li className="dropdown">
  <button className="dropdown-toggle" onClick={toggleDropdown} aria-expanded={dropdownActive}>
    Auctions
  </button>
  {dropdownActive && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/auctions" onClick={toggleDropdown}>All Auctions</Link>
      </li>
      <li>
        <Link to="/create-auction" onClick={toggleDropdown}>Create Auction</Link>
      </li>
    </ul>
  )}
</li>


          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
