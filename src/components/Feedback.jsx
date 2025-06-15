import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import feedbackimg from '/feedbackimg.webp'; 


const testimonials = [
  {
    text: "Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.",
    name: "Shristi",
    from: "Birtamod",
    rating: 5,
    image: 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,f_auto,q_60,w_750/v1/classpop/6801005b372c7',
  },
  {
    text: "Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.",
    name: "Rishav",
    from: "Damak",
    rating: 5,
    image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
  },
  {
    text: "Customer service is really fast, and this developer makes great quality themes! I would recommend this theme for all Shopify platforms.",
    name: "Seema",
    from: "Ullabari",
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsR1j5c5rh3Or62MF39b1EffRT1nXnqN4BQ&s',
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      {/* <div className="slider-left">
        <img src={feedbackimg} alt="Customer Group" />
      </div> */}
      <div className="slider-right">
        <h3 className="slider-subtitle">Testimonial</h3>
        <h2 className="slider-title">Customer Say About Us</h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
             <img  className='slider-img' src={testimonial.image} alt={testimonial.alt} />
              <p className="slider-quote">❝ {testimonial.text} ❞</p>
              <div className="slider-rating">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="slider-author">{testimonial.name} - From {testimonial.from}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
