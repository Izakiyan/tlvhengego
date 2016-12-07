var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sunsetSchema = new Schema({
  date:{type: Date},
  azimuth:{type: Number},
});

var Sunset = mongoose.model("Sunset", sunsetSchema);
module.exports = Sunset;
