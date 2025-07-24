
# 🚗 MVP Booking Platform

A full-stack MVP booking system built using **React** and **Node.js**, booking data stored temporarely in backend, vehicle availability checks, and RESTful APIs.

---

## 📂 Project Structure

```
backend/             # Node.js + Express API
├── controllers/
│   ├── bookingController.js
│   └── carController.js
├── middlewares/
│   └── errorHandler.js
├── models/
│   ├── bookingModel.js
│   └── carModel.js
├── routes/
│   ├── bookingRoutes.js
│   ├── carRoutes.js
│   └── index.js
├── services/
│   └── availabilityService.js
├── utils/
│   └── season.js
│   └── date.js
├── tests/
│   └── booking.test.js
├── app.js
├── index.js
└── .env

frontend/            # React App
├── public/         
├── src/           
│   ├── api/                 
│   │   └── axiosConfig.js
│   ├── assets/              
│   ├── components/
│   │   ├── BookingForm/     
│   │   │── Availability.jsx
│   ├── services/           
│   │   └── bookingService.js
│   ├── App.jsx             
│   ├── Home.jsx             
│   ├── ErrorPage.jsx       
│   ├── main.jsx            
│   └── index.css            
│
├── package.json                
├── .env.development  
├── .env.staging     
├── .env.production   
├── .gitignore        
└── README.md        

```

---

## 📦 Tech Stack

| Layer     | Tech Used                  |
|-----------|----------------------------|
| Frontend  | React, Axios, Bootstrap 5  |
| Backend   | Node.js, Express.js        |
| Testing   | Jest, Supertest            |
| Dev Tools | Nodemon, dotenv            |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ravisedol/mvp-booking.git

```

---

### 2. Setup Backend

```bash
cd backend
npm install
touch .env  # add PORT=5000 or any env vars
npm start # or: node index.js
```

API will be served at: `http://localhost:5000/api`

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

App will run at: `http://localhost:5173`

---

## 🚀 Features

- ✅ Check car availability
- ✅ Book a car with date and license validation
- ✅ Prevent overlapping bookings
- ✅ Decrease stock on successful booking
- ✅ React form UI with dropdown for available cars based on start and end date
- ✅ Booking confirmation with car + customer details

---

## 🧪 Running Tests (Backend)

```bash
cd backend
npm test
```

Uses **Jest** + **Supertest** to test:
- Booking flow
- Validation errors
- GET all bookings (with car details)

---

## 📄 API Endpoints

| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | `/api/availability` | Get list of all available vehicles |     
| GET    | `/api/booked`       | Get all booked users + car data    |
| POST   | `/api/book`         | Create a new booking               |

---

## 🔐 Environment Variables

Create a `.env` file in `backend/`:

```env
PORT=5000
```

---

## 📝 TODO / Improvements

🗄️ Backend:

- [ ] Replace in-memory data (`bookings`, `cars`) with MongoDB/MySQL database
- [ ] JWT Auth for users and admins
- [ ] Admin dashboard for car & booking management
- [ ] Add Swagger or Postman documentation for all API endpoints
- [ ] Implement pagination and filtering for `GET /bookings`
- [ ] Unit tests for frontend

🧑‍💻 Frontend:

- [] Add loading /error UI states
- [] Add admin UI to view/manage cars & bookings
- [] Use TypeScript for type safety 
- [] Add tests with React Testing Library



---

## 🧾 License

© Ravindra