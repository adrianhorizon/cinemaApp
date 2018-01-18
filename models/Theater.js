var mongoose = require('mongoose');

var TheaterSchema = new mongoose.Schema({
  title: String,
  geolocation: String,
});

module.exports = mongoose.model('Theater', TheaterSchema);
