import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import AuctionDetail from './AuctionDetail';
import CreateAuction from './CreateAuction';  // Import the CreateAuction component
import BidManagement from './BidManagement';  // Import the BidManagement component
import AuctionResults from './AuctionResults';
import PaymentCheckout from './PaymentCheckout';
import Report from './Report';

import SellerDashboard from './sellerDashboard';

import AdminDashboard from './admindashboard';
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
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} /> {/* Route for Terms & Privacy */}
        <Route path="/signup" element={<SignUp />} />   {/* Route for Sign Up Page */}
        <Route path="/auction-detail/:id" element={<AuctionDetail />} />  {/* Route for Auction Detail Page */}
        <Route path="/create-auction" element={<CreateAuction />} />  {/* Route for Create Auction Page */}
        <Route path="/bid-management" element={<BidManagement />} />  {/* New Route for Bid Management Page */}
        <Route path="/auction-results" element={<AuctionResults />} />
        <Route path="/payment-checkout" element={<PaymentCheckout />} />
        <Route path="/report" element={<Report/>}/>

        <Route path="/sellerDashboard" element={<SellerDashboard/>}/>

        <Route path="/admindashboard" element={<AdminDashboard/>}/>
      </Routes>
      <Footer />  {/* Include the Footer */}
    </Router>
  );
};

export default App;
