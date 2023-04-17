import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import Logo from "../assets/images/logo2.png";

const API_KEY = import.meta.env.VITE_TMDB_APIKEY

function Navbar() {
  const [username, setUsername] = useState();

  useEffect(() => {
    if (localStorage.getItem("sessionID")) {
      const getAccount = async () => {
        try {
          let response = await axios.get(
            `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${localStorage.getItem(
              "sessionID"
            )}`
          );
          setUsername(response.data.username);
        } catch (error) {
          console.error(error);
        }
      };
      getAccount();
    }
  }, []);

  const renderLoginLogout = () => {
    if (localStorage.getItem("sessionID")) {
      const handleLogout = async () => {
        try {
          await axios({
            method: "delete",
            url: `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`,
            data: {
              session_id: localStorage.getItem("sessionID"),
            },
          });
        } catch (error) {
          console.log(error);
        }
        localStorage.removeItem("sessionID");
        window.location.href = "/";
      };
      return (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/watchlist">
              Watch List
            </a>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </>
      );
    }
    return (
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
    );
  };

  const renderUserName = () => {
    return (
      <>
        <span className="navbar-text">{username}</span>
      </>
    );
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark background-color">
      <div className="container-md">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            {renderLoginLogout()}
          </ul>
          {renderUserName()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
