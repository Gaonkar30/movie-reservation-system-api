const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cookieParser = require('cookie-parser');

const app = express();


app.use(express.json());
app.use(cookieParser());


mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theaterRoutes = require('./routes/theaterRoutes');
const reservationRoutes = require('./routes/reservationRoute');
const showRoutes = require('./routes/showRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theaters', theaterRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/payments', paymentRoutes);

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
