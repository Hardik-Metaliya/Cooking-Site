import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container container">
      <h2>About Us</h2>
      <p>
        We are a passionate team dedicated to providing the best culinary
        experiences. Our mission is to bring exceptional recipes and cooking
        inspiration to food enthusiasts around the world.
      </p>
      <h3>Our Team</h3>
      <ul>
        <li>John Doe - Co-Founder</li>
        <li>Jane Smith - Chef</li>
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};

export default AboutUs;
