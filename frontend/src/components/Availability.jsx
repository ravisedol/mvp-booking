import React, { useState } from "react";
import { getAvailableCars } from "../services/bookingService";

const today = new Date().toISOString().split("T")[0];

function Availability() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAvailability = async () => {
    if (!startDate || !endDate) {
      setError("Please select both dates.");
      return;
    }
    if (new Date(endDate) < new Date(startDate)) {
      setError("End date cannot be before start date.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await getAvailableCars(startDate, endDate);
      setCars(res.data);
    } catch (err) {
      console.error("Error fetching availability", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-body">
      <h4>Check Car Availability</h4>
      <div className="row mb-3">
        <div className="col-md-5">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            min={today}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            min={today}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={checkAvailability}>
            {loading ? "Checking..." : "Check"}
          </button>
        </div>
      </div>

      {/* Display error if occure */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Car available result */}
      {cars.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Stock</th>
              <th>Total Price</th>
              <th>Avg/day</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.stock}</td>
                <td>${car.totalPrice}</td>
                <td>${car.avgPerDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Availability;
