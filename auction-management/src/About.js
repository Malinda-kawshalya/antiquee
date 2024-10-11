// src/AboutUs.js
import React from 'react';
import './Css/About.css'; // Import your CSS file for styling

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Alice Johnson', role: 'Founder & CEO', image: 'path_to_image1.jpg' },
    { id: 2, name: 'Bob Smith', role: 'CTO', image: 'path_to_image2.jpg' },
    { id: 3, name: 'Charlie Brown', role: 'Lead Designer', image: 'path_to_image3.jpg' },
    { id: 4, name: 'Daisy Miller', role: 'Marketing Manager', image: 'path_to_image4.jpg' },
    { id: 5, name: 'Edward Johnson', role: 'Product Manager', image: 'path_to_image5.jpg' },
    { id: 6, name: 'Fiona White', role: 'Developer', image: 'path_to_image6.jpg' },
    { id: 7, name: 'George Brown', role: 'Sales Manager', image: 'path_to_image7.jpg' },
    { id: 8, name: 'Hannah Davis', role: 'Customer Support', image: 'path_to_image8.jpg' },
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to Auction House, your premier destination for online auctions. 
        Our platform connects buyers and sellers with a wide range of unique and valuable items. 
        Our dedicated team works tirelessly to ensure a seamless auction experience, 
        offering innovative features and exceptional customer support.
      </p>
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
