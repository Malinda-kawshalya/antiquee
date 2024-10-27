import React, { useState, useEffect } from "react";
import "./Css/AuctionListings.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import axios from "axios";

// Function to create dummy auction items
const createDummyData = () => {
  const categories = ["Art", "Antiques", "Collectibles", "Jewelry"];
  const itemsPerCategory = 51; // 204 items total
  let items = [];

  for (let category of categories) {
    for (let i = 1; i <= itemsPerCategory; i++) {
      items.push({
        id: items.length + 1,
        title: `${category} Item ${i}`,
        price: (Math.random() * 100).toFixed(2),
        category: category,
        closingTime: new Date(Date.now() + Math.random() * 604800000).toISOString(), // random closing time within a week
      });
    }
  }
  return items;
};

const AuctionListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [auctionItems, setAuctionItems] = useState(createDummyData()); // Use dummy data here

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

  // This function can be removed if you're using dummy data only
  const getAllAuctionList = async () => {
    console.log("Get all listings");
    await axios
      .get("http://localhost:5140/api/Auction/all")
      .then((res) => {
        setAuctionItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllAuctionList(); // Uncomment this line if you want to fetch from API later
  }, []);

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
          <option value="Vehicles">Vehicles</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Art">Art</option>
          <option value="Antiques">Antiques</option>
          <option value="Collectibles">Collectibles</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="closingTime">Closing Time</option>
        </select>
      </div>

      {/* Action Buttons in the Top Right Corner */}
      

      {/* Display Auction Items */}
      <div className="auction-items">
        {paginatedItems.map((item) => (
          <div key={item.id} className="auction-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>
              Closing Time: {new Date(item.closingTime).toLocaleDateString()}
            </p>
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
