const express = require('express');
const {
    addMovie,
  updateMovie,
  deleteMovie
}=require('../controllers/moviecontroller');
const router = express.Router();
router.post('/createmovie',addMovie);
router.put('/updatemovie',updateMovie);
router.post('/deleteMovie',deleteMovie);
module.exports=router;