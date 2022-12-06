import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products.json';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
    totalMoney: 100000000000,
    currentMoney: 100000000000,
  },
  reducers: {
    updateMoney: (state, action) => {
      const { item, count } = action.payload;
      const product = state.items.find((product) => product.id === item);
      product.count = count;

      let money = 0;
      state.items.map((product) => money += product.price * product.count);

      state.totalMoney = state.currentMoney - money;
    }
  },
});

export const productsSelector = state => state.products.items;
export const moneySelector = state => state.products.totalMoney;
export const currentMoneySelector = state => state.products.currentMoney;

export const { updateMoney } = productsSlice.actions;

export default productsSlice.reducer;