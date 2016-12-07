app.controller('hengeCtrl', function($scope, serviceHenge){

  serviceHenge.getAll().then(function () {
    serviceHenge.merge();

    });

    $scope.henge = serviceHenge.final;
    

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
