import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItems } from './api';
import { useDispatch } from 'react-redux';
import { add } from './cart';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data: items = [], isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link> - ${item.price}
            <button onClick={() => dispatch(add(item))}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
