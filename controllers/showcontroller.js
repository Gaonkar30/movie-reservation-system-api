const Show = require("../models/show");


const createShow = async (req, res) => {
  try {
    const { movie, theater, date, time, seats } = req.body;
    const showdoc = await Show.create({ movie, theater, date, time, seats });
    res
      .status(201)
      .json({ message: "Show created successfully", show: showdoc }); 
  } catch (err) {
    console.error("Error creating show", err);
    res
      .status(500)
      .json({ message: "Error creating show", error: err.message }); 
  }
};


const updateShow = async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, theater, date, time, seats } = req.body;
    const showdoc = await Show.findByIdAndUpdate(
      id,
      {
        movie,
        theater,
        date,
        time,
        seats,
      },
      { new: true }
    );
    if (!showdoc) {
      return res.status(404).json({ message: "Show not found" });
    }
    res
      .status(200)
      .json({ message: "Show updated successfully", show: showdoc }); 
  } catch (err) {
    console.error("Error updating show", err); 
    res
      .status(500)
      .json({ message: "Error updating show", error: err.message }); 
  }
};

const deleteShow = async (req, res) => {
  try {
    const { id } = req.params;
    const showdoc = await Show.findByIdAndDelete(id);
    if (!showdoc) {
      return res.status(404).json({ message: "Show not found" }); 
    }
    res.status(200).json({ message: "Show deleted successfully" });
  } catch (err) {
    console.error("Error deleting show", err);
    res
      .status(500)
      .json({ message: "Error deleting show", error: err.message });
  }
};

module.exports = { createShow, updateShow, deleteShow };
