const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/availability', carController.checkAvailability);

module.exports = router;
