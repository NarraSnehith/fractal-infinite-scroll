# Infinite Scroll Activity Feed (MEVN Stack)

This project implements an **Infinite Scroll Activity Feed** using:

- **Frontend:** Vue.js
- **Backend:** Node.js + Express
- **Database:** MongoDB

The feed loads activity cards dynamically as the user scrolls down.

---

# Project Structure

fractal-infinite-scroll
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── seed.js
│
├── frontend
│   └── Vue application
│
└── README.md

---

# Setup Instructions

## 1. Start MongoDB

Run MongoDB locally:


mongod --dbpath ~/mongodb-data


---

## 2. Run Backend Server

Open a new terminal:


cd backend
npm install
node seed.js
node server.js

Backend runs on:


http://localhost:5000


Test API:


http://localhost:5000/api/feed


---

## 3. Run Frontend

Open another terminal:


cd frontend
npm install
npm run dev


Frontend runs on:


http://localhost:5173


---

# Infinite Scroll Functionality

The feed loads **10 activity items at a time**.

When the user scrolls to the bottom:
1. The frontend requests more data from the backend
2. The backend queries MongoDB
3. The next set of activities is returned
4. Vue appends them to the feed

---

# API Endpoint

GET


/api/feed


Returns activity feed items from MongoDB.

Example Response:


[
{ "title": "Activity 1", "description": "This is activity number 1" },
{ "title": "Activity 2", "description": "This is activity number 2" }
]


---

# Data Flow Explanation

The data flow between frontend and backend works as follows:

1. Vue frontend sends a request to `/api/feed`.
2. The Node.js backend receives the request using Express routes.
3. The backend queries MongoDB using Mongoose.
4. MongoDB returns activity records.
5. The backend sends the data as JSON.
6. Vue renders the activity cards and appends them to the feed.

This allows efficient loading of large datasets using **pagination and infinite scroll**.

---

# Technologies Used

- Vue.js
- Node.js
- Express.js
- MongoDB
- Mongoose

