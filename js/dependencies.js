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
                { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' },
                { url: 'https://chan4077.github.io/beta', title: 'Beta', icon: ''}
            ];
            $scope.projects = [
                { url: 'https://chan4077.github.io/projects', title: 'Projects', icon: '' },
                { url: 'https://chan4077.github.io/MyFirstApp', title: 'MyFirstApp', icon: '' },
                { url: 'https://chan4077.github.io/icons', title: 'Icons', icon: '' }
            ]
            // Toggle left sidenav
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
            controller: function ToolbarController($scope, $location, $mdDialog, $mdToast) {
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
                $scope.viewGithub = function () {
                    window.location.href = "https://github.com/Chan4077/chan4077.github.io";
                };
                $scope.refreshPage = function () {
                    window.location.reload(true);
                };
                // $mdDialog (start)
                $scope.whats_new = function (ev) {
                    $mdDialog.show({
                        controller: WhatNewController,
                        templateUrl: '/templates/whats_new_tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                    });
                };
                $scope.settings = function (ev) {
                    $mdDialog.show({
                        controller: SettingsController,
                        templateUrl: '/templates/settings_tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                    });
                };
                $scope.sendFeedback = function (ev) {
                    $mdDialog.show({
                        controller: FeedbackController,
                        templateUrl: '/templates/feedbackhelp.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                    });
                };
                // More menu
                var originatorEv;

                $scope.openMenu = function ($mdOpenMenu, ev) {
                    originatorEv = ev;
                    $mdOpenMenu(ev);
                };
                // What's New
                function WhatNewController($scope, $mdDialog, $mdToast) {
                    // Hide button
                    $scope.hide = function () {
                        // Hides $mdDialog
                        $mdDialog.hide();
                    };
                    // Cancel button
                    $scope.cancel = function () {
                        // Cancels $mdDialog
                        $mdDialog.cancel();
                    };
                    // Help button
                    $scope.help = function () {
                        // Redirect to help site
                        window.location.href = "https://chan4077.github.io/help";
                        console.info('Redirecting to Help site...');
                    }
                    // More Info button
                    $scope.moreInfo = function () {
                        // Note that this is percent-encoded
                        // More information: https://en.wikipedia.org/wiki/Percent-encoding
                        window.location.href = "https://github.com/Chan4077/chan4077.github.io/wiki/What%27s-New";
                    }
                };
                // Feedback
                function FeedbackController($scope, $mdDialog, $mdToast) {
                    $scope.hide = function () {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.help = function () {
                        window.location.href = "https://chan4077.github.io/help/about_feedback.html";
                        console.info('Redirecting to Help site...');
                    }
                    $scope.oriFeedback = {
                        name: "",
                        email: "",
                        sendFeedback: ""
                    };
                    // Declare a variable called oriFeedback
                    var oriFeedback = angular.copy($scope.oriFeedback);

                    // On initial, set feedback to original
                    $scope.feedback = angular.copy(oriFeedback);

                    // Reset form
                    $scope.reset = function () {
                        $scope.feedback = angular.copy(oriFeedback);
                        // Reset form
                        $scope.feedbackhelp.$setPristine();
                        // Reset validation errors
                        $scope.feedbackhelp.$setUntouched();
                    };
                    $scope.submitForm = function () {
                        $mdDialog.cancel();
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('You submitted the form!')
                                .position('bottom left')
                                .hideDelay(3000)
                        );
                    };
                };
                // Settings
                function SettingsController($scope, $mdDialog) {
                    $scope.hide = function () {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.help = function () {
                        window.location.href = "https://chan4077.github.io/help";
                        console.info('Redirecting to Help site...');
                    }
                    $scope.general_settings = {
                        proBar: true,
                        enableSound: true
                    };
                    $scope.developer_settings = {
                        consoleLog: false,
                        showExtraOptions: false
                    };
                    $scope.extra_settings = {
                        showCredits: true,
                        enableOffline: true
                    };
                };
                // $mdDialog (end)

                $scope.about_site = function () {
                    window.location.href = "https://chan4077.github.io/about#angular";
                };
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
    // App config
angular.module('app.config', [])
    .config(function ($mdIconProvider, $mdToastProvider) {
        $mdIconProvider
            .defaultIconSet('/img/mdi.svg')
            .icon('website-logo', '/img/website.svg');
        console.info('Successfully initialized!');
    });