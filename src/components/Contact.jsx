import React, { useState } from 'react';
import contact from '/contact.jpg';
import Footer from './Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert('All fields are required.');
      return;
    }

    alert('Message Sent');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-now">
      <div className='contact-banner'>
        <img src={contact} alt='' />
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero illum totam accusantium a omnis ex eius, quae dicta magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="contact-container">
        <div className="form-section">
          <h2>Leave a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map-section">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114091.67939564973!2d87.59437581532463!3d26.66880719170973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58e14d281c547%3A0xb0d3c98577060f3d!2sDamak!5e0!3m2!1sen!2snp!4v1748181189499!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-info-cards">
        <div className="info-card">
          <MapPin className="info-icon" />
          <h3>Address</h3>
          <p>Bhrikuti Chowk,<br />Damak-06, Jhapa, Nepal</p>
        </div>
        <div className="info-card">
          <Phone className="info-icon" />
          <h3>Phone</h3>
          <p>+977 9800450129<br />023 546789</p>
        </div>
        <div className="info-card">
          <Mail className="info-icon" />
          <h3>Email</h3>
          <p>info@foodcalling.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
