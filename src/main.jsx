import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/streamin",
    element: <App />,
  },
  {
    path: "/streamin/signin",
    element: <div><h1>Sign In</h1></div>,
  },
  {
    path: "/streamin/signup",
    element: <div><h1>Sign Up</h1></div>,
  },
  {
    path: "/streamin/tvshows",
    element: <div><h1>TV Shows</h1></div>,
  },
  {
    path: "/streamin/movie",
    element: <div><h1>Movie</h1></div>,
  },
  {
    path: "/streamin/newrelease",
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
