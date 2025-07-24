import React, { useEffect, useState } from "react";
import BookingInputs from "./BookingInputs";
import {
  bookCar,
  getAllBookings,
  getAvailableCars,
} from "../../services/bookingService";
import BookingTable from "./BookingTable";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    licenseNum: "",
    expiry: "",
    startDate: "",
    endDate: "",
    carId: "",
  });
  const [message, setMessage] = useState("");
  const [availableCars, setAvailableCars] = useState([]);
  const [bookedCar, setBookedCar] = useState([]);

  // handle form input changes
  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // Fetch available cars
  useEffect(() => {

    if (new Date(form.endDate) < new Date(form.startDate)) {
      setMessage("End date cannot be before start date.");
      return;
    }

    const fetchCars = async () => {
      if (form.startDate && form.endDate) {
        try {
          const res = await getAvailableCars(form.startDate, form.endDate);
          // console.log(res.data);
          setAvailableCars(res.data);
        } catch (err) {
          console.error("Error fetching available cars", err);
        }
      }
    };
    fetchCars();
  }, [form.startDate, form.endDate]);

  // Hande on click book
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checking if empty
    if (
      !form.name ||
      !form.licenseNum ||
      !form.expiry ||
      !form.startDate ||
      !form.endDate ||
      !form.carId
    ) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await bookCar({
        customerId: form.name,
        licenseNum: form.licenseNum,
        licenseExpiry: form.expiry,
        startDate: form.startDate,
        endDate: form.endDate,
        carId: form.carId,
      });
      setMessage(res.data.message);
      await fetchBookings();
    } catch (err) {
      setMessage(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Booking failed"
      );
      // setBookedCar([]);
    }
  };

  // Fetch bookings
  const fetchBookings = async () => {
    try {
      const res = await getAllBookings();
      setBookedCar(res.data);
    } catch (err) {
      console.error("Error fetching bookings", err);
    }
  };

  // Initial booking list load
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="card card-body">
      <h4>Book a Car</h4>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <BookingInputs
          form={form}
          availableCars={availableCars}
          handleChange={handleChange}
        />
        <div className="text-center">
          <button className="btn btn-success mt-2 w-25" disabled={!form.carId}>
            Book
          </button>
        </div>
      </form>
      <hr />
      <BookingTable bookedCar={bookedCar} />
    </div>
  );
}

export default BookingForm;
