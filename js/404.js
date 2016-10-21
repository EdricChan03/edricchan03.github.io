var app = angular.module('errorApp', ['ngMaterial']);
/* Configurations
* This came from test.js
*/
app.config(function ($mdIconProvider) {
  $mdIconProvider.defaultIconSet('/img/mdi.svg');
  console.info('Successfully initialized!');
});
/*
*  Main Controller
*/
app.controller('MainController', function ($scope, $mdSidenav) {
  $scope.main = function () {
    window.location.href = "https://chan4077.github.io";
    console.info('Redirecting to main...');
  };
  $scope.about = function () {
    window.location.href = "https://chan4077.github.io/about#angular";
    console.info('Redirecting To Site...');
  };
  $scope.commit = function () {
    window.location.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
    console.info('Redirecting to Commits...');
  };
  $scope.goBack = function () {
    window.history.back();
  };
  $scope.refreshPage = function () {
    window.location.reload(true);
  };
})