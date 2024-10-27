import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/CreateAuction.css'; // Include additional custom CSS if needed
import axios from 'axios'; // Use Axios for easier API requests
import { Link, useNavigate } from 'react-router-dom';

const CreateAuction = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [auctionDuration, setAuctionDuration] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');

    if(localStorage.getItem('userId') == null || localStorage.getItem('userId') == '' || localStorage.getItem('userId') == undefined)
    {
      alert('You need to login to create an auction')
      navigate('/login');
      return;
    }

    // Simple validation
    if (!title || !description || !startingPrice || !auctionDuration || !image) {
      alert('Please fill in all fields.');
      return;
    }

    // Create form data to send to the server
    const formData = new FormData();
    formData.append('Title', title);
    formData.append('Description', description);
    formData.append('StartingPrice', startingPrice);
    formData.append('AuctionDuration', auctionDuration);
    formData.append('UserId', userId);
    formData.append('Image', image); // Append image file

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5140/api/Auction/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Auction Created Successfully');
    } catch (error) {
      console.error('There was an error creating the auction:', error);
      alert('Failed to create the auction');
    } finally {
      setLoading(false);
      // Reset form after submission
      setTitle('');
      setDescription('');
      setStartingPrice('');
      setAuctionDuration('');
      setImage(null);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Create New Auction</h2>

      <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded">
        <div className="form-group mb-3">
          <label htmlFor="itemTitle" className="form-label">Item Title</label>
          <input
            type="text"
            className="form-control"
            id="itemTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter item title"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="itemDescription" className="form-label">Item Description</label>
          <textarea
            className="form-control"
            id="itemDescription"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter item description"
            required
          ></textarea>
        </div>

        <div className="form-row mb-3">
          <div className="form-group col-md-6">
            <label htmlFor="startingPrice" className="form-label">Starting Price (GBP)</label>
            <input
              type="number"
              className="form-control"
              id="startingPrice"
              value={startingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
              placeholder="Enter starting price"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="auctionDuration" className="form-label">Auction Duration (Days)</label>
            <input
              type="number"
              className="form-control"
              id="auctionDuration"
              value={auctionDuration}
              onChange={(e) => setAuctionDuration(e.target.value)}
              placeholder="Enter auction duration in days"
              required
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="itemImage" className="form-label">Upload Item Image</label>
          <input
            type="file"
            className="form-control"
            id="itemImage"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Creating Auction...' : 'Create Auction'}
        </button>
      </form>
    </div>
  );
};

export default CreateAuction;
