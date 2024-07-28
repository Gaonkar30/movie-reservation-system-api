const Reservation = require('../models/reservation');


const Reserved = async (req, res) => {
  try {
    const reservations = await Reservation.find({}).sort({ createdAt: -1 }).limit(10);
    res.status(200).json(reservations); 
  } catch (err) {
    console.error("Could not fetch the reserved seats", err);
    res.status(500).json({ message: "Could not fetch the reserved seats" });
  }
};


const reserve = async (req, res) => {
  try {
    const { user, show, seats, paymentStatus } = req.body;

    if (paymentStatus) {
      const reservation = await Reservation.create({ user, show, seats, paymentStatus });
      console.log('Reservation created');
      res.status(201).json(reservation); 
    } else {
      res.status(400).json({ message: 'Payment not received' }); 
    }
  } catch (err) {
    console.error("Could not reserve the seats", err);
    res.status(500).json({ message: "Could not reserve the seats" }); 
  }
};

module.exports = { Reserved, reserve };
