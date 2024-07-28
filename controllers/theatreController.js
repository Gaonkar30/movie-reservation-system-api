const Theatre = require('../models/theatre');

const register = async (req, res) => {
  try {
    const { name, address, city, state, pincode, seatingArrangement } = req.body;

    const theatreDoc = await Theatre.create({
      name,
      address,
      city,
      state,
      pincode,
      seatingArrangement,
    });

    res.status(201).json(theatreDoc); // Use status 201 for created resource
  } catch (err) {
    console.error("Error registering theatre", err);
    res.status(500).json({ message: "Error registering theatre", error: err.message });
  }
};

module.exports = {
  register
};
