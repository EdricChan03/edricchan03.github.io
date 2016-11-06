var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages']);

// Config
app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');
    console.info('Successfully initialized!');
})

app.controller('MainController', function($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
// Directives