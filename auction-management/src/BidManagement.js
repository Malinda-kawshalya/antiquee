import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/BidManagement.css'; // Import your custom CSS for additional styling

const BidManagement = () => {
  // Sample bid data
  const [bids, setBids] = useState([
    {
      id: 1,
      item: 'Vintage Watch',
      bidAmount: 750,
      highestBid: 800,
      status: 'Outbid',
      time: 'Oct 22, 2024 - 12:30 PM',
    },
    {
      id: 2,
      item: 'Antique Vase',
      bidAmount: 500,
      highestBid: 500,
      status: 'Winning',
      time: 'Oct 21, 2024 - 3:00 PM',
    },
    {
      id: 3,
      item: 'Designer Handbag',
      bidAmount: 300,
      highestBid: 350,
      status: 'Outbid',
      time: 'Oct 20, 2024 - 9:45 AM',
    },
  ]);

  useEffect(() => {
    // You can add logic to fetch bids from an API or server here.
  }, []);

  return (
    <div className="bid-management-container container">
      <h2 className="text-center mb-4">Your Bids</h2>

      <div className="bid-list shadow-lg p-4 bg-white rounded">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Your Bid</th>
              <th scope="col">Highest Bid</th>
              <th scope="col">Status</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id}>
                <td>{bid.item}</td>
                <td>${bid.bidAmount}</td>
                <td>${bid.highestBid}</td>
                <td className={bid.status === 'Winning' ? 'text-success' : 'text-danger'}>
                  {bid.status}
                </td>
                <td>{bid.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidManagement;
