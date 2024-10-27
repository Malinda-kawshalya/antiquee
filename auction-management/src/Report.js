import React, { useState, useEffect } from "react";
import "./Css/Report.css"; // Keep this for any custom styles
import axios from "axios";
import { Card, Row, Col, Spinner, Alert, Button } from 'react-bootstrap'; // Import Bootstrap components

const ReportPage = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch report data from the backend API
  const fetchReportData = async () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      setLoading(true);
      await axios
        .get(`http://localhost:5140/api/Auction/user/${userId}/auctions`)
        .then((res) => {
          console.log(res.data);
          setReportData(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("Please log in first");
      return;
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-container container mt-5">
      <h1>Auction Report</h1>
      <Button variant="primary" onClick={handlePrint} className="mb-3">
        Print Report
      </Button>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row className="g-4">
          {reportData.length === 0 ? (
            <Alert variant="warning">No auction data available.</Alert>
          ) : (
            reportData.map((item) => (
              <Col md={6} key={item.auction.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.auction.title}</Card.Title>
                    <Card.Text>
                      <strong>Description:</strong> {item.auction.description}
                    </Card.Text>
                    <Card.Text>
                      <strong>Starting Price:</strong> ${item.auction.startingPrice}
                    </Card.Text>
                    <Card.Text>
                      <strong>Current Price:</strong> ${item.auction.currentPrice}
                    </Card.Text>
                    <Card.Text>
                      <strong>Auction Duration:</strong> {item.auction.auctionDuration} minutes
                    </Card.Text>
                    
                    <h5>Bid History</h5>
                    {item.bids.length === 0 ? (
                      <Alert variant="secondary">No bids placed for this auction.</Alert>
                    ) : (
                      <ul className="list-group">
                        {item.bids.map((bid) => (
                          <li key={bid.id} className="list-group-item">
                            <strong>Bid Amount:</strong> ${bid.bidAmount} <br />
                            <strong>Bid Time:</strong> {new Date(bid.bidTime).toLocaleString()}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      )}
    </div>
  );
};

export default ReportPage;
