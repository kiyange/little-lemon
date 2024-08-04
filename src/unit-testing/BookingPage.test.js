// src/components/BookingPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './BookingPage';

test('renders BookingPage and handles form submission', () => {
  render(<BookingPage />);

  // Check if the BookingForm and AvailableBookings components are rendered
  expect(screen.getByText(/book a table/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();

  // Fill out and submit the form
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-08-01' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '19:00' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

  // Check if the form submission updates the AvailableBookings component
  expect(screen.getByText(/2024-08-01/i)).toBeInTheDocument();
  expect(screen.getByText(/19:00/i)).toBeInTheDocument();
  expect(screen.getByText(/4/i)).toBeInTheDocument();
  expect(screen.getByText(/birthday/i)).toBeInTheDocument();
});
