import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//import Nav from './Nav';
import Homepage from './components/Homepage';
//import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/booking" element={<BookingPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
