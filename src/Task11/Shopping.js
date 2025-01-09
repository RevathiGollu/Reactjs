
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import Products from './Products';
import Carts from './Carts';
import Item from './Item';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const queryClient = new QueryClient();

function Shopping() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <nav>
            <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/carts" element={<Carts />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default Shopping;
