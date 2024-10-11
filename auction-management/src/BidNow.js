
// src/BidNow.js
import React, { useState } from 'react';
import './Css/BidNow.css'; // Create this CSS file for styles

const BidNow = () => {
  const [quantity, setQuantity] = useState(1);
  const startingPrice = 3.19; // Example starting price

  const increaseQuantity = () => {
    if (quantity < 3) setQuantity(quantity + 1); // Max 3 pcs
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bid-now-container">
      <div className="product-image">
        <img src="path/to/your/image.png" alt="Bid Now Item" /> {/* Replace with actual image */}
      </div>
      <div className="product-details">
        <h1>7 Pcs/Set Women Hair Scrunchies</h1>
        <p>Price: £{(startingPrice * (1 - 0.76)).toFixed(2)} <span className="original-price">£{startingPrice.toFixed(2)}</span> <span className="discount">-76%</span></p>
        <div className="delivery-info">Fast delivery by Oct 07</div>
        <div className="guarantee">
          Delivery guarantee: £1.00 coupon code for late delivery.
        </div>
        <div className="free-returns">Free returns within 90 days, no questions asked.</div>
        
        <div className="quantity-container">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        
        <button className="bid-button">Bid Now</button>
      </div>
    </div>
  );
};

export default BidNow;
