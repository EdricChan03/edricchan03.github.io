/**
 * Directives for app
 * @type angular.module
 * @see angular.module
 */
// Sidenav
angular.module('app.directives', [])
    .directive('networkToast', function () {
        /**
         * The network toast controller for when offline and online
         */
        var NetworkToastCtrl = function ($scope, $mdToast, $window) {
            /**
             * Event listener for load
             */
            $window.addEventListener('load', function() {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'bottom left',
                    controller: ToastCtrl,
                    template:
                    '<md-toast>' +
                    '<div class="md-toast-content">' +
                    '<span class="md-toast-text" flex>Welcome to the site!</span>' +
                    '<md-button ng-click="closeToast()" class="md-icon-button" aria-label="Close Toast">' +
                    '<md-icon md-svg-icon="close" />' +
                    '</md-button>' +
                    '</div>' +
                    '</md-toast>'
                });
            })
            /**
             * Event listener for offline
             */
            $window.addEventListener('offline', function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'bottom left',
                    controller: ToastCtrl,
                    template:
                    '<md-toast>' +
                    '<div class="md-toast-content">' +
                    '<span class="md-toast-text" flex>Connection restored!</span>' +
                    '<md-button ng-click="closeToast()" class="md-icon-button" aria-label="Close Toast">' +
                    '<md-icon md-svg-icon="close" />' +
                    '</md-button>' +
                    '</div>' +
                    '</md-toast>'
                });
            })
            /**
             * Event listener for online
             */
            $window.addEventListener('online', function () {
                $mdToast.show({
                    hideDelay: 3000,
                    position: 'bottom left',
                    controller: ToastCtrl,
                    template:
                    '<md-toast>' +
                    '<div class="md-toast-content">' +
                    '<span class="md-toast-text" flex>You are offline.</span>' +
                    '<md-button ng-click="closeToast()" class="md-icon-button" aria-label="Close Toast">' +
                    '<md-icon md-svg-icon="close" />' +
                    '</md-button>' +
                    '</div>' +
                    '</md-toast>'
                });
            })
            /**
             * The function for ToastCtrl
             */
            function ToastCtrl($scope, $mdToast) {
                /**
                 * Closes the toast on click
                 */
                $scope.closeToast = function () {
                    $mdToast.hide();
                }
            }
        }
        return {
            restrict: 'E',
            transclude: true,
            controller: NetworkToastCtrl
        };
    })
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
            $scope.toggleAllLinks = function () {
                if (!$scope.toggledLinks && !$scope.toggledOtherLinks && !$scope.toggledProjectLinks) {
                    $scope.toggledAllLinks = true;
                    $scope.toggledLinks = true;
                    $scope.toggledProjectLinks = true;
                    $scope.toggledOtherLinks = true;
                    console.log('All are expanded.');
                } else {
                    $scope.toggledAllLinks = false;
                    $scope.toggledLinks = false;
                    $scope.toggledProjectLinks = false;
                    $scope.toggledOtherLinks = false;
                    console.log('They are collapsed.');
                }
            };
            $scope.toggleLinks = function () {
                $scope.toggledLinks = !$scope.toggledLinks;
                console.log('Toggled links: ' + $scope.toggledLinks);
            }
            $scope.toggleOtherLinks = function () {
                $scope.toggledOtherLinks = !$scope.toggledOtherLinks;
                console.log('Toggled other links: ' + $scope.toggledOtherLinks);
            }
            $scope.toggleProjectLinks = function () {
                $scope.toggledProjectLinks = !$scope.toggledProjectLinks;
                console.log('Toggled project links: ' + $scope.toggledProjectLinks);
            }
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
                console.info('Loaded site-toolbar!');
                $scope.title = document.title;
                $scope.viewGithub = function () {
                    window.location.href = "https://github.com/Chan4077/chan4077.github.io";
                };
                $scope.refreshPage = function () {
                    window.location.reload(true);
                };
                // $mdDialog (start)
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
                    alert('Redirecting to Github...');
                    window.location.href = 'https://github.com/Chan4077/chan4077.github.io/issues/new';
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
    .config(function ($mdIconProvider, $mdToastProvider, $interpolateProvider, $locationProvider) {
        $mdIconProvider
            .defaultIconSet('/img/mdi.svg')
            .icon('website-logo', '/img/website.svg');
        console.info('Successfully initialized!');
        $interpolateProvider.startSymbol('{(');
        $interpolateProvider.endSymbol(')}');
        $locationProvider.html5Mode(true);
    });