import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postCartItems, delCartItems } from '../common/api/Api';

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
    addCartItems(state, actions: PayloadAction<Item>) {
      // 여기서 해야할건 두개임.
      // redux state에 추가하고, api호출
      state.push(actions.payload);
      postCartItems(actions.payload.productId);
    },
    deleteCartItems(state, actions: PayloadAction<Item>) {
      // redux state에서 제거하고, api호출
      let copy = state.filter((item) => item.productId !== actions.payload.productId);
      delCartItems(actions.payload.productId);
      return copy;
    },
    setCartItems(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

export const { addCartItems, deleteCartItems, setCartItems } = cart.actions;

export default cart;
