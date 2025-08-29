const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: Date },
  runtime: { type: Number }, 
  rating: { type: String }, 
  genres: [{ type: String }],
  cast: [{ type: String }],
  directors: [{ type: String }],
  writers: [{ type: String }],
  countries: [{ type: String }],
  languages: [{ type: String }],
  awards: {
    wins: { type: Number, default: 0 },
    nominations: { type: Number, default: 0 }
  },
  imdb: {
    rating: { type: Number },
    votes: { type: Number }
  },
  plot: { type: String },
  fullPlot: { type: String }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
