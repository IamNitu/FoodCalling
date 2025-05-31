import { Truck } from "lucide-react";
import pizza from '/pizza.jpg';
import burger from '/burger.jpg';
import frenchfries from '/frenchfries.png';
import { Link } from 'react-router-dom';


const Order = () => {
  return (
    <div className="card-container">
      {/* Pizza Card */}
      <div className="card card-black card-bg-pizza">
        <div>
          <p className="card-subtitle-yellow">Crispy, Every Bite Taste</p>
          <h2 className="card-title">Delicious & Hot Pizza</h2>
        </div>
        <Link to="/menu" className="card-order">View Menu →</Link>
      </div>

      {/* French Fry Card */}
      <div className="card card-orange card-bg-fries">
        <div>
          <p className="card-subtitle-light">Todays <span className="text-white">Delicious</span></p>
          <h2 className="card-title">French Fry</h2>
          <p className="card-note">This Weekend Only</p>
        </div>
        {/* <button className="card-button">
          <Truck size={16} /> Order Now
        </button> */}

         <Link to="/menu" className="card-order">View Menu →</Link>

      </div>

      {/* Burger Card */}
      <div className="card card-deep-orange card-bg-burger">
        <div>
          <p className="card-subtitle-yellow">Cheesy, Every Bite Taste</p>
          <h2 className="card-title">Burger</h2>
        </div>
        <Link to="/menu" className="card-order">View Menu →</Link>
      </div>
    </div>
  );
};

export default Order;
