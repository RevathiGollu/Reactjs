import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(ShoppingCartContext);

  const handleAddItem = () => {
    
    const newItem = { id: Date.now(), name: 'New Item', price: 10 };
    addToCart(newItem);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
