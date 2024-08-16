// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers...
  },
});

export default store;

