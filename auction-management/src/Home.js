import React from 'react';
import './Css/Home.css'; // Import your CSS file for styling
import Carousel from 'react-bootstrap/Carousel'; // Import Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import Footer from './Footer'; 
import image1 from './Images/caro4.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import mini from './Images/mini.jpg';
import camera from './Images/camera.jpeg';
import bell from './Images/bell.jpeg';
import sec from './Images/secu.jpeg';
import touch from './Images/touch.jpg';
import lock from './Images/lock.jpeg';
import valve from './Images/valve.jpeg';
import bulb from './Images/bulb.jpeg';

const Home = () => {
  // Sample data for featured auctions, categories, and top-selling items
  const featuredAuctions = [
    { id: 1, title: 'SMART SWITCHES', image:touch },
    { id: 2, title: 'SMART DOOR LOCKS', image:lock  },
    { id: 3, title: 'SMART SECURITY SYSTEM', image:sec },
    
  ];

  

  const topSellingItems = [
    { id: 1, title: 'MINI SMART SWITCH', image:mini },
    { id: 2, title: 'DOOR BELL', image:bell },
    { id: 3, title: 'CAMERA', image:camera },
    { id: 4, title: 'SMART VALVE', image:valve },
    { id: 5, title: 'BULB', image:bulb },
  ];

  return (
    <div className="home-container">
      

      {/* Promotional Carousel */}
      <Carousel className="promo-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Special Auction Event!</h3>
            <p>Join us for our upcoming auctions with exclusive items.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Limited Time Offers!</h3>
            <p>Don’t miss out on these special deals!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    

      {/* Featured Auctions Section */}
      <section className="featured-auctions">
        <h2>Featured Auctions</h2>
        <div className="auction-carousel">
          {featuredAuctions.map((auction) => (
            <div key={auction.id} className="auction-item">
              <img src={auction.image} alt={auction.title} />
              <h3>{auction.title}</h3>
            </div>
          ))}
        </div>
      </section>

      

      {/* Top-Selling Items Section */}
      <section className="top-selling-items">
        <h2>Top-Selling Items</h2>
        <div className="top-selling-list">
          {topSellingItems.map((item) => (
            <div key={item.id} className="top-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Home;
