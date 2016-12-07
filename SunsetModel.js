var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sunsetSchema = new Schema({
  azimuth: Number,
  time: Date
});

var Sunset = mongoose.model("Sunset", sunsetSchema);
module.exports = Sunset;
