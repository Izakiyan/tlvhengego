app.controller("mapCtrl", function($scope, uiGmapGoogleMapApi, serviceHenge) {

    // Define variables for our Map object
    var areaLat = 32.0678844,
        areaLng = 34.760827,
        areaZoom = 14;

    var markers = [{
        "id": 1,
        "coords": { "latitude": 32.059617, "longitude": 34.767353 },
        "title": "Eilat 58, Tel Aviv"
    }, {
        "id": 2,
        "coords": { "latitude": 32.075685, "longitude": 34.7699893 },
        "title": "Bugrashov"
    }]

    $scope.marker = {};

    serviceHenge.getAll().then(function() {
        var nextStreet = serviceHenge.getNextEvent().streetMatch.streetName;
        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
            $scope.options = { scrollwheel: true };
            markers.forEach(function(marker) {
                if (marker.title === nextStreet) {
                    $scope.marker = marker;
                }
            });
        });
    }).catch(function(error) {
        console.log(error);
    });


});

// angular.copy($scope.map.center)
