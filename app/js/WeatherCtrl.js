'use strict';

controllers.controller('WeatherCtrl', [ '$scope', 'openWeatherMap', 'exampleLocations', '$location', '$timeout', function($scope, openWeatherMap, exampleLocations, $location, $timeout) {

  angular.extend($scope, {
    center: {
      lat: 48.828093,
      lon: 2.294694,
      zoom: 11
    }
  });

  $scope.centerAndShow = function(id) {
    if (!$scope[id].label.show) {
      $scope.center.lat = $scope[id].lat;
      $scope.center.lon = $scope[id].lon;
    }
    $scope[id].label.show = !$scope[id].label.show
  };

  $scope.message = '';
  $scope.hasState = '';

  // Expose example locations to $scope
  $scope.exampleLocations = exampleLocations;
  $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

  // On initialization load data for first example entry
  $scope.forecast = openWeatherMap.queryForecastDaily({
    location: exampleLocations[ 0 ]
  });

  // Get forecast data for location as given in $scope.location
  $scope.getForecastByLocation = function() {
    if ($scope.location == '' || $scope.location == undefined) {
      $scope.hasState = 'has-warning';
      $scope.message = 'Please provide a location';
      return;
    }

    $scope.hasState = 'has-success';

    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: $scope.location
    });
  };

  // Set $scope.location and execute search on API
  $scope.setLocation = function(loc) {
    $scope.location = loc;
    $scope.getForecastByLocation();
  };

  // Get icon image url
  $scope.getIconImageUrl = function(iconName) {
    return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
  };
  /*var map;
  function init() {

  //Center  ( mercator coordinates )
  var lat = 7486473;
  var lon = 4193332;

  // if  you use WGS 1984 coordinate you should  convert to mercator
  //	lonlat.transform(
  //		new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
  //		new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
  //	);

  var lonlat = new OpenLayers.LonLat(lon, lat);

  map = new OpenLayers.Map("basicMap");

  // Create overlays
  // map layer OSM
  var mapnik = new OpenLayers.Layer.OSM();
  // Create station layer
  var stations = new OpenLayers.Layer.Vector.OWMStations("Stations");
  // Create weather layer
  var city = new OpenLayers.Layer.Vector.OWMWeather("Weather");

  //connect layers to map
  map.addLayers([mapnik, stations, city]);

  // Add Layer switcher
  map.addControl(new OpenLayers.Control.LayerSwitcher());

  map.setCenter( lonlat, 10 );
}*/
} ]);
