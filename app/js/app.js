'use strict';

angular.module('myApp', ['ngRoute', 'openWeatherApp.filters', 'openWeatherApp.services', 'openWeatherApp.directives', 'controllers'])
.config(
  function ($routeProvider) {
    $routeProvider
    .when('/weather', {
      templateUrl: 'partials/weather.html',
      controller: 'WeatherCtrl as weather'
    })

    .otherwise({
      redirectTo: '/weather'
    });
  }
);

var controllers = angular.module('controllers', [
  'ngResource',
  'openlayers-directive',
  'ngSanitize'
]);

controllers.controller('MainCtrl', function ($route, $scope){
});
