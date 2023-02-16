import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cart from './cartSlice';

const reducer = combineReducers({
  cart: cart.reducer,
});

export default configureStore({
  reducer: reducer,
});
