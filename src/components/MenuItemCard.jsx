import React from 'react';

const MenuItemCard = ({ item }) => {
  const handleOrder = () => {
    alert(`You ordered: ${item.name}`);
  };

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="price">{item.price}</span>
      {/* <button onClick={handleOrder}>Order Now</button> */}
    </div>
  );
};

export default MenuItemCard;
