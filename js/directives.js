/*
*  Directives
*/
// Sidenav
angular.module('app.directives', [])
    .directive('siteSidenav', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/sidenav.html',
            transclude: true,
            controller: function ($scope, $mdSidenav) {
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
            }
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
                var path = $location.path();
                if (path === '/beta') {
                    $scope.title = 'Beta';
                } else if (path === '/beta/blog.html') {
                    $scope.title = 'Beta Blog';
                } else if (path === '/help') {
                    $scope.title = 'Help';
                } else if (path === '/about') {
                    $scope.title = 'About';
                } else if (path === '/angular/material.html') {
                    $scope.title = 'Anglar Material Demo';
                } else if (path === '/media') {
                    $scope.title = 'Social Media';
                } else if (path === '/preferences') {
                    $scope.title = 'Preferences';
                } else if (path === '/404.html') {
                    $scope.title = 'Error 404';
                } else if (path === '/') {
                    $scope.title = 'Home';
                } else if (path === '/blog') {
                    $scope.title = 'Blog';
                } else if (path === '/blog/') {
                    $scope.title = '{{page.title}}';
                } else if (path === '/projects') {
                    $scope.title = 'Projects';
                } else {
                    $scope.title = '{{title}}';
                }
                console.log('url visited: ' + path);
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
    });