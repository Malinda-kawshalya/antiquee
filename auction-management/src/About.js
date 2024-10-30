// src/AboutUs.js
import React from 'react';
import './Css/About.css'; // Import your CSS file for styling
<<<<<<< HEAD
//import malinda from '#';

const AboutUs = () => {
  const teamMembers = [
    //{ id: 1, name: 'Malinda Kawshalya', role: 'Underrgraduate' , image:malinda },
    { id: 2, name: 'Nithini Jyathilaka', role: 'Underrgraduate' , image: 'path_to_image2.jpg' },
    { id: 3, name: 'Ravindu Pahan', role: 'Underrgraduate', image: 'path_to_image3.jpg' },
    { id: 4, name: 'Chirath Bupa', role: 'Underrgraduate', image: 'path_to_image4.jpg' },
=======

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Malinda Kawshalya', role: 'Underrgraduate' },
    { id: 2, name: 'Nithini Jyathilaka', role: 'Underrgraduate'  },
    { id: 3, name: 'Ravindu Pahan', role: 'Underrgraduate' },
    { id: 4, name: 'Chirath Bupa', role: 'Underrgraduate' },
>>>>>>> 0abb894f18cc48bd0d03b9d48a9945b9bf5e73b0
    
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        
Welcome to Smart Home, your trusted online auction platform for innovative and modern home solutions. At Smart Home, we bring together buyers and sellers, creating a vibrant marketplace for discovering unique, high-quality items that elevate living spaces. Our mission is to empower homeowners, enthusiasts, and sellers with an easy, secure, and exciting way to connect over shared passions for design, technology, and style.

Our platform features a wide range of products, from smart home gadgets and stylish furniture to essential decor and eco-friendly solutions, each accessible through fair and transparent auctions. We prioritize user satisfaction, streamlined bidding, and secure transactions, ensuring that both buyers and sellers enjoy a seamless experience.

At Smart Home, we believe in creating a space where quality meets convenience. Join us in building a smarter, more connected living environment—one auction at a time.
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
