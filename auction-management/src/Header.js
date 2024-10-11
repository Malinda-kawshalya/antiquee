import React, { useState } from 'react'; // Make sure useState is imported
import { Link } from 'react-router-dom';
import './Css/Header.css'; // Import your CSS file

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${menuActive ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">Auction House</Link>
      </div>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/auctions">Auctions</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
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
