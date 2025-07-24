const request = require("supertest");
const app = require("../app");

const bookingPayload = {
  customerId: "Test",
  carId: "1",
  from: "2025-07-21",
  to: "2025-07-23",
  license: "123"
};

describe("Car Rental Booking API", () => {
  it("should book a car successfully", async () => {
    const res = await request(app).post("/api/book").send(bookingPayload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Booking successful");
  });

  it("should return all bookings including car details", async () => {
    const res = await request(app).get("/api/booked");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[res.body.length - 1]).toMatchObject({
      customerId: "Test",
      carId: "1"
    });
  });

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app).post("/api/book").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
