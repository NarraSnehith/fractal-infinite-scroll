# Infinite Scroll Activity Feed

This project implements an infinite scroll activity feed using:

- Vue.js (Frontend)
- Node.js + Express (Backend)
- MongoDB (Database)

## Project Structure

backend → Node.js API server  
frontend → Vue application  

## Setup Instructions

### Start MongoDB

mongod --dbpath ~/mongodb-data

### Start Backend

cd backend
npm install
node seed.js
node server.js

Backend runs on:
http://localhost:5000

### Start Frontend

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

## API Endpoint

GET /api/feed

Returns activity records from MongoDB.

## Data Flow

1. Vue frontend requests `/api/feed`
2. Node.js backend receives request
3. Backend queries MongoDB
4. MongoDB returns activity data
5. Backend sends JSON response
6. Vue renders activity cards
