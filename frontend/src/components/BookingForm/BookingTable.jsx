import React from "react";

const BookingTable = ({ bookedCar }) => (
  <>
    <h5>All Bookings</h5>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>License</th>
          <th>License Expiry</th>
          <th>Car</th>
          <th>From</th>
          <th>To</th>
        </tr>
      </thead>
      <tbody>
        {bookedCar.map((b, index) => (
          <tr key={index}>
            <td>{b.customerId}</td>
            <td>{b.licenseNum || "N/A"}</td>
            <td>{b.licenseExpiry}</td>
            <td>
              {b.car?.brand} {b.car?.model}
            </td>
            <td>{b.startDate}</td>
            <td>{b.endDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default BookingTable;
