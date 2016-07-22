var app = angular.module('test', ['ngMaterial']);
app.controller('MyController', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    $scope.openRightMenu = function () {
        $mdSidenav('right').toggle();
    };
});
app.controller('SideNavController', function ($scope) {
    $scope.homeUrl = 'https://chan4077.github.io';
    $scope.aboutUrl = 'https://chan4077.github.io/about';
    $scope.blogUrl = 'https://chan4077.github.io/blog';
    $scope.mediaUrl = 'https://chan4077.github.io/media';
    $scope.noteUrl = 'https://chan4077.github.io/notes';
    $scope.preferencesUrl = 'https://chan4077.github.io/preferences';
});