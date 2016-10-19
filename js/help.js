var app = angular.module('HelpApp', ['ngMaterial', 'ngAria', 'ngMessages', 'ngAnimate']);
// Config
app.config(function ($mdIconProvider, $mdToastProvider) {
    $mdIconProvider.defaultIconSet('/img/mdi.svg');
    console.info('Successfully initialized!');
});
app.controller('HelpController', function($scope) {
    console.info('Loaded HelpController!');
});

app.controller('SearchController', function($scope) {

})

// Directives
// Come from beta site