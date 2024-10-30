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
