import React from 'react';
import pizza from '/pizza.jpg'; // Replace with the real image path
import signature from '/signature.png'
const FoodIntro = () => {
  return (
    <section className="intro-section">
      <div className="about-lefty">
        <img src={pizza} alt="Pizza" className="foodintro-image" />
        <div className="intro-banner">
          <h3>We Cook<br />Sandwiches For You</h3>
        </div>
      </div>
      <div className="intro-right">
        <p className="intro-subtitle">About Our Food</p>
        <h1 className="intro-title">The Best Delicious Food Made From Us...</h1>
        <p className="intro-description">
          It’s the perfect dining experience where every dish is crafted with fresh, high-quality dining experience.
          Experience quick and efficient service that ensures your food is served fresh. It’s the place where every dish
          is crafted with fresh, high-quality ingredients.
        </p>

        <div className="intro-stats">
          <div className="stat-block">
            <span className="stat-value light">250+</span>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-block">
            <span className="stat-value orange">153+</span>
            <p>Total Food Categories</p>
          </div>
          <div className="stat-block">
            <span className="stat-value yellow">25+</span>
            <p>Award Win</p>
          </div>
        </div>

        <div className="intro-footer">
          <div className="signature">
            <img src={signature} alt="Signature" /> {/* optional */}
          </div>
          <div className="foundation">
            Foundation, Since <span>21st Oct , 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodIntro;
