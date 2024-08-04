// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div>
        
      <Header />
      <main className="homepage">
        <h1>Welcome to Little Lemon</h1>
        <p>Your favorite place to enjoy delicious meals.</p>
        <Link to="/booking">Reserve a Table</Link>
      </main>
    </div>
  );
}

export default HomePage;
