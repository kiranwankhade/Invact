# Movie Watchlist Application

## Overview

The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management will be handled using Redux to ensure efficient and predictable state updates.
## Features

### State Mangaement

- **Home Page**: An interactive home Page where user can find the Movies Short discription.
- **Movies Detail Page**: Having movie data from where we can edit,delete and change review and toggled watched.

- **Validation**: The form includes validation for required fields and proper data formats.

## Tech Stack

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing event data.
- **dotenv**: Module to load environment variables.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Chakra UI**: Component library for React.js.
- **react-router-dom**: navigation.
- **react-loader-spinner**: Loading .

## Project Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ``` bash
   git clone https://github.com/kiranwankhade/Invact.git
   cd frontend
  ``
  
2. Navigate to the backend directory:
   `` bash
      cd backend
   ``

3. Install dependencies::
   `` bash
      npm install
   ``
   
4. Create a .env file and add the following environment variables:
  `` bash
      PORT=5000
      MONGO_URI=your_mongodb_uri
   ``
5. Start the backend server:
    `` bash
      npm run server
   ``
   
### Frontend Setup

1. Navigate to the frontend directory:
  ``
  cd frontend
  Install dependencies:
  ``

2. Navigate to the backend directory:
   `` bash
      cd backend
   ``
   
3. Install dependencies::
   `` bash
      npm install
   ``

4. Start the backend server:
    `` bash
      npm start
   ``

### API Endpoints
## Event Endpoints
1. Add Movie: POST /movie/
2. Get Movies: GET /movie/
3. Update Movie: PUT /movie/:id
4. Delete Movie: DELETE /movie/:id
5. Get Movie Seprately: GET /movie/:id
6. Watched/Unwatched Status : PATCH /movie/:id/watchStatus
7. Review Update : PATCH /movie/:id/review


### Usage
- Navigate to the frontend application in your browser at http://localhost:3000.
- Use the interactive calendar to view, create, update, and delete movies.

## Link for Visit

[Deployed Link](https://invact-movie-details.vercel.app/)

[Backend Deployed Link](https://invact-backend-89qz.onrender.com/)

[Github Link](https://github.com/kiranwankhade/Invact)

[Demo Video Link](https://drive.google.com/file/d/1nhzr3dtcpEIPj-ncD9DzKinUwUWbL_an/view?usp=sharing)
