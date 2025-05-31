import React from "react";
import { Link } from "react-router-dom";


const blogData = [
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "12 Healthy Fruits and Vegetables Must-Haves to Stock Your Fridge",
    date: "16th Nov 2024",
    author: "Admin",
  },
  {
    image: "https://i.pinimg.com/736x/05/f1/5e/05f15ee34e358bd480bded8c041cd688.jpg",
    title: "Orange Fresh Juice Nutrition Facts, Calories and Health Benefits",
    date: "16th Nov 2024",
    author: "Admin",
  },
  {
    image: "https://i.pinimg.com/736x/e0/fb/ce/e0fbcef8610fcceb74fd39a091859892.jpg",
    title: "Great bulk recipes to help use all your organic vegetables",
    date: "16th Nov 2024",
    author: "Admin",
  },
  {
    image: "https://i.pinimg.com/736x/27/db/a6/27dba67f82c3ffe0e09a6e50739794c2.jpg",
    title: "Great bulk recipes to help use all your organic vegetables",
    date: "16th Nov 2024",
    author: "Admin",
  },
  {
    image: "https://i.pinimg.com/736x/ce/8c/f1/ce8cf1258eaa31f66136ecf7e8121b6b.jpg",
    title: "Great bulk recipes to help use all your organic vegetables",
    date: "16th Nov 2024",
    author: "Admin",
  },
];

const BlogCard = () => {
  return (
    <section className="blog-section">
      <p className="blog-subtitle">Latest News</p>
      <h2 className="blog-title">From Our Blog</h2>
      <div className="blog-card-container">
        {blogData.map((post, index) => (
          <div className="blog-card" key={index}>
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-meta">
              <span>👤 BY {post.author}</span>
              <span>📅 {post.date}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
          <Link to={`/blogs/${post.id}`} className="blog-readmore">Read more →</Link>
  
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
