import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from './cartSlice';
import userData from './userSlice';
import recommendProducts from './recommendProductsSlice';
import autosave from './autosaveSlice';
import { searchCard, searchLoan, searchSavings, searchSubscription } from './searchSlice';

const persistConfig = {
  key: 'root',
  storage: storage, // 저장 공간
  whitelist: ['cart', 'user', 'autosave', 'searchCard', 'searchLoan', 'searchSavings', 'searchSubscription', 'recommendProducts'], // 유지하고 싶은 값
  blacklist: [], // 유지하지 않을 내용
};

const reducer = combineReducers({
  cart: cart.reducer,
  user: userData.reducer,
  autosave: autosave.reducer,
  searchCard: searchCard.reducer,
  searchLoan: searchLoan.reducer,
  searchSavings: searchSavings.reducer,
  searchSubscription: searchSubscription.reducer,
  recommendProducts:recommendProducts.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ReducerType = ReturnType<typeof reducer>;
