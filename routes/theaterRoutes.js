const express = require('express');
const { register } = require('../controllers/theaterController');
const router = express.Router();
router.post('/newTheatre', register); 
module.exports = router;
