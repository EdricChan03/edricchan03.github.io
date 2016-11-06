var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directive', 'app.sidenav']);

app.controller('MainController', function($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
// Directives