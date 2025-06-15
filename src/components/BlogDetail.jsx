import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';

 const testimonials = [
  {
    text: "Our chef brings passion, creativity, and years of experience to every dish served.",
    name: "Subham",
    from: "Birtamod",
    image: 'https://i.pinimg.com/736x/7c/59/1b/7c591baed35e099d1100869448e264f6.jpg',
  },
  {
     text: "Our chef brings passion, creativity, and years of experience to every dish served.",
    name: "Priyank",
    from: "Damak",
    image: 'https://i.pinimg.com/736x/04/7b/64/047b645d9773617032cf901c949b27b3.jpg',
  },
];


const BlogDetail = () => {
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
    <div className="blog-detail-container">
      <div className="blog-hero">
        <img src="/pasta.jpg" alt="Perfect Pasta" />
        <div className="overlay">
          <h1>Chef’s Secret: Crafting the Perfect Pasta</h1>
          <p className="subtitle">Discover insider techniques and the love behind every strand of handmade pasta.</p>
        </div>
      </div>

      <div className="blog-content">
       <div className="section intro">
  <h2>Introduction</h2>
  <div className="intro-content">
    <img src="/pasta1.jpg" alt="Chef making pasta" className="intro-image" />
<p>
  Pasta is more than just a food — it’s an experience rooted in centuries of tradition. Across Italian kitchens, 
  the process of making pasta by hand has been passed down from generation to generation. What begins as a humble 
  mix of flour and eggs transforms into delicate strands of culinary art with love, technique, and patience. <br/><br/>
  In a fast-paced world, handmade pasta reminds us to slow down and appreciate texture, taste, and craftsmanship. 
  Whether you’re cooking at home or dining with us, understanding what goes into making the perfect pasta enhances 
  your appreciation of every bite. Each shape and style of pasta serves a purpose, designed to hold sauces in just 
  the right way and complement every ingredient on the plate. From the rich ribbons of tagliatelle to the satisfying 
  bite of orecchiette, pasta tells a story of culture, care, and culinary pride. <br/><br/>At its heart, pasta is a celebration — 
  of flavors, family, and timeless tradition. It invites us to gather around the table, to share laughter, conversation, 
  and the simple joy of a well-cooked meal. The aroma of fresh pasta simmering in a savory sauce has the power to evoke 
  memories and create new ones. It’s not just food — it’s comfort, connection, and a little bit of magic on every plate.
    In every forkful, there’s a tribute to generations past and a promise to future ones. So the next time you savor a bowl 
  of pasta, remember — you’re not just tasting a dish, you’re experiencing a legacy. And that legacy continues, one 
  handmade piece at a time.
  <br/><br/>
  At our restaurant, we honor this rich tradition by crafting pasta with the same care and dedication found in Italian homes. 
  Our chefs treat each batch as a labor of love — kneading, rolling, and shaping every piece with precision and pride. 
  We source the finest ingredients, from farm-fresh eggs to high-quality semolina flour, ensuring authenticity in every bite. 
  Whether it's a classic like spaghetti alla carbonara or a seasonal special infused with local flavors, our pasta dishes are 
  made to bring people together. 
</p>


  </div>
</div>

<div className="pasta-feedback-section">
  {/* Left: Key Points Section */}
  <div className="section key-points">
    <h2>What Makes Pasta Perfect?</h2>
    <ul>
      <li><strong>Flour Selection:</strong> Use finely ground semolina or “00” flour for the best texture.</li>
      <li><strong>Egg-to-Flour Ratio:</strong> A traditional ratio of 1 egg per 100g of flour provides ideal elasticity.</li>
      <li><strong>Kneading:</strong> Knead the dough for at least 10–15 minutes to develop the gluten.</li>
      <li><strong>Rest Time:</strong> Let the dough rest for 30 minutes to relax and absorb moisture.</li>
      <li><strong>Rolling:</strong> Roll the dough evenly and thinly using a pasta machine or rolling pin.</li>
      <li><strong>Cutting:</strong> Shape into fettuccine, tagliatelle, ravioli, or any form you like.</li>
    </ul>
  </div>

  {/* Right: Testimonial Slider */}
  <div className="blogslider-right">
    <h3 className="blogslider-title">Meet Our Chef</h3>

    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="blogtestimonial-slide">
          <img className="blogslider-img" src={testimonial.image} alt={testimonial.alt} />
          <p className="blogslider-author">{testimonial.name} - From {testimonial.from}</p>
        <p className="blogslider-quote">❝ {testimonial.text} ❞</p> 
        </div>
      ))}
    </Slider>
  </div>
</div>

        
<div className="tips-funfacts-container">
  <div className="section tips">
    <h2>Pro Tips from Our Chef</h2>
    <ul>
      <li><strong>Use Fresh Herbs:</strong> Basil, oregano, and thyme enhance flavor in homemade sauces.</li>
      <li><strong>Don't Overcook:</strong> Boil pasta until al dente — firm to the bite.</li>
      <li><strong>Save Pasta Water:</strong> The starchy water helps thicken sauces and bind ingredients.</li>
      <li><strong>Pair Properly:</strong> Pair thick sauces with ridged pasta and thin sauces with smooth pasta.</li>
    </ul>
  </div>

  <div className="section fun-facts">
    <h2>Fun Facts</h2>
    <ul>
      <li>Italy has over 350 different types of pasta.</li>
      <li>October 25 is celebrated as World Pasta Day!</li>
      <li>The word “pasta” comes from the Latin word *paste*, meaning dough.</li>
    </ul>
  </div>
</div>

        

       <div className="section conclusion">
  <h2>Conclusion</h2>
  <p>
    Pasta making is an expression of creativity, culture, and care. Whether you're making it at home or enjoying
    it at our restaurant, we hope you appreciate the heart that goes into every bite. Every strand, swirl, and
    stuffed pocket carries with it a tradition of hospitality and love — the kind that turns meals into moments
    and recipes into memories. <br/><br/>
    As you twirl your fork through a plate of our handcrafted pasta, know that it’s more than just a dish — it's
    the result of time-honored techniques, fresh ingredients, and a deep respect for culinary heritage. We invite
    you to savor not only the taste, but the story behind it. <br/><br/>
    Thank you for joining us on this flavorful journey. We look forward to welcoming you to our kitchen — where
    every meal is made with passion, and every guest is treated like family.
  </p>
</div>

      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
