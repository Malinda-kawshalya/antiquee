// src/Contact.js
import React, { useState } from 'react';
import './Css/Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted', { name, email, message });
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@smarthomelk.com</p>
          <p><strong>Phone:</strong> 070 11111 50</p>
          <p><strong>Address:</strong> Smart-Home, Pitipana South, Homagama</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
