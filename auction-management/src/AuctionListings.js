import React, { useState } from 'react';
import './Css/AuctionListings.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const AuctionListings = () => {
  // Sample auction data (replace with real data from an API or backend)
  const auctionItems = [
    { id: 1, title: 'Vintage Car', price: 10000, category: 'Vehicles', closingTime: '2024-10-10' },
    { id: 2, title: 'Antique Jewelry', price: 5000, category: 'Jewelry', closingTime: '2024-09-30' },
    { id: 3, title: 'Modern Art', price: 2000, category: 'Art', closingTime: '2024-09-29' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter and sort auctions
  const filteredItems = auctionItems
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (categoryFilter === '' || item.category === categoryFilter))
    .sort((a, b) => {
      if (sortOption === 'price') return a.price - b.price;
      if (sortOption === 'closingTime') return new Date(a.closingTime) - new Date(b.closingTime);
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="auction-listings-container">
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
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Closing Time: {new Date(item.closingTime).toLocaleDateString()}</p>
            <Link to="/auction-detail" className="bid-now-button">Bid Now</Link>
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
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Auction Results Button */}
      <div className="Bid-Management text-center mt-4">
        <Link to="/bid-management" className="btn btn-primary">My Bids</Link>
      </div>

      {/* Report Page Button */}
      <div className="Report-Page text-center mt-4">
        <Link to="/report" className="btn btn-secondary">Go to Report</Link>
      </div>
    </div>
  );
};

export default AuctionListings;
