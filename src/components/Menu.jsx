import React, { useState } from 'react';
import MenuItemCard from './MenuItemCard';
import Footer from './Footer';
import menu from '/menu.jpg';
import ReservationForm from './ReservationForm';
import { Search } from 'lucide-react';


const menuItems = [
  { id: 1, name: ' Pizza', price: 'Rs 500', description: 'Classic cheese pizza', image: '/pizza.jpg' },
  { id: 2, name: ' Burger', price: 'Rs 150', description: 'Loaded with fresh veggies', image: '/burger.jpg' },
  { id: 3, name: 'Pasta', price: 'Rs 250', description: 'Creamy white sauce pasta', image: '/pasta.jpg' },
  { id: 4, name: 'Momo', price: 'Rs 160', description: 'Juicy steamed momos', image: '/momo.jpg' },
  { id: 5, name: 'Salad', price: 'Rs 50', description: 'Fresh garden vegetables', image: '/salad.jpg' },
  { id: 6, name: 'Samosa', price: 'Rs 30', description: 'Crispy fried pastry with spiced filling', image: '/samosa.jpg' },
  { id: 7, name: 'Coffee', price: 'Rs 250', description: 'Hot brewed coffee', image: '/coffee.jpg' },
  { id: 8, name: 'Chowin', price: 'Rs 120', description: 'Stir-fried noodles', image: '/cowmin.jpg' },
  { id: 9, name: 'Pakoda', price: 'Rs 30', description: 'Fried snack with gram flour coating', image: '/pakoda.jpg' },
  { id: 10, name: 'Biryani', price: 'Rs 450', description: 'Spiced rice with meat and herbs', image: '/biryani.jpg' },
  { id: 11, name: 'Pancake', price: 'Rs 120', description: 'Fluffy sweet breakfast cakes', image: '/pancake.jpg' },
];


function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matches = menuItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? matches : []);
  };

  const handleSelect = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

const filteredItems = menuItems.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
        <div className='menu-banner'>
       
          <img src={menu} alt='' />
           <h1>Our Menu</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero illum totam accusantium a omnis ex eius, quae dicta magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    <div className="menu-page">

      {/* <h1 className="menu-title">Our Menu</h1> */}

      <div className="search-box">
      <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((item) => (
              <li key={item.id} onClick={() => handleSelect(item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="menu-grid">
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>

     
    </div>
    <ReservationForm/>
    <Footer/>
    </div>
  );
}

export default Menu;
