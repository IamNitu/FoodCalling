import React from 'react'
import Footer from './Footer'
import FoodIntro from './FoodIntro'
import aboutimage from '/aboutimage.jpg';
import signature from '/signature.png';
import resturant from '/resturant.jpg'; 
import MessageFromChef from './MessageFromChef';
import Order from './Order';

function AboutPage() {
  return (
    <div className='aboutpage'>
    <div className='about-banner'>
   
      <img src={aboutimage} alt='' />
       <h1>About Us</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero illum totam accusantium a omnis ex eius, quae dicta magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut perspiciatis rerum quae dolore sint ipsa minima molestias expedita dicta nisi!</p>
    </div>

<div className='aboutpage-container'>
    <div className="about-left">
        <img src={resturant} alt="Pizza" className="about-image" />
        <div className="intro-about">
          <h3>We Cook<br />Sandwiches For You</h3>
        </div>
      </div>
   <div className="about-para">
          <p className="about-subtitle">About Our Food</p>
          <h1 className="about-title">The Best Delicious Food Made From Us...</h1>
          <p className="about-description">
            It’s the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. Our restaurant is more than just a place to eat—it’s a destination where exceptional flavors meet a warm, inviting atmosphere. From the moment you walk through the doors, you're greeted with a stylish, comfortable setting that blends modern elegance with a cozy charm.

Experience quick and efficient service from our friendly staff, committed to making every visit seamless and enjoyable.<br/> Whether you're stopping in for a casual lunch, a family dinner, or a romantic evening out, our menu offers something for every palate—expertly prepared using only the finest seasonal ingredients.

We take pride in our attention to detail, from the presentation of each dish to the cleanliness of our space. With a passion for hospitality and a love for great food, we aim to create memorable moments for every guest. At our restaurant, you're not just dining—you’re part of something special.<br/>

Beyond the delicious food, our restaurant is known for its exceptional hospitality and attention to detail. The décor blends rustic charm with modern comfort, creating the perfect setting for any occasion—from family gatherings to date nights. We source our ingredients locally whenever possible, supporting nearby farmers and ensuring every bite bursts with freshness.
          </p>
  
          <div className="about-stats">
            <div className="about-block">
              <span className="about-value light">250+</span>
              <p>Satisfied Clients</p>
            </div>
            <div className="about-block">
              <span className="about-value orange">153+</span>
              <p>Total Food Categories</p>
            </div>
            <div className="about-block">
              <span className="about-value yellow">25+</span>
              <p>Award Win</p>
            </div>
          </div>
  
          <div className="about-footer">
            <div className="signature">
              <img src={signature} alt="Signature" /> {/* optional */}
            </div>
            <div className="foundation">
              Foundation, Since <span>21st Oct , 2019</span>
            </div>
          </div>
</div>

 
    </div>
    <MessageFromChef/>
   

     <div className='ourspecialities'>
      <h1>Our Specialities</h1>
      <Order/>
     </div>

       <Footer/>
    </div>
  )
}

export default AboutPage