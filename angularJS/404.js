var app = angular.module('error', ['ngMaterial']);
app.controller('ErrorController', function($scope) {
    $scope.main = function() {
      window.location.href = "https://chan4077.github.io";
      console.log('Redirecting to main...');
    }
    $scope.about = function() {
      window.location.href = "https://chan4077.github.io/about#angular";
      console.log('Redirecting To Site...');
    }
    $scope.commit = function() {
      window.loation.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
      console.log('Redirecting to Commits...');
    };
});
