const express = require('express');
const { Reserved, reserve } = require('../controllers/reservationcontroller'); 
const router = express.Router();
router.get('/displayreserved', Reserved); 
router.post('/booktickets', reserve); 
module.exports = router;
