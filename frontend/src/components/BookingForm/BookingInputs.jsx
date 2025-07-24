import React from "react";

const today = new Date().toISOString().split("T")[0];

const BookingInputs = ({ form, availableCars, handleChange }) => (
  <>
    <div className="row mb-2">
      <div className="col-md-4">
        <label>Name</label>
        <input
          className="form-control"
          value={form.name}
          placeholder="User Name"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <label>License Number</label>
        <input
          className="form-control"
          value={form.licenseNum}
          placeholder="Ex: 123"
          onChange={(e) => handleChange("licenseNum", e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <label>License Expiry</label>
        <input
          type="date"
          min={today}
          className="form-control"
          value={form.expiry}
          onChange={(e) => handleChange("expiry", e.target.value)}
        />
      </div>
    </div>

    <div className="row mb-2">
      <div className="col-md-4">
        <label>Start Date</label>
        <input
          type="date"
          min={today}
          className="form-control"
          value={form.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <label>End Date</label>
        <input
          type="date"
          className="form-control"
          value={form.endDate}
          min={today}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <label>Select Car</label>
        <select
          className="form-select"
          value={form.carId}
          onChange={(e) => handleChange("carId", e.target.value)}
          disabled={availableCars.length === 0}
        >
          <option value="">-- Select a Car --</option>
          {availableCars.map((car, index) => (
            <option key={index} value={car.id}>
              {car.brand} {car.model} – ₹{car.avgPerDay}/day
            </option>
          ))}
        </select>
      </div>
    </div>
  </>
);

export default BookingInputs;
