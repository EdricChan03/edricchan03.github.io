var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);

app.controller('MainController', function($scope, $mdSidenav) {
        $scope.toggleLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
// Directives