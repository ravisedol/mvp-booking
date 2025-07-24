const express = require("express");
const router = express.Router();

const bookingRoutes = require("./bookingRoutes");
const carRoutes = require("./carRoutes");

router.use("/", bookingRoutes);
router.use("/", carRoutes);

module.exports = router;
