import React from 'react';
import Availability from './components/Availability';
import BookingForm from './components/BookingForm/BookingForm';

function Home() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">MVP Booking</h1>
      <Availability />
      <hr className="my-4" />
      <BookingForm />
    </div>
  );
}

export default Home;
