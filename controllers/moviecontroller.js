const Movie = require("../models/movie");

const addMovie = async (req, res) => {
  try {
    const { title, genre, actors, schedule } = req.body;
    const movieDoc = await Movie.create({
      title: title,
      genre: genre,
      actors: actors,
      schedule: schedule,
    });
    res.status(201).json(movieDoc);
  } catch (err) {
    console.error("Failed to create the movie document", err);
    res.status(500).json({ message: "Failed to create the movie document" }); // Return error message
  }
};

const updateMovie = async (req, res) => {
  try {
    const { title, genre, actors, schedule } = req.body;
    const id = req.params.id;
    const movieDoc = await Movie.findByIdAndUpdate(
      id,
      {
        title: title,
        genre: genre,
        actors: actors,
        schedule: schedule,
      },
      { new: true }
    );
    if (!movieDoc) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movieDoc);
  } catch (err) {
    console.error("Failed to update the movie details", err);
    res.status(500).json({ message: "Failed to update the movie details" }); // Return error message
  }
};
const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movieDoc = await Movie.findByIdAndDelete(id);
    if (!movieDoc) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    console.error("Failed to delete the movie document", err);
    res.status(500).json({ message: "Failed to delete the movie document" });
  }
};
module.exports = {
  addMovie,
  updateMovie,
  deleteMovie
};
