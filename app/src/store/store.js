// Import necessary function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import reducers for managing products and testimonials
import products_objects from './reducers/store_products'; // Reducer for product data
import testimonials_objects from './reducers/store_testimonials'; // Reducer for testimonial data

// Configure the Redux store with the imported reducers
const store = configureStore({
  reducer: {
    products: products_objects, // Map the products reducer to the products slice of the state
    testimonials: testimonials_objects, // Map the testimonials reducer to the testimonials slice of the state
  },
});

// Export the configured store for use in the application
export default store;
