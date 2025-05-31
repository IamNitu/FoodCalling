import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>FoodCalling</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque odit nostrum rem molestias illo blanditiis deserunt expedita quas harum tempora. Eum illo velit libero suscipit ducimus cupiditate doloremque corrupti dolorum!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@foodCalling.com</p>
          <p>Phone: +977 9800450129</p>
          <p>Address: Damak-06, Jhapa, Nepal</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
                    <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FoodCalling. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
