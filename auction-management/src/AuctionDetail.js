import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import "./Css/AuctionDetail.css"; // Import the CSS file for modern styles
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const AuctionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bid, setBid] = useState("");
  const [auctionItem, setAuctionItem] = useState({});
  const [bids, setBids] = useState([]);

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');

    if(localStorage.getItem('userId') == null || localStorage.getItem('userId') == '' || localStorage.getItem('userId') == undefined)
    {
      alert('You need to login to create a bid')
      navigate('/login');
      return;
    }

    // Check if the logged-in user is the auction creator
    if (userId === auctionItem.userId) {
      alert("You cannot place a bid on your own auction.");
      return;
    }



    if (bid > auctionItem.currentPrice) {
      const newBid = {
        auctionId: id,
        bidderName: "New Bidder",
        bidAmount: bid,
        bidTime: new Date().toISOString(),
        UserId: userId
      };

      await axios
        .post("http://localhost:5140/api/Bid/create", newBid)
        .then((res) => {
          getBidList();
          getAuctionDetail();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Bid amount should greater than current price");
    }
  };

  const getAuctionDetail = async () => {
    await axios
      .get(`http://localhost:5140/api/Auction/${id}`)
      .then((res) => {
        setAuctionItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBidList = async () => {
    await axios
      .get(`http://localhost:5140/api/Bid/all/auction/${id}`)
      .then((res) => {
        setBids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrint = () => {
    window.print();
  };
  
  useEffect(() => {
    getAuctionDetail();
    getBidList();
  }, []);

  return (
    <div className="auction-detail-container">
      {/* Carousel for item images */}
      {/* <Carousel className="mb-4">
        {auctionItem.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Auction Item ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel> */}

      <div className="auction-item-details shadow-lg p-4 mb-5 bg-white rounded text-center">
        <h2>{auctionItem.title}</h2>
        <p>{auctionItem.description}</p>
        <p>
          <strong>Starting Price:</strong> ${auctionItem.startingPrice}
        </p>
        <p>
          <strong>Current Price:</strong> ${auctionItem.currentPrice}
        </p>
        <p>
          <strong>Auction Start Time:</strong> {auctionItem.startTime}
        </p>
      </div>

      <div className="bid-history-container text-center">
        <h3>Bid History</h3>
        <ul>
          {bids.map((bidItem) => (
            <li key={bidItem.id}>
              <span>
                Bid ${bidItem.bidAmount} on {""}
                {bidItem.bidTime}
              </span>
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
          <button type="submit" className="btn btn-primary w-100">
            Place Bid
          </button>
        </form>
      </div>
      <div className="text-center mt-4">
        <button onClick={handlePrint} className="btn btn-secondary">
          Print Auction Details and Bids
        </button>
      </div>
    </div>
  );
};

export default AuctionDetail;
