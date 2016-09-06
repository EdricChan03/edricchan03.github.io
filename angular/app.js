var app = angular.module('testApp', ['ngMaterial']);
app.controller('MainController', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    $scope.openRightMenu = function () {
        $mdSidenav('right').toggle();
    };
    $scope.oriFeedback = {
        name: "",
        email: "",
        sendFeedback: ""
    };
    $scope.reset = function () {
        $scope.feedback = angular.copy(oriFeedback);
        $scope.feedbackbeta.setPristine();
    };
});

app.controller('SideNavController', function ($scope) {
    $scope.links = [
        {url: 'https://chan4077.github.io', icon: 'home', color_icon: 'black'},
        {url: 'https://chan4077.github.io/about', icon: 'account_box', color_icon: 'black'},
        {url: 'https://chan4077.github.io/blog', icon: '', color_icon: 'black'},
        {url: 'https://chan4077.github.io/media', icon: 'group', color_icon: 'black'},
        {url: 'https://chan4077.github.io/notes', icon: 'insert_drive_file', color_icon: 'black'},
        {url: 'https://chan4077.github.io/preferences', icon: 'settings', color_icon: 'black'},
        {url: 'https://chan4077.github.io/angular', icon: '', color_icon: 'black'}
    ]
});