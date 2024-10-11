import React from 'react';
import './Css/Home.css'; // Import your CSS file for styling
import Carousel from 'react-bootstrap/Carousel'; // Import Bootstrap Carousel
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import Footer from './Footer'; 
import image1 from './Images/caro4.png';
import image2 from './Images/vintage art.jpeg';

const Home = () => {
  // Sample data for featured auctions, categories, and top-selling items
  const featuredAuctions = [
    { id: 1, title: 'Vintage Artwork', image: image4 },
    { id: 2, title: 'Antique Furniture', image: image2 },
    { id: 3, title: 'Rare Coins', image: image2},
  ];

  const categories = [
    'Art',
    'Antiques',
    'Collectibles',
    'Jewelry',
    
  ];

  const topSellingItems = [
    { id: 1, title: 'Golden Necklace', image: image4 },
    { id: 2, title: 'Collectible Stamps', image: 'path_to_top_item_image2.jpg' },
    { id: 3, title: 'Vintage Watch', image: 'path_to_top_item_image3.jpg' },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Auction House</h1>
        <p>Your gateway to exclusive auctions and rare items!</p>
      </header>

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

      {/* Categories Section */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">{category}</div>
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
