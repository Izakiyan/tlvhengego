 function _sort(array) {
     var temp = array.sort(function(a, b) {
         if (a.sunMatch.time > b.sunMatch.time) {
             return 1;
         }
         if (a.sunMatch.time < b.sunMatch.time) {
             return -1;
         }
         return 0;
     });
     return temp
 };

 var hengeStreet = [
     { "streetName": "Bograshov 31, Tel Aviv", "streetAngle": 298.7, "xW": 32.078043, "yW": 34.76765, "xE": 32.074106, "yE": 34.775262 },
     { "streetName": "HaShalom 23, Tel Aviv", "streetAngle": 290.1, "xW": 32.073205, "yW": 34.792106, "xE": 32.070341, "yE": 34.801687 },
     { "streetName": "Daniel 14, Tel Aviv", "streetAngle": 290.4, "xW": 32.068878, "yW": 34.763334, "xE": 32.068361, "yE": 34.764893 },
     { "streetName": "Yona HaNavi 36, Tel Aviv", "streetAngle": 287.6, "xW": 32.07306, "yW": 34.764986, "xE": 32.071942, "yE": 34.769106 },
     { "streetName": "Nechemiah 21, Tel Aviv", "streetAngle": 289.8, "xW": 32.069551, "yW": 34.763656, "xE": 32.068933, "yE": 34.765641 },
     { "streetName": "Allenby 36, Tel Aviv", "streetAngle": 288.3, "xW": 32.073642, "yW": 34.765459, "xE": 32.072751, "yE": 34.768678 },
     { "streetName": "Ge'ula 42, Tel Aviv", "streetAngle": 287.6, "xW": 32.072419, "yW": 34.764728, "xE": 32.071178, "yE": 34.769415 },
     { "streetName": "HaRav Kuk 36, Tel Aviv", "streetAngle": 288.7, "xW": 32.071819, "yW": 34.76449, "xE": 32.070705, "yE": 34.768331 },
     { "streetName": "HaRav Ahronson 31, Tel Aviv", "streetAngle": 287.2, "xW": 32.071182, "yW": 34.764453, "xE": 32.070573, "yE": 34.766738 },
     { "streetName": "Zrubavel 27, Tel Aviv", "streetAngle": 288.3, "xW": 32.070759, "yW": 34.764104, "xE": 32.070104, "yE": 34.766464 },
     { "streetName": "Ezra Hasofer 24, Tel Aviv", "streetAngle": 289.4, "xW": 32.070277, "yW": 34.763948, "xE": 32.069618, "yE": 34.766051 },
     { "streetName": "Arlozorov 31, Tel Aviv", "streetAngle": 285.3, "xW": 32.087611, "yW": 34.771639, "xE": 32.082707, "yE": 34.794339 },
     { "streetName": "Yitshak Sadah 43, Tel Aviv", "streetAngle": 283.2, "xW": 32.065837, "yW": 34.784219, "xE": 32.063918, "yE": 34.794592 },
     { "streetName": "Gordon 41, Tel Aviv", "streetAngle": 282.4, "xW": 32.08272, "yW": 34.768969, "xE": 32.080747, "yE": 34.779741 },
     { "streetName": "Jabotinsky 38, Tel Aviv", "streetAngle": 281.5, "xW": 32.089823, "yW": 34.772457, "xE": 32.087031, "yE": 34.788264 },
     { "streetName": "Nordau Boulevard 73, Tel Aviv", "streetAngle": 277.1, "xW": 32.092725, "yW": 34.77355, "xE": 32.091825, "yE": 34.782712 },
     { "streetName": "Yehuda Hayamit 10, Tel Aviv", "streetAngle": 276.2, "xW": 32.050277, "yW": 34.751627, "xE": 32.049612, "yE": 34.758601 },
     { "streetName": "Frishman 32, Tel Aviv", "streetAngle": 272.4, "xW": 32.079967, "yW": 34.76748, "xE": 32.079494, "yE": 34.781116 },
     { "streetName": "Eilat 58, Tel Aviv", "streetAngle": 242.7, "xW": 32.05689, "yW": 34.759933, "xE": 32.059645, "yE": 34.767363 }
 ];

 var merge = function(sunsets) {
     var temp = []
     for (var i = 0; i < hengeStreet.length; i++) {
         for (var j = 0; j < sunsets.length; j++) {
             if (hengeStreet[i].streetAngle === Math.round(sunsets[j].azimuth * 10) / 10) {
                 temp.push({ streetMatch: hengeStreet[i], sunMatch: sunsets[j] });
             };
         };
     };
     return _sort(temp);
 };


 module.exports = merge
