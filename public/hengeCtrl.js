app.controller('hengeCtrl', function($scope, service){

  $scope.display = function(){
    service.display();
  };

});
