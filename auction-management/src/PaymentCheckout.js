import React, { useState, useEffect } from 'react';
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
  const [sdkReady, setSdkReady] = useState(false);

  // Handle payment method selection
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Load PayPal SDK dynamically
  useEffect(() => {
    if (selectedPaymentMethod === 'paypal' && !sdkReady) {
      const addPayPalScript = () => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD`; // Replace with your PayPal client ID
        script.async = true;
        script.onload = () => setSdkReady(true);
        document.body.appendChild(script);
      };

      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [selectedPaymentMethod, sdkReady]);

  // Handle form submission (dummy payment logic)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedPaymentMethod) {
      setPaymentSuccess(true);
    } else {
      alert('Please select a payment method.');
    }
  };

  // PayPal Payment Success Handler
  const handlePaymentSuccess = (details) => {
    console.log('Payment Successful:', details);
    setPaymentSuccess(true);
    alert(`Transaction completed by ${details.payer.name.given_name}`);
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
        <>
          <div className="form-group mb-4">
            <label><strong>Select Payment Method:</strong></label>
            <div className="d-flex">
              <label className="mr-3">
                <input
                  type="radio"
                  value="card"
                  checked={selectedPaymentMethod === 'card'}
                  onChange={handlePaymentMethodChange}
                />
                Card Payment
              </label>
              <label>
                <input
                  type="radio"
                  value="paypal"
                  checked={selectedPaymentMethod === 'paypal'}
                  onChange={handlePaymentMethodChange}
                />
                PayPal
              </label>
            </div>
          </div>

          {selectedPaymentMethod === 'card' && (
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
              <button type="submit" className="btn btn-primary btn-block">
                Pay Now
              </button>
            </form>
          )}

          {selectedPaymentMethod === 'paypal' && (
            <div className="paypal-section">
              {sdkReady ? (
                <div id="paypal-button-container"></div>
              ) : (
                <p>Loading PayPal...</p>
              )}
              {sdkReady &&
                window.paypal.Buttons({
                  createOrder: (data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: winningBidDetails.finalBidAmount.toString(),
                          },
                        },
                      ],
                    });
                  },
                  onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                      handlePaymentSuccess(details);
                    });
                  },
                  onError: (err) => {
                    console.error('PayPal Checkout Error:', err);
                    alert('Payment could not be completed. Please try again.');
                  },
                }).render('#paypal-button-container')}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentCheckout;
