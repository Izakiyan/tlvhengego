app.factory('serviceHenge', ['$http', function ($http) {

  var hengeMoment = [];
  

  var getAll = function () {
    return $http.get('/streets').success(function (data) {
      // this copies the response posts to the client side
      // 'beers' under 'beerService'
        angular.copy(data, hengeMoment);
        console.log(hengeMoment);
    });
  };


return {
  hengeMoment: hengeMoment,
  getAll
};

}]);
