const config = require('../config');
const stripe = require('stripe')(config.paymentGateway.apiKey);

const createPayment = async (req, res) => {
  try {
    const { amount, currency, paymentMethodId, description } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      description,
    });

    res.status(201).json({
      success: true,
      message: 'Payment successful',
      paymentIntent,
    });
  } catch (err) {
    console.error('Error processing payment', err);
    res.status(500).json({
      success: false,
      message: 'Payment failed',
      error: err.message,
    });
  }
};

module.exports = {
  createPayment,
};
