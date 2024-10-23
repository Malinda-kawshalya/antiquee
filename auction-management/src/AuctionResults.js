import React, { useState } from 'react';
import './Css/AuctionResults.css'; // CSS for Auction Results
import 'bootstrap/dist/css/bootstrap.min.css';

const AuctionResults = () => {
  // Dummy data for auction results
  const auctionResults = {
    itemName: 'Antique Vase',
    winner: 'John Doe',
    finalBidAmount: 1500,
    auctionEndTime: 'Oct 21, 2024 - 05:30 PM',
    paymentStatus: 'Pending',
    shippingStatus: 'Not Shipped',
  };

  const [paymentStatus, setPaymentStatus] = useState(auctionResults.paymentStatus);
  const [shippingStatus, setShippingStatus] = useState(auctionResults.shippingStatus);

  // Function to mark the item as paid
  const handleMarkAsPaid = () => {
    setPaymentStatus('Paid');
  };

  // Function to proceed to shipping
  const handleProceedToShipping = () => {
    if (paymentStatus === 'Paid') {
      setShippingStatus('Shipped');
    } else {
      alert('Payment is not yet completed.');
    }
  };

  return (
    <div className="container auction-results-container mt-5 p-4 shadow-lg">
      <h2 className="text-center mb-4">Auction Results</h2>
      
      <div className="result-details p-4 mb-4 bg-light rounded">
        <h4>Item: {auctionResults.itemName}</h4>
        <p><strong>Winner:</strong> {auctionResults.winner}</p>
        <p><strong>Final Bid Amount:</strong> ${auctionResults.finalBidAmount}</p>
        <p><strong>Auction Ended On:</strong> {auctionResults.auctionEndTime}</p>
        <p><strong>Payment Status:</strong> {paymentStatus}</p>
        <p><strong>Shipping Status:</strong> {shippingStatus}</p>
      </div>

      <div className="actions mb-4 text-center">
        <button className="btn btn-success m-2" onClick={handleMarkAsPaid}>
          Mark as Paid
        </button>
        <button className="btn btn-primary m-2" onClick={handleProceedToShipping}>
          Proceed to Shipping
        </button>
      </div>

      <div className="next-steps bg-white p-4 rounded shadow">
        <h5>Next Steps</h5>
        <ul>
          <li>Complete the payment process to proceed with shipping.</li>
          <li>Once paid, click on "Proceed to Shipping" to arrange for delivery.</li>
        </ul>
      </div>
    </div>
  );
};

export default AuctionResults;
