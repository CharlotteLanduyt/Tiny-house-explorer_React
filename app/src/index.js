import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter,RouterProvider} from "react-router-dom";


import { Provider } from 'react-redux';
import store from './store/store.js';


import App from './App';
import Home from "./components/Home.js"
import Product from "./components/Template/Product.js"
import ErrorPage from "./components/ErrorPage.js"

const router = createBrowserRouter([
  { path: "/", element: <App />,  errorElement: <ErrorPage />, children:[
      {path: "", element: <Home />},
      {path: "product/:id", element: <Product />},
  ]},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);
