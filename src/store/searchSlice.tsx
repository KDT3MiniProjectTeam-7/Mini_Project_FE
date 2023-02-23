import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from './cartSlice';

const searchCard = createSlice({
  name: 'searchCard',
  initialState: [] as Item[],
  reducers: {
    addCardResults(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

const searchLoan = createSlice({
  name: 'searchLoan',
  initialState: [] as Item[],
  reducers: {
    addLoanResults(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

const searchSavings = createSlice({
  name: 'searchSavings',
  initialState: [] as Item[],
  reducers: {
    addSavingsResults(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

const searchSubscription = createSlice({
  name: 'searchSubscription',
  initialState: [] as Item[],
  reducers: {
    addSubscriptionResults(state, actions: PayloadAction<Item[]>) {
      return actions.payload;
    },
  },
});

export const { addCardResults } = searchCard.actions;
export const { addLoanResults } = searchLoan.actions;
export const { addSavingsResults } = searchSavings.actions;
export const { addSubscriptionResults } = searchSubscription.actions;

export { searchCard, searchLoan, searchSavings, searchSubscription };
