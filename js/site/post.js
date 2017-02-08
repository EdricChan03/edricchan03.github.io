var app = angular.module('PostsApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ngRoute', 'app.config', 'app.directives']);
app.controller('PostController', function($scope, $log) {
    $log.info('Loaded PostController!');
});
app.controller('ToolbarPostController', function($scope, $log) {
    $log.debug('Loaded ToolbarPostController!');
})