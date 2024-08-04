// src/components/BookingForm.test.js
import React from 'react';
//import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

test('renders BookingForm and handles submission', () => {
  const handleBookingSubmit = jest.fn(); // Mock function to track calls

  render(<BookingForm onBookingSubmit={handleBookingSubmit} />);

  // Check if the form elements are rendered
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '19:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  // Check if onBookingSubmit was called with correct data
  expect(handleBookingSubmit).toHaveBeenCalledWith({
    date: '2024-08-04',
    time: '19:00',
    guests: '4',
    occasion: 'Birthday'
  });
});
