import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cart from './cartSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userData from './userSlice';

const persistConfig = {
  key: 'root',
  storage: storage, // 저장 공간
  whitelist: ['cart' , 'user'], // 유지하고 싶은 값
  blacklist: [], // 유지하지 않을 내용
};

const reducer = combineReducers({
  cart: cart.reducer,
  user: userData.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
