var app = angular.module('errorApp', ['ngMaterial']);
app.controller('ErrorController', function ($scope) {
  $scope.main = function () {
    window.location.href = "https://chan4077.github.io";
    console.log('Redirecting to main...');
  };
  $scope.about = function () {
    window.location.href = "https://chan4077.github.io/about#angular";
    console.log('Redirecting To Site...');
  };
  $scope.commit = function () {
    window.location.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
    console.log('Redirecting to Commits...');
  };
  $scope.goBack = function () {
    window.history.back();
  };
}
);
