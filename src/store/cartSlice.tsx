import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  productId: number;
  category: string;
  productName: string;
  companyName: string;
  companyImage: string;
  bound?: string;
  highRate?: number;
}

const cart = createSlice({
  name: 'cart',
  initialState: [] as Item[],
  reducers: {
    addCartItems(state, actions: PayloadAction<Item>) {},
    deleteCartItems(state, actions: PayloadAction<Item>) {},
  },
});

export const { addCartItems, deleteCartItems } = cart.actions;

export default cart;
