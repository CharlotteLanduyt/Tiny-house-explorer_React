import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter,RouterProvider} from "react-router-dom";


import { Provider } from 'react-redux';
import store from './store/store.js';


import App from './App';
import ErrorPage from "./components/ErrorPage.js"
import Product from "./components/Template/Product.js"
import AboutUs from './components/AboutUs.js';
import Contact from './components/Contact.js';


const router = createBrowserRouter([
  { path: "/", element: <App />,  errorElement: <ErrorPage />, children:[
      {path: "product/:id/:slug",  errorElement: <ErrorPage />, element: <Product />},
      {path: "about_us",  errorElement: <ErrorPage />, element: <AboutUs />},
      {path: "contact",  errorElement: <ErrorPage />, element: <Contact />},
  ]},
]);


const root = ReactDOM.createRoot( document.getElementById('root'));

root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);
