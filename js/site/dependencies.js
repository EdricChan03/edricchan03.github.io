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
                { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' },
                { url: 'https://chan4077.github.io/beta', title: 'Beta', icon: 'flask' },
                { url: 'https://chan4077.github.io/beta/blog.html', title: 'Beta Blog', icon: 'flask' },
                { url: 'https://github.com/Chan4077/chan4077.github.io/wiki/Sites', title: 'Sitemap', icon: 'sitemap' }
            ];
            $scope.projects = [
                { url: 'https://chan4077.github.io/projects', title: 'Projects', icon: 'code-tags' },
                { url: 'https://chan4077.github.io/MyFirstApp', title: 'MyFirstApp', icon: 'code-tags' },
                { url: 'https://chan4077.github.io/icons', title: 'Icons', icon: 'code-tags' }
            ];
            // Toggle left sidenav
            $scope.toggleLeftMenu = function () {
                $mdSidenav('left').toggle();
            };
        };
        return {
            restrict: 'E',
            templateUrl: '/templates/sidenav.html',
            transclude: true,
            controller: SidenavController
        };
    })
    .directive('siteToolbar', function () {
        return {
            restrict: 'E',
            templateUrl: '/templates/toolbar.html',
            transclude: true,
            controller: function ToolbarController($scope, $location, $mdDialog, $mdToast) {
                console.info('Loaded!');
                $scope.data = [{
                    "url": "/",
                    "name": "Home"
                }, {
                    "url": "beta",
                    "name": "Beta"
                }, {
                    "url": "cookies",
                    "name": "Cookies"
                }, {
                    "url": "projects",
                    "name": "Projects"
                }, {
                    "url": "help",
                    "name": "Help"
                }, {
                    "url": "about",
                    "name": "About"
                }, {
                    "url": "angular",
                    "name": "Angular"
                }]
                var urls = ['/', 'beta', 'cookies', 'projects', 'help', 'about', 'angular']
                angular.forEach($scope.data, function (value, key) {
                    // Based on http://plnkr.co/edit/WeQhCb?p=preview
                    if (urls.indexOf(value.url) !== -1) {
                        $scope[value.url] = value.name;
                    } else {
                        console.error('Invalid value');
                    }

                })
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
                $scope.sendFeedback = function () {
                    // Head to Github -> Create new issue
                    var toast = $mdToast.simple()
                        .textContent('Send feedback here: ')
                        .action('GO TO GITHUB')
                        .highlightAction(true)
                        .position(pinTo);

                    $mdToast.show(toast).then(function (response) {
                        if (response == 'ok') {
                            alert('Redirecting to Github...');
                            window.location.href = 'https://github.com/Chan4077/chan4077.github.io/issues/new';
                        }
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
                            $mdToast.show(
                                $mdToast.simple()
                                    .textContent('Feedback cancelled')
                                    .position('bottom left')
                                    .hideDelay(3000)
                            );
                        };
                        $scope.help = function () {
                            window.location.href = "https://chan4077.github.io/help/about_feedback.html";
                            console.info('Redirecting to Help site...');
                        }
                        // $scope.oriFeedback = {
                        //     name: "",
                        //     email: "",
                        //     sendFeedback: ""
                        // };
                        // // Declare a variable called oriFeedback
                        // var oriFeedback = angular.copy($scope.oriFeedback);

                        // // On initial, set feedback to original
                        // $scope.feedback = angular.copy(oriFeedback);

                        // // Reset form
                        // $scope.reset = function () {
                        //     $scope.feedback = angular.copy(oriFeedback);
                        //     // Reset form
                        //     $scope.feedbackhelp.$setPristine();
                        //     // Reset validation errors
                        //     $scope.feedbackhelp.$setUntouched();
                        // };
                        $scope.postOnGithub = function () {
                            $mdDialog.cancel();
                            console.debug('Redirecting to Github...');
                            window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
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
                        // $mdDialog (end)

                        $scope.about_site = function () {
                            window.location.href = "https://chan4077.github.io/about#angular";
                        };
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
    .config(function ($mdIconProvider, $mdToastProvider, $interpolateProvider) {
        $mdIconProvider
            .defaultIconSet('/img/mdi.svg')
            .icon('website-logo', '/img/website.svg');
        console.info('Successfully initialized!');
        $interpolateProvider.startSymbol('{(');
        $interpolateProvider.endSymbol(')}');
    });