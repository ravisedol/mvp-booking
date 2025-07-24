const getSeason = require("../utils/season");
const { dateOverlap } = require('../utils/date');
const bookings = require("../models/bookingModel");
const cars = require("../models/carModel");

function calculateAvailability(from, to) {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const days = (toDate - fromDate) / (1000 * 60 * 60 * 24);
  const season = getSeason(from);

  return cars
    .map(car => {
      // Count overlapping bookings for this car
      const bookedCount = bookings.filter(b =>
        b.carId === car.id && dateOverlap(b.startDate, b.endDate, from, to)
      ).length;

      const remainingStock = car.stock - bookedCount;

      return {
        ...car,
        stock: remainingStock,
        available: remainingStock > 0,
        totalPrice: (car.prices[season] * days).toFixed(2),
        avgPerDay: car.prices[season].toFixed(2)
      };
    })
    .filter(car => car.stock > 0); 
}

module.exports = { calculateAvailability };
