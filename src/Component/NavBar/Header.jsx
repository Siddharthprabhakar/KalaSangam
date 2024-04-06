import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initially user is not logged in
  const [userName, setUserName] = useState('');

  // Function to handle user login
  const handleLogin = () => {
    // Implement your login logic here
    const userDetails = JSON.parse(sessionStorage.getItem("user_details"));
    setUserName(userDetails.username); // Set the user's name after successful login
    setIsLoggedIn(true); // Set isLoggedIn to true after successful login
    console.log(userDetails);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsSearchActive(false);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav className="fixed-navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          कलाSangam
        </Link>
      </div>
      <div className={`nav-items ${isActive ? 'active' : ''}`}>
        <li><a href="/product">Products</a></li>
        <li><a href="/sell-creation" style={{ color: "white" }}>Sell Your product</a></li>
        <li><a href="/aboutus">About</a></li>
      </div>
      <div className="search-icon">
      {isLoggedIn ? ( 
          <button>
            <Link to="/profile"></Link>
          </button>
          ) : (
            <button onClick={handleLogin} style={{ background: "transparent" }}>
            <Link to="/login" >
              <FontAwesomeIcon icon={faUser} /> 
            </Link>
            </button>
          )}
      </div>
      <div className={`cancel-icon ${isSearchActive ? 'show' : ''}`} onClick={toggleSearch}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <form>
        {isLoggedIn ? ( 
          <button>
            <Link to="/profile">Hi! {userName}</Link>
          </button>
          ) : (
            <button onClick={handleLogin}>
            <Link to="/login" >
              <FontAwesomeIcon icon={faUser} /> 
              <a href="#" className="loginbutton-text">Log In</a>
            </Link>
            </button>
          )}
      </form>
    </nav>
  );
}
