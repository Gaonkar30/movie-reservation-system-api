const express = require('express');
const {
  addMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/moviecontroller');
const router = express.Router();
router.post('/createMovie', addMovie); 
router.put('/updateMovie/:id', updateMovie);
router.delete('/deleteMovie/:id', deleteMovie); 
module.exports = router;
