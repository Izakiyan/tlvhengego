var express = require('express');
// var http = require('http');
// var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var SunCalc = require('suncalc');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/streets');;

var Sunset = require("./SunsetModel");
var Henge = require("./HengeModel");

var app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// get today's sunset time in specific place

app.get('/', function(req, res){ // Not sure just yet!
  res.sendFile(__dirname + "/index.html");
});

var getSunAngles = function(){
  rays = [];
var start = new Date(new Date().getFullYear(), 0, 1)
var end = new Date(new Date().getFullYear(), 11, 31)
var a = 0;
for (var d = start; d <= end; d.setDate(d.getDate() + 1)){
  a = new Date(d)
  var sunset = SunCalc.getTimes(a, 32.0353, 34.4628).sunset; // move 30 minutes before (yaniv)
  // gets the azimuth of the sun rays @ sunset in specific place
  var angles = SunCalc.getPosition(sunset, 32.0353, 34.4628).azimuth;
  angles = angles * (180/Math.PI) + 180;
  // rays.push({date: a, azimuth: angles});
  var suns = new Sunset({date: a, azimuth: angles});
  suns.save(function (err) {
  if (err) return handleError(err);
    });
  };
};
// getSunAngles()
// console.log(rays);

app.get('/streets', function (req, res) {
  Sunset.find(function (error, streets) {
    res.send(streets);
    console.log(streets);
  });
});

app.listen(8000);




// ** Handy Links **
//http://ngmap.github.io/ - Maps
//https://github.com/mourner/suncalc - SunCalc
