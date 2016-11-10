var app = angular.module('materialApp', ['ngAnimate', 'mgAria', 'ngMaterial', 'ngMessages']);
// Configuration
app.config(function($mdIconProvider, $mdThemingProvider) {
    // Sets the following icon set as default
    $mdIconProvider.defaultIconSet('/img/mdi.svg');
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