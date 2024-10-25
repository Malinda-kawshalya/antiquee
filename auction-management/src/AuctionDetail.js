import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import './Css/AuctionDetail.css'; // Import the CSS file for modern styles

const AuctionDetail = () => {
  // Dummy auction item data (replace with real data)
  const auctionItem = {
    id: 1, // Add the ID of the auction item
    title: 'Vintage Watch',
    description: 'A rare vintage watch from the 1960s in excellent condition.',
    startingPrice: 500,
    currentPrice: 750,
    auctionEndTime: new Date().toLocaleString(),
    bidHistory: [
      { id: 1, bidder: 'John Doe', bid: 700, time: 'Oct 22, 2024 - 11:30 AM' },
      { id: 2, bidder: 'Jane Smith', bid: 750, time: 'Oct 22, 2024 - 12:00 PM' },
    ],
    images: [
      'path/to/image1.jpg', // Replace with actual image paths
      'path/to/image2.jpg',
      'path/to/image3.jpg',
    ],
  };

  const [bid, setBid] = useState('');
  const [bidHistory, setBidHistory] = useState(auctionItem.bidHistory);

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    if (bid > auctionItem.currentPrice) {
      const newBid = {
        auctionItemId: auctionItem.id,  // ID of the auction item
        bidderName: 'New Bidder', // Replace this with the logged-in user's name or ID
        bidAmount: bid,
        bidTime: new Date().toISOString(),
      };

      try {
        const response = await fetch('http://localhost:5140/api/Bid', { // Your .NET API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBid),
        });

        if (response.ok) {
          const result = await response.json();
          setBidHistory([result, ...bidHistory]); // Update bid history with the new bid
          setBid(''); // Clear the bid input
        } else {
          alert('Failed to submit the bid');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Your bid must be higher than the current price.');
    }
  };

  return (
    <div className="auction-detail-container">
      {/* Carousel for item images */}
      <Carousel className="mb-4">
        {auctionItem.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Auction Item ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="auction-item-details shadow-lg p-4 mb-5 bg-white rounded text-center">
        <h2>{auctionItem.title}</h2>
        <p>{auctionItem.description}</p>
        <p><strong>Starting Price:</strong> ${auctionItem.startingPrice}</p>
        <p><strong>Current Price:</strong> ${auctionItem.currentPrice}</p>
        <p><strong>Auction End Time:</strong> {auctionItem.auctionEndTime}</p>
      </div>

      <div className="bid-history-container text-center">
        <h3>Bid History</h3>
        <ul>
          {bidHistory.map((bidItem) => (
            <li key={bidItem.id}>
              <span><strong>{bidItem.bidder}</strong> bid ${bidItem.bid} on {bidItem.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="place-bid-form-container shadow p-4 mt-5 bg-white rounded text-center">
        <h3>Place Your Bid</h3>
        <form onSubmit={handleBidSubmit}>
          <input
            type="number"
            placeholder="Enter your bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-primary w-100">Place Bid</button>
        </form>
      </div>
    </div>
  );
};

export default AuctionDetail;
