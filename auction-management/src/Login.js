import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Css/Login.css';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For displaying error messages
  const [success, setSuccess] = useState(null); // For displaying success messages

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:5140/api/User/login', { email, password }); // Replace with your backend URL
      console.log('Login successful:', response.data);
      setSuccess('Login successful!'); // Set success message
      localStorage.setItem('userId', response.data.user.id)
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password'); // Show error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>

      <div className="extra-options">
        
        <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;

