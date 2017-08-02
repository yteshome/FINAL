var app = angular.module('myModule');// Add module here.

// Routing goes here.
var app = angular.module('myModule' );
app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      controller: 'loginCtrl',
      templateUrl: '/login.html'
    })

    .when('/profile', {
      controller: 'profileCtrl',
      templateUrl: '/profile.html'

    })
    .otherwise({ redirectTo: '/login.html' })

});
