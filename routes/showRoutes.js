const express = require("express");
const {
  createShow,
  updateShow,
  deleteShow,
} = require("../controllers/showcontroller");
const router = express.Router();
router.post("/createShow", createShow);
router.put("/updateShow/:id", updateShow);
router.post("/deleteShow", deleteShow);
module.exports = router;
