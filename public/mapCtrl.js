app.controller("mapCtrl", function($scope, uiGmapGoogleMapApi) {

    // Define variables for our Map object
    var areaLat = 32.0678844,
        areaLng = 34.760827,
        areaZoom = 14;

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: areaLat, longitude: areaLng }, zoom: areaZoom };
        $scope.options = { scrollwheel: false };
        // $scope.marker = {coords: {latitude: 32.0724804, longitude: 34.7962566} }
        $scope.marker = [
            { "id": 1, "coords": { "latitude": 32.075685, "longitude": 34.7699893 } },
            { "id": 2, "coords": { "latitude": 32.058732, "longitude": 34.765759 } }
        ];
    });
});

// angular.copy($scope.map.center)
