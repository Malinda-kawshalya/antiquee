// src/Profile.js
import React, { useState } from 'react';
import './Css/Profile.css'; // Import CSS for styling

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  // User details state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, New York, NY',
    paymentMethod: 'Visa **** 1234',
  });

  // Handler for toggling edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Handler for updating user details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handler for saving changes
  const handleSave = () => {
    setEditMode(false);
    // Save the updated user details (you can add API calls here)
    console.log('Saved user details:', user);
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-details">
        <div className="detail-item">
          <label htmlFor="name">Name:</label>
          {editMode ? (
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="detail-item">
          <label htmlFor="email">Email:</label>
          {editMode ? (
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div className="detail-item">
          <label htmlFor="address">Address:</label>
          {editMode ? (
            <input
              type="text"
              id="address"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          ) : (
            <p>{user.address}</p>
          )}
        </div>

        <div className="detail-item">
          <label htmlFor="paymentMethod">Payment Method:</label>
          {editMode ? (
            <input
              type="text"
              id="paymentMethod"
              name="paymentMethod"
              value={user.paymentMethod}
              onChange={handleChange}
            />
          ) : (
            <p>{user.paymentMethod}</p>
          )}
        </div>

        <div className="profile-actions">
          {editMode ? (
            <>
              <button onClick={handleSave} className="btn btn-save">
                Save
              </button>
              <button onClick={toggleEditMode} className="btn btn-cancel">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={toggleEditMode} className="btn btn-edit">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
