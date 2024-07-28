require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/moviereservation',
  },
  jwtSecret: process.env.JWT_SECRET || 'asd4hest',
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,
  paymentGateway: {
    apiKey: process.env.PAYMENT_GATEWAY_API_KEY || 'yourkey',
  }
};
