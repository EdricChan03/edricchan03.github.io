/*
*  Directives
*/
// Sidenav
angular.module('app.directives', [])
    .directive('siteSidenav', function () {
        var SidenavController = function ($scope, $mdSidenav) {
            console.info('Successfully loaded!');

            $scope.main = [
                { url: 'https://chan4077.github.io', title: 'Main', icon: 'home' },
                { url: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account-box' },
                { url: 'https://chan4077.github.io/blog', title: 'Blog', icon: 'blogger' },
                { url: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'google-plus' },
                { url: 'https://chan4077.github.io/angular', title: 'Angular', icon: 'angular' },
            ];
            $scope.other = [
                { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: 'github-circle' },
                { url: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings' },
                { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' }
            ];
            $scope.projects = [
                { url: 'https://chan4077.github.io/projects', title: 'Projects', icon: '' },
                { url: 'https://chan4077.github.io/MyFirstApp', title: 'MyFirstApp', icon: '' },
                { url: 'https://chan4077.github.io/icons', title: 'Icons', icon: '' }
            ]
            $scope.openLeftMenu = function () {
                $mdSidenav('left').toggle();
            }
        };
        return {
            restrict: 'E',
            templateUrl: '/templates/sidenav.html',
            transclude: true,
            controller: SidenavController
        };
    })
    // Toolbar
    .directive('siteToolbar', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/toolbar.html',
            transclude: true,
            controller: function ToolbarController($scope, $location) {
                console.info('Loaded!');
                if ($location.path().indexOf('beta') > -1) {
                    $scope.title = 'Beta';
                } else if ($location.path().indexOf('beta/blog.html') > -1) {
                    $scope.title = 'Beta Blog';
                } else if ($location.path().indexOf('help') > -1) {
                    $scope.title = 'Help';
                } else if ($location.path().indexOf('about') > -1) {
                    $scope.title = 'About';
                } else if ($location.path().indexOf('angular/material.html') > -1) {
                    $scope.title = 'Anglar Material Demo';
                } else if ($location.path().indexOf('media') > -1) {
                    $scope.title = 'Social Media';
                } else if ($location.path().indexOf('preferences') > -1) {
                    $scope.title = 'Preferences';
                } else if ($location.path().indexOf('404.html') > -1) {
                    $scope.title = 'Error 404';
                } else if ($location.path().indexOf('') > -1) {
                    $scope.title = 'Home';
                } else if ($location.path().indexOf('blog') > -1) {
                    $scope.title = 'Blog';
                } else if ($location.path().indexOf('projects') > -1) {
                    $scope.title = 'Projects';
                } else {
                    $scope.title = '{{title}}';
                }
                console.log('url visited: ' + $location.path());
            }
        };
    })
    // Speed Dial
    .directive('siteSpeedDial', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/speeddial.html',
            transclude: true
        };
    })
    // Controllers
    .controller('SideNavController', function ($scope, $mdSidenav) {

    })
angular.module('app.config', [])
    .config(function ($mdIconProvider, $mdToastProvider) {
        $mdIconProvider
            .defaultIconSet('/img/mdi.svg')
            .icon('website-logo', '/img/website.svg');
        console.info('Successfully initialized!');
    });