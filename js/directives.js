/*
*  Directives
*/
// Sidenav
app.directive('siteSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
});
// Toolbar
app.directive('siteToolbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/toolbar.html',
        transclude: true
    };
});
// Speed Dial
app.directive('siteSpeedDial', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/speeddial.html',
        transclude: true
    };
});