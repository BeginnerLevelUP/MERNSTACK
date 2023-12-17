import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/home.jsx';
import Login from './pages/login.jsx';

 const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

