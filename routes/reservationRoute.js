const express = require('express');
const {reserved,reserve}=require('../controllers/reservationcontroller');
const router = express.Router();
router.post('/displayreserved',reserved);
router.post('/booktickets'.reserve);
module.exports = router;