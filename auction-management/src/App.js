// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Auctions from './AuctionListings';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Login from './Login';
import TermsAndPrivacy from './TermsAndPrivacy';
import SignUp from './SignUp';
const App = () => {
  return (
    <Router>
      <Header />  {/* Include the Header */}
      <Routes>
        <Route path="/" element={<Home />} />        {/* Route for Home Page */}
        <Route path="/auctions" element={<Auctions />} />  {/* Route for Auctions Page */}
        <Route path="/about" element={<About />} />      {/* Route for About Us Page */}
        <Route path="/contact" element={<Contact />} />  {/* Route for Contact Page */}
        <Route path="/profile" element={<Profile />} />  {/* Route for My Profile Page */}
        <Route path="/login" element={<Login />} />      {/* Route for Login Page */}
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
