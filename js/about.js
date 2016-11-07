var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives', 'app.sidenav']);

app.controller('MainController', function($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
// Directives