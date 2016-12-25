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

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
        $scope.options = { scrollwheel: true };
        // $scope.marker = {coords: {latitude: 32.0724804, longitude: 34.7962566} }
        $scope.marker = {};
        //warning we don't know if the henge service is populated yet?
        var nextStreet = serviceHenge.getNextEvent().streetMatch.streetName;
        markers.forEach(function(marker) {
            if (marker.title === nextStreet) {
                $scope.marker = marker;
            }
        });
    });
});

// angular.copy($scope.map.center)
