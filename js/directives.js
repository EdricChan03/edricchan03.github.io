/*
*  Directives
*/
// Sidenav
angular.module('app.directives', [])
.directive('siteSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
})
// Toolbar
.directive('siteToolbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/toolbar.html',
        transclude: true
    };
})
// Speed Dial
.directive('siteSpeedDial', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/speeddial.html',
        transclude: true
    };
});