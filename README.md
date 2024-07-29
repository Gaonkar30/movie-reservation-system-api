



# Movie Reservation System

A movie reservation system built with Node.js, Express, MongoDB, and Mongoose. Users can register, log in, browse movies, book tickets, and make payments using an external payment gateway.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)


## Features

- User authentication (registration and login)
- Browse and search movies
- Book tickets with seat selection
- Manage theaters and shows
- Payment processing with Stripe

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/moviereservation.git
    cd moviereservation
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/moviereservation
    JWT_SECRET=my_super_secret_jwt_key
    BCRYPT_SALT_ROUNDS=10
    PAYMENT_GATEWAY_API_KEY=your_stripe_api_key
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## Configuration

All configurations are managed in the `config.js` file and loaded from environment variables.

## Usage

### Starting the Server

To start the server, run:

```bash
npm start
```

### API Endpoints

#### User Endpoints

- **Register a new user:**

    ```http
    POST /api/users/register
    ```

    Request body:
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```

- **Login a user:**

    ```http
    POST /api/users/login
    ```

    Request body:
    ```json
    {
        "email": "john@example.com",
        "password": "password123"
    }
    ```

#### Movie Endpoints

- **Create a new movie:**

    ```http
    POST /api/movies/createMovie
    ```

    Request body:
    ```json
    {
        "title": "Inception",
        "genre": ["Sci-Fi", "Thriller"],
        "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
        "schedule": [
            {
                "date": "2024-08-01",
                "showtimes": ["10:00", "14:00", "18:00"]
            }
        ]
    }
    ```

- **Update a movie:**

    ```http
    PUT /api/movies/updateMovie/:id
    ```

- **Delete a movie:**

    ```http
    DELETE /api/movies/deleteMovie/:id
    ```

#### Theatre Endpoints

- **Register a new theatre:**

    ```http
    POST /api/theaters/newTheatre
    ```

    Request body:
    ```json
    {
        "name": "AMC Theatre",
        "address": "1234 Main St",
        "city": "Los Angeles",
        "state": "CA",
        "pincode": "90001",
        "seatingArrangement": [[true, true, false], [false, true, true]]
    }
    ```

#### Reservation Endpoints

- **View reserved seats:**

    ```http
    GET /api/reservations/displayreserved
    ```

- **Book tickets:**

    ```http
    POST /api/reservations/booktickets
    ```

    Request body:
    ```json
    {
        "user": "user_id",
        "show": "show_id",
        "seats": ["A1", "A2"],
        "paymentStatus": true
    }
    ```

#### Show Endpoints

- **Create a new show:**

    ```http
    POST /api/shows/createShow
    ```

    Request body:
    ```json
    {
        "movie": "movie_id",
        "theater": "theater_id",
        "date": "2024-08-01",
        "time": "18:00",
        "seats": [[true, true, false], [false, true, true]]
    }
    ```

- **Update a show:**

    ```http
    PUT /api/shows/updateShow/:id
    ```

- **Delete a show:**

    ```http
    DELETE /api/shows/deleteShow/:id
    ```

#### Payment Endpoints

- **Create a payment:**

    ```http
    POST /api/payments/createPayment
    ```

    Request body:
    ```json
    {
        "amount": 2000,
        "currency": "usd",
        "paymentMethodId": "pm_1J2Y2Y2eZvKYlo2C2N2X2N2X",
        "description": "Movie ticket payment"
    }
    ```

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Payment Gateway:** Stripe

