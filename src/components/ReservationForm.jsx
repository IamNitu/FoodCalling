import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ReservationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Message Sent"); // Show alert
  };

  return (
    <div className="reservation-container">
      <div className="reservation-left">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Reservation Table & Enjoy Dining Table</h1>

        <div className="contact-item">
          <div className="icon-circle">
            <Phone size={20} color="#000" />
          </div>
          <div>
            <p className="label">for booking</p>
            <p className="text">+977 9800450129</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <Mail size={20} color="#000" />
          </div>
          <div>
            <p className="label">for private dining</p>
            <p className="text">info@foodcalling.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <MapPin size={20} color="#000" />
          </div>
          <div>
            <p className="label">location</p>
            <p className="text">Damak-06, Jhapa, Nepal</p>
          </div>
        </div>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="No of Guest" />
        <div className="row">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone No" />
        </div>
        <div className="row">
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Time" />
        </div>
        <button type="submit" className="book-now">Book Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;
