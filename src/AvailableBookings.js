// src/components/AvailableBookings.js
import React from 'react';
import './AvailableBookings.css';

function AvailableBookings({ bookings }) {
  return (
    <div className="available-bookings">
      <h2>Available Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.date} at {booking.time} for {booking.guests} guests ({booking.occasion})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AvailableBookings;
