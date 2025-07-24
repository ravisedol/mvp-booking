const bookings = require('../models/bookingModel');
const cars = require('../models/carModel');
const { dateOverlap } = require('../utils/date');

// create new booking
exports.createBooking = (req, res) => {

  const { customerId, carId, startDate, endDate,licenseNum, licenseExpiry } = req.body;

  // validating required fields
  if (!customerId || !carId || !startDate || !endDate || !licenseExpiry) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const now = new Date();
  const exp = new Date(licenseExpiry);
  const start = new Date(startDate);
  const end = new Date(endDate);

  // checking license is valid through the entire booking period
  if (exp < end) {
    return res.status(400).json({ message: 'License must be valid through the booking period' });
  }

  // checking for overlapping booking for the same customer
  const hasOverlap = bookings.some(b =>
    b.customerId === customerId && dateOverlap(b.startDate, b.endDate, startDate, endDate)
  );

  if (hasOverlap) {
    return res.status(400).json({ message: 'Customer already has a booking in this date range' });
  }

  // Saving booking data
  bookings.push({ customerId, carId, startDate, endDate,licenseNum, licenseExpiry }); // TODO: Replace in-memory 'bookings' with database queries for production use.


  res.status(201).json({ message: 'Booking successful' });

};


// all booking data return 
exports.getAllBookings = (req, res) => {
  const enrichedBookings = bookings.map((b) => {
    const car = cars.find((c) => c.id === b.carId);
    return {
      ...b,
      car: car || null, // attaches all full car details if found
    };
  });

  // TODO: Optimize for large datasets using indexed structures or caching
  // NOTE: For now, we are enriching bookings directly using in-memory arrays

  res.json(enrichedBookings);
};
