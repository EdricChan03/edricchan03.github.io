var app = angular.module('error', ['ngMaterial']);
app.controller('ErrorController', function($scope) {
    $scope.mainUrl = 'https://chan4077.github.io';
    $scope.back = $window.history.back;
});