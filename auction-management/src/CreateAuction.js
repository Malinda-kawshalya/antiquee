import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/CreateAuction.css'; // Include additional custom CSS if needed

const CreateAuction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [auctionDuration, setAuctionDuration] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !description || !startingPrice || !auctionDuration) {
      alert('Please fill in all fields.');
      return;
    }

    // Logic for form submission can be added here
    // This is where you'll typically handle the API call to create the auction
    alert(`Auction Created: ${title} for ${startingPrice} GBP`);

    // Reset form after submission
    setTitle('');
    setDescription('');
    setStartingPrice('');
    setAuctionDuration('');
    setImage(null);
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
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
