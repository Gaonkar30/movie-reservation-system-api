const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
const secret = "fasjfiwefmv awoerk13";


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(userDoc);
  } catch (err) {
    console.error("Error registering user", err);
    res.status(500).json({ message: "Error registering user" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });

    if (!userDoc) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = bcrypt.compareSync(password, userDoc.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    jwt.sign({ email: userDoc.email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) {
        return res.status(500).json({ message: "Error generating token" });
      }
      res.cookie("token", token).json({
        id: userDoc._id,
        name: userDoc.name,
        email: userDoc.email,
      });
    });
  } catch (err) {
    console.error("Error logging in user", err);
    res.status(500).json({ message: "Error logging in user" });
  }
};

module.exports = {
  register,
  login
};
