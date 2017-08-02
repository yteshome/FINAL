var app = angular.module('myModule');// Add module and controller here.

app.controller('inputCtrl', function($scope, $location) {

  $scope.checkLogin = function(userInfo) {
  $scope.getProfile = function() {
    
    $location.path('/profile');
  };

})
