// Import necessary libraries and modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Provider to pass the Redux store
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Router for handling navigation

// Import global styles
import './style/Index.sass'; // Import main styles for the application

// Import the Redux store configuration
import store from './store/store.js'; // Import the configured Redux store

// Import page components
import Base from './pages/Base.js'; // Base layout or main component
import ErrorPage from './pages/ErrorPage.js'; // Error handling component
import Product from './pages/Product.js'; // Component to display individual products
import AboutUs from './pages/AboutUs.js'; // About Us page component
import Contact from './pages/Contact.js'; // Contact page component

// Define application routes
const routes = [
  {
    path: '/', // Base path
    element: <Base />, // Component to render at the base path
    errorElement: <ErrorPage />, // Component to display if there's an error
    children: [ // Nested routes
      { path: 'product/:id/:slug', element: <Product />, errorElement: <ErrorPage /> }, // Dynamic route for product details
      { path: 'about_us', element: <AboutUs />, errorElement: <ErrorPage /> }, // Route for About Us page
      { path: 'contact', element: <Contact />, errorElement: <ErrorPage /> }, // Route for Contact page
    ],
  },
];

// Create the router instance with the defined routes
const router = createBrowserRouter(routes);

// Get the root element from the DOM to render the application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root for React

// Render the application
root.render(
  <Provider store={store}> {/* Wrap the application with Redux Provider to access the store */}
    <RouterProvider router={router} /> {/* Provide the router for navigation */}
  </Provider>
);
