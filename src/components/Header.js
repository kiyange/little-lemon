// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="path/to/logo.png" alt="Little Lemon Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/booking">Book a Table</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
