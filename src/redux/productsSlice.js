import { createSlice } from '@reduxjs/toolkit';
import Products from '../data/products.json';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: Products,
    money: 100000000000,
  },
  reducers: {}
});

export const productsSelector = state => state.products.items;
export const moneySelector = state => state.products.money;

export default productsSlice.reducer;