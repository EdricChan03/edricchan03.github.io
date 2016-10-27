var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages']);

// Config
app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');
    console.info('Successfully initialized!');
})

app.controller('MainController', function($scope) {

});

app.controller('SideNavController', function ($scope, $mdSidenav) {
    console.info('SideNavController successfully loaded!');

    $scope.top = [
        { url: 'https://chan4077.github.io', title: 'Main', icon: 'home' },
        { url: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account-box' },
        { url: 'https://chan4077.github.io/blog', title: 'Blog', icon: 'blogger' },
        { url: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'google-plus' },
        { url: 'https://chan4077.github.io/angular', title: 'Angular', icon: 'angular' },
    ];
    $scope.other = [
        { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: 'github-circle' },
        { url: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings' },
        { url: '', title: 'Submit Feedback', icon: 'message-alert' },
        { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' },
    ];
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});

// Directives
app.directive('siteSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
});