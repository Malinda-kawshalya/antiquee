import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import "./Css/Signup.css"; // custom CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null); // For showing error messages
  const [success, setSuccess] = useState(null); // For showing success messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5140/api/User/signUp", formData) // Change to your API URL
      .then((response) => {
        console.log(response);
        setSuccess(response.data.message); // Show success message
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.log(error);
        setError(error.response?.data?.message || "Something went wrong"); // Show error message
        setSuccess(null); // Clear any previous success message
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper shadow-lg p-4 mb-5 bg-white rounded">
        <h2 className="text-center mb-4">Sign Up</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <a href="/login" className="signup-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;