// src/components/BookingPage.js
import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './BookingForm';
import AvailableBookings from './AvailableBookings';
import './BookingPage.css';

function BookingPage() {
  const [bookings, setBookings] = useState([]);

  const handleBookingSubmit = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div>
      <Header />
      <main className="booking-page">
        <h1>Book a Table</h1>
        <BookingForm onBookingSubmit={handleBookingSubmit} />
        <AvailableBookings bookings={bookings} />
      </main>
    </div>
  );
}

export default BookingPage;
