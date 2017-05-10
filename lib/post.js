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
})
