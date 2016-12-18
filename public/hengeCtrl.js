app.controller('hengeCtrl', function($scope, serviceHenge) {

    serviceHenge.getAll().then(function() {
        $scope.nextEvent = serviceHenge.getNextEvent();
        $scope.henges = serviceHenge.hengeMoments;
    });

});


// .then(function () {
//   $scope.hengeMoment = serviceHenge.hengeMoment
//   });
//
//
//
// $scope.name = "hello";
// $scope.firstname = "oriel"
// $scope.changeName = function() {
//       $scope.lastname = "Nelly"
//     };
