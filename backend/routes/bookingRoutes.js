const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.createBooking);
router.get('/booked', bookingController.getAllBookings);

module.exports = router;
