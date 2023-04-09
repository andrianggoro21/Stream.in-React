import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/styles.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Profile from './pages/Profile'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  
  {
    path: "/signup",
    element: <div><h1>Sign Up</h1></div>,
  },
  {
    path: "/tvshows",
    element: <div><h1>TV Shows</h1></div>,
  },
  {
    path: "/movie",
    element: <div><h1>Movie</h1></div>,
  },
  {
    path: "/newrelease",
    element: <div><h1>New Release</h1></div>,
  },
  {
    path: "/streamin/mostpopular",
    element: <div><h1>Most Popular</h1></div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
