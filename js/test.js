var app = angular.module('testApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria']);

app.controller('MainController', function ($scope, $mdSidenav, $mdDialog, $mdToast) {
    // Refresh page, direct from server
    console.info('MainController successfully loaded!');
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    // Sidenav
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    // More menu
    var originatorEv;

    $scope.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    // Initialize switches
    $scope.switch = {
        form_debug: false,
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
    function WhatNewController($scope, $mdDialog, $mdToast) {
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
    };
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
    $scope.fabitems = [
        { name: 'Facebook', icon: 'facebook-box' },
        { name: 'Twitter', icon: 'twitter-box' },
        { name: 'Google+', icon: 'google-plus' }
    ];
});
/*
app.run(['$rootScope', '$window', '$scope', '$mdToast', function ($window, $rootScope, $mdToast, $scope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function () {
            $rootScope.online = false;
        });
    }, false);
    $window.addEventListener("online", function () {
        $rootScope.$apply(function () {
            $rootScope.online = true;
        });
    }, false);
    $rootScope.$broadcast('online');

    $scope.$on('online', function () {
        if ($rootScope.online) {
            console.info('User is online');
        } else {
            console.error('User is offline');
            $mdToast.show({
                hideDelay: 3000,
                position: 'bottom left',
                controller: 'ToastCtrl',
                templateUrl: '/templates/toastoffline.html'
            });
        };
    });
}])

app.controller('OfflineController', function ($scope) {
    console.info('OfflineController successfully loaded!');

    $scope.closeToast = function ($mdToast) {
        $mdToast.hide();
        console.info('You closed the offline toast.');
    };

});
*/