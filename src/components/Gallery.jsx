import React, { useState } from 'react';
import { Cake,  Utensils, Image } from 'lucide-react';

// Replace with actual image imports or URLs
import bday1 from '/bday1.jpg'
import bday2 from '/bday2.jpg'
import bday3 from '/bday3.jpg'
import bday4 from '/bday4.jpg'
import bday5 from '/bday5.jpg'
import tea from '/tea.jpg';
import burger from '/burger.jpg';
import pizza from '/pizza.jpg';
import wine from '/wine.jpg';
import chef from '/chef.jpg';
import dining from '/dining.jpg';
import resturant from '/resturant.jpg';
import gallary from '/gallary.jpg';
import Footer from './Footer';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('birthday');

  const images = {
    birthday: [bday1, bday2, bday3, bday4, bday5],
    promotions: [pizza, wine, tea, burger],
    all: [chef, bday4, dining,bday1, resturant,bday2, pizza, bday3,wine, bday5],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="gallery-page">
    <div className='gallery-banner'>
              
               <img src={gallary} alt='' />
                <h1>Gallery</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero illum totam accusantium a omnis ex eius, quae dicta magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
<div className="gallery-container">
      <div className="gallery-header">
      <h1>Our Gallery</h1>
        <p>Click on a category to view related images.</p>
      </div>

      <div className="category-cards">
        <div
          className={`category-card ${activeCategory === ' all' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          <Image className="icon" />
            <h3>All Moments</h3>
        </div>
        <div
          className={`category-card ${activeCategory === 'promotions' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('promotions')}
        >
          <Utensils className="icon" />
          <h3>Foods</h3>
        </div>
        <div
          className={`category-card ${activeCategory === 'birthday' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('birthday')}
        >
          <Cake className="icon" />
         <h3>Birthday Blast</h3>
        </div>
      </div>

      <div className="gallery-grid">
        {images[activeCategory].map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
