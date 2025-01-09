
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, clear } from './cart';

const Carts = () => {
  const { items, total } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(remove(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={() => dispatch(clear())}>Clear Cart</button>
    </div>
  );
};

export default Carts;
