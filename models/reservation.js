const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  seats: [String], 
  paymentStatus: Boolean
});

module.exports = mongoose.model('Reservation', ReservationSchema);