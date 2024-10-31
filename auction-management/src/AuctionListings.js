import React, { useState, useEffect } from "react";
import "./Css/AuctionListings.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import axios from "axios";

const AuctionListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [auctionItems, setAuctionItems] = useState([]); // Initialize with an empty array

  // Fetch all auction items from the API
  const getAllAuctionList = async () => {
    try {
      const res = await axios.get("http://localhost:5140/api/Auction/all");
      setAuctionItems(res.data);
    } catch (err) {
      console.error("Failed to fetch auction items:", err);
    }
  };

  useEffect(() => {
    getAllAuctionList();
  }, []);

  // Filter and sort auctions
  const filteredItems = auctionItems
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "" || item.category === categoryFilter)
    )
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "closingTime")
        return new Date(a.closingTime) - new Date(b.closingTime);
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="auction-listings-container">
      <div className="action-buttons">
        <Link to="/bid-management" className="btn btn-secondary">
          My Bids
        </Link>
        <Link to="/report" className="btn btn-secondary">
          Go to Report
        </Link>
      </div>
      <h1>Auction Listings</h1>

      {/* Search, Filter, and Sort Options */}
      <div className="filter-sort-options">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Jewelry">Smart Switch</option>
          <option value="Art">Smart Pluge</option>
          <option value="Antiques">Smart Bulbe</option>
          <option value="Collectibles">Remote Controls</option>
        </select>
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="closingTime">Closing Time</option>
        </select>
      </div>

      {/* Display Auction Items */}
      <div className="auction-items">
        {paginatedItems.map((item) => (
          <div key={item.id} className="auction-item">
            <img
              src={`http://localhost:5140${item.image}`}
              alt={item.title}
              className="auction-item-image"
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.startingPrice}</p>
            <Link to={`/auction-detail/${item.id}`} className="bid-now-button">
              Bid Now
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AuctionListings;
