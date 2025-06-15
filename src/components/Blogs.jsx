import React, { useState } from 'react';
// import { Calendar, User, Clock } from 'lucide-react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const blogData = [
 {
    id: 1,
    title: "Romantic Nights & Wine Pairings",
    description: "How to turn any dinner into a special occasion with the right bottle of wine.A heartfelt toast, adds warmth and a sense of occasion.",
    image: "/dining.jpg",
    category: "Dining Experience",
    // author: "Sommelier Ella",
    // date: "May 14, 2025",
    // readTime: "2 min",
    featured: false,
  },

   {
    id: 2,
    title: "12 Healthy Fruits and Vegetables Must-Haves to Stock Your Fridge",
    description: "Discover fruits and vegetables that should always be in your fridge for a healthier lifestyle.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Kitchen Secrets",
    // author: "Admin",
    // date: "16th Nov 2024",
    // readTime: "3 min",
    featured: false,
  },
   {
    id: 3,
    title: "Orange Fresh Juice Nutrition Facts, Calories and Health Benefits",
    description: "Learn the nutritional value, calorie content, and amazing health benefits of fresh orange juice.",
    image: "https://i.pinimg.com/736x/05/f1/5e/05f15ee34e358bd480bded8c041cd688.jpg",
    category: "Sustainability",
    // author: "Admin",
    // date: "16th Nov 2024",
    // readTime: "2 min",
    featured: false,
  },

    {
    id: 4,
    title: "Behind the Bar: Our Signature Cocktails",
    description: "Discover how we craft our best-selling cocktails using fresh herbs and homemade infusions.",
    image: "https://i.pinimg.com/736x/8b/c4/78/8bc478c9f38c58382b328df6b1a1a6da.jpg",
    category: "Drinks",
    // author: "Mixologist Mira",
    // date: "May 20, 2025",
    // readTime: "3 min",
    featured: false,
  },

  {
    id: 5,
    title: "Chef’s Secret: Crafting the Perfect Pasta",
    description: "Step inside the kitchen with our executive chef and discover the tricks to mastering handmade pasta.",
    image: "/pasta1.jpg",
    category: "Dining Experience",
    // author: "Chef Antonio",
    // date: "May 24, 2025",
    // readTime: "4 min",
    featured: true,
  },

  {
    id: 6,
    title: "Local Sourcing: Why It Matters",
    description: "We partner with local farmers to bring you the freshest ingredients.Each dish tells a story of local effort and passion making your dining experience more meaningful.",
    image: "https://i.pinimg.com/736x/70/f6/63/70f663fffd3a64dc9f4d9480cfa92b00.jpg",
    category:"Kitchen Secrets",
    // author: "Farm to Fork",
    // date: "May 18, 2025",
    // readTime: "5 min",
    featured: false,
  },
 
];

const categories = ["All", "Kitchen Secrets", "Drinks", "Sustainability", "Dining Experience"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = selectedCategory === "All"
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory);

  const featured = blogData.find(blog => blog.featured);

  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <img src="/blogs.jpg" alt="Blog Hero" />
        <div className="blogs-overlay">
          <h1> Blogs</h1>
          <p>From our kitchen to your table — stories, recipes, and restaurant secrets.</p>
        </div>
      </div>

      <div className="featured-blogs">
        <img src={featured.image} alt={featured.title} />
        <div className="featured-contents">
          <p className="categories">{featured.category}</p>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          {/* <div className="meta">
            <span><User size={14} /> {featured.author}</span>
            <span><Calendar size={14} /> {featured.date}</span>
            <span><Clock size={14} /> {featured.readTime}</span>
          </div> */}
<Link to={`/blogs/${featured.id}`} className="read-more">Read Full Article →</Link>

        </div>
      </div>

      <div className="blogs-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blogs-grid">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blogs-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blogs-info">
              <p className="categories">{blog.category}</p>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              {/* <div className="meta">
                <span><User size={14} /> {blog.author}</span>
                <span><Calendar size={14} /> {blog.date}</span>
                <span><Clock size={14} /> {blog.readTime}</span>
              </div> */}

<a href={`/blogs/${blog.id}`} className="read-more">Read More →</a>

            </div>
          </div>
        ))}
      </div>
     
      <Footer/>
    </div>
  );
};

export default Blogs;
