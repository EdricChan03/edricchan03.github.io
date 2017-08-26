var app = angular.module('PostsApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ngRoute', 'app.config', 'app.directives']);
app.controller('PostController', function ($scope, $log) {
    $log.info('Loaded PostController!');
});
app.controller('ToolbarController', function ($scope) {
    $scope.viewGithub = function () {
        window.location.href = "https://github.com/Chan4077/chan4077.github.io";
    };
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    // $mdDialog (start)
    $scope.sendFeedback = function (ev) {
        console.debug('Redirecting to Github...');
        window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
    };
})
