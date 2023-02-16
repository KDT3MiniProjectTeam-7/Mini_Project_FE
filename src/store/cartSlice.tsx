import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  productId: number;
  category: string;
  productName: string;
  companyName: string;
  companyImage: string;
  lowRate?: number;
  highRate?: number;
}
// 일단 initial state에 목업 데이터대로 넣어두겠음

const cart = createSlice({
  name: 'cart',
  initialState: [
    {
      productId: 1234,
      category: 'card',
      productName: '신한카드 OOO',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
    },
    {
      productId: 2345,
      category: 'loan',
      productName: '모바일 프라임론 직장인 대출',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      lowRate: 6.91,
      highRate: 12.71,
    },
    {
      productId: 3456,
      category: 'savings',
      productName: '첫거래우대정기적금',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
    },
    {
      productId: 4567,
      category: 'subscription',
      productName: '청년 우대형 주택청약종합저축',
      companyName: '신한은행',
      companyImage: 'image/logo/shinhan.png',
      highRate: 2.1,
    },
  ] as Item[],
  reducers: {
    addCartItems(state, actions: PayloadAction<Item>) {},
    deleteCartItems(state, actions: PayloadAction<Item>) {},
  },
});

export const { addCartItems, deleteCartItems } = cart.actions;

export default cart;
