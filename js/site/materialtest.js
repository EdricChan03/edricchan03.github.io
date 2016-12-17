var app = angular.module('materialApp', ['ngAnimate', 'mgAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
// Configuration
app.config(function($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.enableBrowsingColor({
        theme: 'default',
        palette: 'primary',
        hue: '800'
    })
    // materialThemeYellowPurple
    .theme('materialThemeYellowPurple')
    .primaryPalette('yellow')
    .accentPalette('purple')
    .warnPalette('orange')
    .backgroundPalette('grey');
});
app.controller('MaterialController', function($scope) {

});