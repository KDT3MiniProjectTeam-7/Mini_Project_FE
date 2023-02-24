import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductAll {
  card : Product[];
  savings : Product[];
  loan : Product[];
  subscription : Product[];
}

export interface Product {
  annualFee?: number;
  benefits?: string[];
  category: string;
  companyImage: string;
  companyName: string;
  productId: number;
  productName: string;
  productURL: string;
  thumbnail: string | undefined;
  highRate?: string;
  lowRate?: string;
  qualification?: string[];
  bound?: string[] | number;
  aboutRate?: string[];
}

const recommendProducts = createSlice({
  name: 'recommendProducts',
  initialState: {} as ProductAll,
  reducers: {
    setRecommendProducts(state, actions: PayloadAction<ProductAll>) {
        return actions.payload;
    },
  },
});

export const { setRecommendProducts } = recommendProducts.actions;

export default recommendProducts;
