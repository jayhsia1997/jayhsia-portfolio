import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routers from "./routers";
import './index.css';


const router = createBrowserRouter(
  routers,
  {
    basename: "/jayhsia-portfolio",
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// if location is root, redirect to /jayhsia-portfolio
if (window.location.pathname === "/") {
  window.location.pathname = "/jayhsia-portfolio";
}
