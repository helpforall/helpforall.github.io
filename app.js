var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'mainController'
  })

  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'aboutController'
  })

  .when('/photos', {
    templateUrl: 'views/photos.html',
    controller: 'photosController'
  })

  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'contactController'
  })
});

myApp.controller('mainController', ['$scope', function($scope) {

}]);

myApp.controller('aboutController', ['$scope', function($scope) {

}]);

myApp.controller('photosController', ['$scope', function($scope) {

}]);

myApp.controller('contactController', ['$scope', function($scope) {

}]);
