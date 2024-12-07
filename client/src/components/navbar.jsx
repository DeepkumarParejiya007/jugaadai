import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../all.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils';


const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out successfully");
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  return (
    <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
              <NavLink to="/home">
                  <h2>JugaadAI</h2>
              </NavLink>
          </div>
          <ul className="navbar-links">
              <li>
              <NavLink to="/home"><button>Home</button></NavLink>
              </li>
              <li>
              <NavLink to="/tools"><button>Tools</button></NavLink>
              </li>
              <li>
              <NavLink to="/about"><button>About</button></NavLink>
              </li>
              <li>
                  <button className="logout" onClick={() => { handleLogout()}}> Log Out </button>
              </li>
          </ul>
        </nav>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
