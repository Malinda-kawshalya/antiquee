import React, { useState } from 'react';
import './Css/PaymentCheckout.css'; // Custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentCheckout = () => {
  // Dummy data for the winning bid
  const winningBidDetails = {
    itemName: 'Antique Vase',
    finalBidAmount: 1500,
    auctionEndTime: 'Oct 21, 2024 - 05:30 PM',
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Handle payment method selection
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Handle form submission (dummy payment logic)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedPaymentMethod) {
      setPaymentSuccess(true);
      // Add payment processing logic here (API call to a payment gateway)
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="container payment-checkout-container mt-5 p-4 shadow-lg">
      <h2 className="text-center mb-4">Payment and Checkout</h2>

      <div className="checkout-details p-4 mb-4 bg-light rounded">
        <h4>Item: {winningBidDetails.itemName}</h4>
        <p><strong>Final Bid Amount:</strong> ${winningBidDetails.finalBidAmount}</p>
        <p><strong>Auction Ended On:</strong> {winningBidDetails.auctionEndTime}</p>
      </div>

      {paymentSuccess ? (
        <div className="alert alert-success text-center" role="alert">
          Payment Successful! Thank you for your purchase.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group mb-3">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              className="form-control"
              placeholder="Enter your card number"
              required
            />
          </div>

          <div className="form-row mb-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  className="form-control"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="paymentMethod">Select Payment Method</label>
            <select
              id="paymentMethod"
              className="form-control"
              value={selectedPaymentMethod}
              onChange={handlePaymentMethodChange}
              required
            >
              <option value="">Choose payment method...</option>
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
              <option value="creditCard">Credit Card</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentCheckout;
