import React from 'react';
import { ShoppingCartProvider } from './ShoppingCartContext';
import ShoppingCart from './ShoppingCart';

console.log('Shop component:', Shop);

function Shop() {
  return (
    <ShoppingCartProvider>
      <div>
        <h1>Shopping Cart Sync Across Tabs</h1>
        <ShoppingCart />
      </div>
    </ShoppingCartProvider>
  );
}

export default Shop;
