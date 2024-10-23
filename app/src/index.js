import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App';
import Home from "./components/Home.js"
import Product from "./components/Assets/Product.js"
import ErrorPage from "./components/ErrorPage.js"

const router = createBrowserRouter([
  { path: "", element: <App />,  errorElement: <ErrorPage />, children:[
      {path: "/", element: <Home />},
      {path: "product/:id", element: <Product />},
  ]},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
