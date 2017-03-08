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
})
