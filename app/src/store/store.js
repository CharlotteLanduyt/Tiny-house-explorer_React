import { configureStore } from '@reduxjs/toolkit';
import products_objects from './reducers/store_products';

const store = configureStore({
  reducer: {
    products: products_objects,
  },
});

export default store;
