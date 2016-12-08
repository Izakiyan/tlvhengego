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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
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
  var suns = new Sunset({azimuth: angles, time: sunset});
  suns.save(function (err) {
  if (err) return handleError(err);
    });
  };
};
//************** Turn On To Add To Collection "Sunsets"
// getSunAngles()
// console.log(rays);
//************** Turn Off After

//************** Turn On AFTER Collection "Sunsets" is filled  up
app.get('/streets', function (req, res) {
  Sunset.find(function (error, streets) {
    res.send(streets);
    console.log(streets);
  });
});
//************** Turn Off to clear Collection "Sunsets"

app.listen(8000);




// ** Handy Links **
//http://ngmap.github.io/ - Maps
//https://github.com/mourner/suncalc - SunCalc
