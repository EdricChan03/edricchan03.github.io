var app = angular.module('HelpApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'app.config']);
app.controller('HelpController', function ($scope, $mdDialog) {
    console.info('Loaded HelpController!');
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    // mdDialog
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
        console.debug('Redirecting to Github...');
        window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
    };
    function SettingsController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
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
        $scope.help = function () {
            window.location.href = "https://chan4077.github.io/help";
            console.info('Redirecting to Help site...');
        }
    };
});
// Directives

app.directive('helpSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/helpsidenav.html',
        transclude: true,
        controller: function ($scope, $mdSidenav) {
            $scope.helpSites = [
                { title: 'Main', link: 'https://chan4077.github.io/help', icon: 'home' },
                { title: 'About Feedback', link: 'https://chan4077.github.io/help/about_feedback.html', icon: '' }
            ];
            $scope.toggleLeftMenu = function () {
                $mdSidenav('left').toggle();
            };
            $scope.mainSites = [
                { link: 'https://chan4077.github.io', title: 'Main', icon: 'home' },
                { link: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account-box' },
                { link: 'https://chan4077.github.io/angular', title: 'Angular', icon: 'angular' },
                { link: 'https://chan4077.github.io/beta', title: 'Beta', icon: 'website-logo' },
                { link: 'https://chan4077.github.io/blog', title: 'Blog', icon: 'blogger' },
                { link: 'https://chan4077.github.io/help', title: 'Help', icon: 'help-circle' },
                { link: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'google-plus' },
                { link: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings' }

            ];
        }
    }
})