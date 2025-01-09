// Item.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItemById } from './api';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './cart';

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: item, isLoading } = useQuery(['item', id], () => getItemById(Number(id)));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <button onClick={() => dispatch(add(item))}>Add to Cart</button>
    </div>
  );
};

export default Item;
