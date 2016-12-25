var app = angular.module('henge', ['uiGmapgoogle-maps', 'nemLogging'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDGxS-5npLzyHNUh6xifo3_paF04vA1yPo',
            v: '3.17',
            //libraries: 'weather,geometry,visualization'
        });
    })
