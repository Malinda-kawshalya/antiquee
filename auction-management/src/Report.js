import React, { useState, useEffect } from 'react';
import './Css/Report.css';

const ReportPage = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch report data from the backend API
  const fetchReportData = async () => {
    try {
      const response = await fetch('http://localhost:5140/api/Report/AuctionReport'); // Update with your endpoint if different
      if (response.ok) {
        const data = await response.json();
        setReportData(data);
      } else {
        console.error('Error fetching report:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching report:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  return (
    <div className="report-container">
      <h1>Auction Report</h1>
      {loading ? (
        <p>Loading report data...</p>
      ) : (
        <table className="report-table">
          <thead>
            <tr>
              <th>Auction Title</th>
              <th>Description</th>
              <th>Starting Price</th>
              <th>Start Time</th>
              <th>Auction Duration</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>${item.startingPrice.toFixed(2)}</td>
                <td>{new Date(item.startTime).toLocaleString()}</td>
                <td>{item.auctionDuration} hrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReportPage;
