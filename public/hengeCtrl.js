app.controller('hengeCtrl', function($scope, serviceHenge) {

    serviceHenge.getAll().then(function() {
        $scope.nextEvent = serviceHenge.getNextEvent()
        $scope.henges = serviceHenge.hengeMoments;
    }).catch(function(error) {
        console.log(error);
    });

});
