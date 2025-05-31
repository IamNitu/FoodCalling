import React from 'react';
import chef from '/chef.jpg'; // Replace with your actual image path

const MessageFromChef = () => {
  return (
    <div className="chef-card">
      <div className="chef-card-image">
        <img src={chef} alt="Chef" />
      </div>
      <div className="chef-card-content">
        <p className="chef-card-subtitle">A Word from Our Chef</p>
        <h2 className="chef-card-title">Crafted With Passion, Served With Pride</h2>
        <p className="chef-card-description">
          At our restaurant, food is more than just a meal—it's an experience. We blend passion with precision to create dishes that are
          both flavorful and heartfelt. Our commitment to quality starts with the freshest ingredients and ends with a satisfied guest.
        </p>
        <p className="chef-card-description">
          Every plate tells a story, and we’re honored to have you as part of our culinary journey. Thank you for trusting us to serve you.
        </p>
        <div className="chef-card-signature">
          <p className="chef-name">Chef Sanji</p>
          <span className="chef-role">Head Chef & Culinary Director</span>
        </div>
      </div>
    </div>
  );
};

export default MessageFromChef;
