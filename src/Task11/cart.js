// cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    add(state, action) {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    remove(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.total -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clear(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
