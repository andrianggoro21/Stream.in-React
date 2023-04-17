import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import WatchList from "./pages/WatchList";
import MovieList from "./pages/MovieList";
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/movielisted/:listID",
        element: <MovieList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
