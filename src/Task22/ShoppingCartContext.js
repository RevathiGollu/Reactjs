import React, { createContext, useState, useEffect } from 'react';


const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  
  useEffect(() => {
    const syncCartAcrossTabs = (event) => {
      if (event.key === 'shoppingCart') {
        setCart(JSON.parse(event.newValue));
      }
    };

    window.addEventListener('storage', syncCartAcrossTabs);

    return () => {
      window.removeEventListener('storage', syncCartAcrossTabs);
    };
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== itemId);
      return updatedCart;
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext};
