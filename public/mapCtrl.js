app.controller("mapCtrl", function($scope, uiGmapGoogleMapApi, serviceHenge) {

    // Define variables for our Map object
    var areaZoom = 16;

    var markers = [
        { "id": 1, "coords": { "latitude": 32.07666, "longitude": 34.770351 }, "title": "Bograshov 31, Tel Aviv" },
        { "id": 2, "coords": { "latitude": 32.070775, "longitude": 34.800309 }, "title": "HaShalom 23, Tel Aviv" },
        { "id": 3, "coords": { "latitude": 32.068346, "longitude": 34.764924 }, "title": "Daniel 14, Tel Aviv" },
        { "id": 4, "coords": { "latitude": 32.072176, "longitude": 34.768093 }, "title": "Yona HaNavi 36, Tel Aviv" },
        { "id": 5, "coords": { "latitude": 32.068926, "longitude": 34.765656 }, "title": "Nechemiah 21, Tel Aviv" },
        { "id": 6, "coords": { "latitude": 32.072753, "longitude": 34.768645 }, "title": "Allenby 36, Tel Aviv" },
        { "id": 7, "coords": { "latitude": 32.071128, "longitude": 34.769502 }, "title": "Ge'ula 42, Tel Aviv" },
        { "id": 8, "coords": { "latitude": 32.070898, "longitude": 34.767701 }, "title": "HaRav Kuk 36, Tel Aviv" },
        { "id": 9, "coords": { "latitude": 32.070587, "longitude": 34.766732 }, "title": "HaRav Ahronson 31, Tel Aviv" },
        { "id": 10, "coords": { "latitude": 32.070134, "longitude": 34.766409 }, "title": "Zrubavel 27, Tel Aviv" },
        { "id": 11, "coords": { "latitude": 32.06962, "longitude": 34.766096 }, "title": "Ezra Hasofer 24, Tel Aviv" },
        { "id": 12, "coords": { "latitude": 32.086678, "longitude": 34.776199 }, "title": "Arlozorov 31, Tel Aviv" },
        { "id": 13, "coords": { "latitude": 32.064156, "longitude": 34.792879 }, "title": "Yitshak Sadah 43, Tel Aviv" },
        { "id": 14, "coords": { "latitude": 32.081786, "longitude": 34.773869 }, "title": "Gordon 41, Tel Aviv" },
        { "id": 15, "coords": { "latitude": 32.088994, "longitude": 34.777423 }, "title": "Jabotinsky 38, Tel Aviv" },
        { "id": 16, "coords": { "latitude": 32.0921, "longitude": 34.779784 }, "title": "Nordau Boulevard 73, Tel Aviv" },
        { "id": 17, "coords": { "latitude": 32.04962, "longitude": 34.758577 }, "title": "Yehuda Hayamit 10, Tel Aviv" },
        { "id": 18, "coords": { "latitude": 32.079829, "longitude": 34.772544 }, "title": "Frishman 32, Tel Aviv" },
        { "id": 19, "coords": { "latitude": 32.059617, "longitude": 34.767353 }, "title": "Eilat 58, Tel Aviv" }
    ]

    $scope.marker = {};

    serviceHenge.getAll().then(function() {
        var nextStreet = serviceHenge.getNextEvent().streetMatch;

        uiGmapGoogleMapApi.then(function(maps) {
            var areaLat = 32.0678844;
            var areaLng = 34.760827;
            $scope.map = { center: { latitude: nextStreet.xE, longitude: nextStreet.yE }, zoom: areaZoom };
            $scope.options = { scrollwheel: true };
            markers.forEach(function(marker) {
                if (marker.title === nextStreet.streetName) {
                    $scope.marker = marker;
                }
            });
        });
    }).catch(function(error) {
        console.log(error);
    });
});
