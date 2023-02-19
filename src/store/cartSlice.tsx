import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  productId: number;
  category: string;
  productName: string;
  companyName: string;
  companyImage: string;
  thumbnail?: string;
  lowRate?: number;
  highRate?: number;
  bound?: string;
  primeRate?: number;
  basicRate?: number;
  annualFee?: number;
  benefits?: string[];
}

const cart = createSlice({
  name: 'cart',
  initialState: [] as Item[],
  reducers: {
    addCartItems(state, actions: PayloadAction<Item>) {},
    deleteCartItems(state, actions: PayloadAction<Item>) {},
    setCartItems(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

export const { addCartItems, deleteCartItems, setCartItems } = cart.actions;

export default cart;
