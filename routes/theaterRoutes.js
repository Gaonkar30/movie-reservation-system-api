const express = require('express');
const {registerT}=require('../models/theater');
const router = express.Router();
router.post('/NewTheatre',registerT);
module.exports=router