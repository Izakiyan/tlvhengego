app.factory('serviceHenge', ['$http', function($http) {


    var hengeMoments = [];

    var getNextEvent = function() {
        var today = new Date().toISOString();
        var x;
        var nextEvent;
        for (var i = 0; i < hengeMoments.length; i++) {
            if (hengeMoments[i].sunMatch.time >= today) {
                nextEvent = hengeMoments[i];
                nextEvent = addEvenetime(nextEvent);
                return nextEvent;
            }
        };
    };

    String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    };

    var addEvenetime = function(event) {
        var date = "";
        var newdate = "";
        var startdate = "";

        date = event.sunMatch.time;
        newdate = date.replace(/-|:|\./g, "");
        date = newdate.slice(0, 15) + newdate.slice(18);
        event.sunMatch.eventime = date;

        var end = date;
        var bla = Number(end.substring(10, 11)) - 1;
        var start = end.replaceAt(10, bla.toString());
        event.sunMatch.startime = start;

        return event

    };

    var getAll = function() {
        return $http.get('/sunsets').then(function(data) {
            console.log(data.data);
            angular.copy(data.data, hengeMoments);
        });
    };

    return {
        hengeMoments: hengeMoments,
        getAll: getAll,
        getNextEvent: getNextEvent
    };

}]);
