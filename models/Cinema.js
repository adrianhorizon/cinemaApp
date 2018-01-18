var mongoose = require('mongoose');

var CinemaSchema = new mongoose.Schema({
  movie: String,
  title: String,
  language: String,
  published_year: Number,
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cinema', CinemaSchema);
