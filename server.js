var express = require('express');
var bodyParser = require('body-parser');
var SunCalc = require('suncalc');
var moment = require('moment')
var favicon = require('serve-favicon');

var merge = require('./merge')

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/sunsets', function(req, res) {

    var start = new Date()
    var end = moment(start).add(6, 'months')
    var sunsets = [];
    for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
        var a = new Date(d)
        var sunset = SunCalc.getTimes(a, 32.0353, 34.4628).sunset; // move 30 minutes before (yaniv)
        // gets the azimuth of the sun rays @ sunset in specific place
        var angles = SunCalc.getPosition(sunset, 32.0353, 34.4628).azimuth;
        angles = angles * (180 / Math.PI) + 180;
        // rays.push({date: a, azimuth: angles});
        var sun = { azimuth: angles, time: sunset };
        sunsets.push(sun);
    };

    var mergedArray = merge(sunsets)

    res.send(mergedArray);
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


// ** Handy Links **
//http://ngmap.github.io/ - Maps
//https://github.com/mourner/suncalc - SunCalc
