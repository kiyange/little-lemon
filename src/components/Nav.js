// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reserve a Table</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Nav;
