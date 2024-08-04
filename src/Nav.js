import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/booking">Book a Table</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
