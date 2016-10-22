var app = angular.module('testApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria']);
// Config
app.config(function ($mdIconProvider, $mdToastProvider, $rootScopeProvider) {
    $mdIconProvider.defaultIconSet('/img/mdi.svg');
    console.info('Successfully initialized!');
});
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
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    };
    function FeedbackController($scope, $mdDialog, $mdToast) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
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
    // $mdDialog (end)

    $scope.about_site = function () {
        window.location.href = "https://chan4077.github.io/about#angular";
    };
    $scope.fabitems = [
        { name: 'Facebook', icon: 'facebook-box' },
        { name: 'Twitter', icon: 'twitter-box' },
        { name: 'Google+', icon: 'google-plus' }
    ];
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
        $scope.help = function() {
            window.location.href = "https://chan4077.github.io/help";
            console.info('Redirecting to Help site...');
        }
    };
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
    $scope.made = [
        { url: 'https://materialdesignicons.com', title: 'MaterialDesignIcons', icon: 'vector-square' },
        { url: 'https://material.angularjs.org/latest', title: 'Angular Material', icon: 'angular' },
        { url: 'https://angularjs.org', title: 'Angular', icon: 'angular' },
        { url: 'https://pages.github.com', title: 'Github Pages', icon: 'github-circle' }
    ]
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});
/*
*  Directives
*/
// Sidenav
app.directive('siteSidenav', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
});
// Toolbar
app.directive('siteToolbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/toolbar.html',
        transclude: true
    };
});
// Speed Dial
app.directive('siteSpeedDial', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/speeddial.html',
        transclude: true
    };
});