import api from "../api/axiosConfig";

// Get available cars
export const getAvailableCars = (from, to) =>
  api.get("/availability", { params: { from, to } });

// Book a car
export const bookCar = (bookingData) =>
  api.post("/book", bookingData);

// Get all bookings
export const getAllBookings = () => api.get("/booked");
