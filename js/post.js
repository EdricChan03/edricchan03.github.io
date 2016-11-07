var app = angular.module('PostsApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives', 'app.sidenav']);
app.controller('PostController', function($scope, $log) {
    $log.info('Loaded PostController!');
});