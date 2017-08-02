var app = angular.module('myModule');// Add module and controller here.

app.controller('outputCtrl', function($scope, guesswords) {

  $scope.passWords = userInfo.getProfile();

  }

});
