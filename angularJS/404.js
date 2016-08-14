var app = angular.module('error', ['ngMaterial']);
app.controller('ErrorController', function($scope) {
    $scope.load = function() {
      $scope.debug = console.log('Successfully loaded!');
      return $scope.debug;
      
    };
});
