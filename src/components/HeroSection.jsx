import React, { useState } from "react";
import food from "/food.jpeg";
import { Mail, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert("Subscribed successfully!");
    setEmail(""); // Clear input
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${food})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for better text contrast */}
      <div className="hero-overlay" />

      <div className="hero-left">
        <p className="starting-price">Starting at Rs 600.00</p>
        <h1 className="hero-title">The best Food Collection 2025</h1>
        <p className="hero-offer">
          Exclusive offer <span className="highlight">-35%</span> off this week
        </p>
        {/* <button className="order-btn">
          <ShoppingCart className="icon" /> Order Now
        </button> */}

        <div className="subscribe-box">
          <Mail className="email-icon" />
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe-btn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="discount-overlay">
          <div className="discount-circle">
            <p className="discount-label">UPTO</p>
            <h2 className="discount-percent">20%</h2>
            <p className="discount-text">DISCOUNT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
