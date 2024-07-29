const express = require('express');
const { createPayment } = require('../controllers/paymentcontroller');
const router = express.Router();

router.post('/createPayment', createPayment);

module.exports = router;
