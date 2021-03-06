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
     { "id": 1, "streetName": "Bograshov 31, Tel Aviv", "streetAngle": 298.7, "xW": 32.078043, "yW": 34.76765, "xE": 32.074106, "yE": 34.775262, "latitude": 32.07666, "longitude": 34.770351 },
     { "id": 2, "streetName": "HaShalom 23, Tel Aviv", "streetAngle": 290.1, "xW": 32.073205, "yW": 34.792106, "xE": 32.070341, "yE": 34.801687, "latitude": 32.070775, "longitude": 34.800309 },
     { "id": 3, "streetName": "Daniel 14, Tel Aviv", "streetAngle": 290.4, "xW": 32.068878, "yW": 34.763334, "xE": 32.068361, "yE": 34.764893, "latitude": 32.068346, "longitude": 34.764924 },
     { "id": 4, "streetName": "Yona HaNavi 36, Tel Aviv", "streetAngle": 287.6, "xW": 32.07306, "yW": 34.764986, "xE": 32.071942, "yE": 34.769106, "latitude": 32.072176, "longitude": 34.768093 },
     { "id": 5, "streetName": "Nechemiah 21, Tel Aviv", "streetAngle": 289.8, "xW": 32.069551, "yW": 34.763656, "xE": 32.068933, "yE": 34.765641, "latitude": 32.068926, "longitude": 34.765656 },
     { "id": 6, "streetName": "Allenby 36, Tel Aviv", "streetAngle": 288.3, "xW": 32.073642, "yW": 34.765459, "xE": 32.072751, "yE": 34.768678, "latitude": 32.072753, "longitude": 34.768645 },
     { "id": 7, "streetName": "Ge'ula 42, Tel Aviv", "streetAngle": 287.6, "xW": 32.072419, "yW": 34.764728, "xE": 32.071178, "yE": 34.769415, "latitude": 32.071128, "longitude": 34.769502 },
     { "id": 8, "streetName": "HaRav Kuk 36, Tel Aviv", "streetAngle": 288.7, "xW": 32.071819, "yW": 34.76449, "xE": 32.070705, "yE": 34.768331, "latitude": 32.070898, "longitude": 34.767701 },
     { "id": 9, "streetName": "HaRav Ahronson 31, Tel Aviv", "streetAngle": 287.2, "xW": 32.071182, "yW": 34.764453, "xE": 32.070573, "yE": 34.766738, "latitude": 32.070587, "longitude": 34.766732 },
     { "id": 10, "streetName": "Zrubavel 27, Tel Aviv", "streetAngle": 288.3, "xW": 32.070759, "yW": 34.764104, "xE": 32.070104, "yE": 34.766464, "latitude": 32.070134, "longitude": 34.766409 },
     { "id": 11, "streetName": "Ezra Hasofer 24, Tel Aviv", "streetAngle": 289.4, "xW": 32.070277, "yW": 34.763948, "xE": 32.069618, "yE": 34.766051, "latitude": 32.06962, "longitude": 34.766096 },
     { "id": 12, "streetName": "Arlozorov 31, Tel Aviv", "streetAngle": 285.3, "xW": 32.087611, "yW": 34.771639, "xE": 32.082707, "yE": 34.794339, "latitude": 32.086678, "longitude": 34.776199 },
     { "id": 13, "streetName": "Yitshak Sadah 43, Tel Aviv", "streetAngle": 283.2, "xW": 32.065837, "yW": 34.784219, "xE": 32.063918, "yE": 34.794592, "latitude": 32.064156, "longitude": 34.792879 },
     { "id": 14, "streetName": "Gordon 41, Tel Aviv", "streetAngle": 282.4, "xW": 32.08272, "yW": 34.768969, "xE": 32.080747, "yE": 34.779741, "latitude": 32.081786, "longitude": 34.773869 },
     { "id": 15, "streetName": "Jabotinsky 38, Tel Aviv", "streetAngle": 281.5, "xW": 32.089823, "yW": 34.772457, "xE": 32.087031, "yE": 34.788264, "latitude": 32.088994, "longitude": 34.777423 },
     { "id": 16, "streetName": "Nordau Boulevard 73, Tel Aviv", "streetAngle": 277.1, "xW": 32.092725, "yW": 34.77355, "xE": 32.091825, "yE": 34.782712, "latitude": 32.0921, "longitude": 34.779784 },
     { "id": 17, "streetName": "Yehuda Hayamit 10, Tel Aviv", "streetAngle": 276.2, "xW": 32.050277, "yW": 34.751627, "xE": 32.049612, "yE": 34.758601, "latitude": 32.04962, "longitude": 34.758577 },
     { "id": 18, "streetName": "Frishman 32, Tel Aviv", "streetAngle": 272.4, "xW": 32.079967, "yW": 34.76748, "xE": 32.079494, "yE": 34.781116, "latitude": 32.079829, "longitude": 34.772544 },
     { "id": 19, "streetName": "Eilat 58, Tel Aviv", "streetAngle": 242.7, "xW": 32.05689, "yW": 34.759933, "xE": 32.059645, "yE": 34.767363, "latitude": 32.059617, "longitude": 34.767353 }
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
