var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hengeSchema = new Schema({
  streetName:{type: String},
  streetAngle:{type: Number},
  xW:{type:Number},
  yW:{type:Number},
  xE:{type:Number},
  yE:{type:Number}
});

var Henge = mongoose.model("Henge", hengeSchema);
module.exports = Henge;
