// const { cars, bookings } = require('../data/data');
const { calculateAvailability } = require('../services/availabilityService');
// const { dateOverlap } = require('../utils/date');
// const getSeason = require('../utils/season');

exports.checkAvailability = (req, res) => {

  const { from, to } = req.query;

  if (!from || !to) return res.status(400).json({ error: 'Missing from or to date' });

  // const fromDate = new Date(from);
  // const toDate = new Date(to);
  // const days = (toDate - fromDate) / (1000 * 60 * 60 * 24);

  // if (isNaN(days) || days <= 0) {
  //   return res.status(400).json({ error: 'Invalid date range' });
  // }

  // const season = getSeason(from);


  // const availableCars = cars
  //   .map(car => {
  //     // Count overlapping bookings for this car
  //     const bookedCount = bookings.filter(b =>
  //       b.carId === car.id && dateOverlap(b.startDate, b.endDate, from, to)
  //     ).length;

  //     const remainingStock = car.stock - bookedCount;

  //     return {
  //       ...car,
  //       stock: remainingStock,
  //       available: remainingStock > 0,
  //       totalPrice: (car.prices[season] * days).toFixed(2),
  //       avgPerDay: car.prices[season].toFixed(2)
  //     };
  //   })
  //   .filter(car => car.stock > 0); // Only return cars with stock

  const availableCars = calculateAvailability(from, to);

  res.json(availableCars);
};
