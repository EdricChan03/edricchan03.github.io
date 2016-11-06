var app = angular.module('HelpApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'app.config']);
// Config
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
        $mdDialog.show({
            controller: FeedbackController,
            templateUrl: '/templates/feedbackhelp.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
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
            $scope.openLeftMenu = function () {
                $mdSidenav('left').toggle();
            };
            $scope.mainSites = [
                { link: 'https://chan4077.github.io', title: 'Main', icon: 'home' },
                { link: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account-box' },
                { link: 'https://chan4077.github.io/angular', title: 'Angular', icon: 'angular' },
                { link: 'https://chan4077.github.io/beta', title: 'Beta', icon: 'website-logo'},
                { link: 'https://chan4077.github.io/blog', title: 'Blog', icon: 'blogger' },
                { link: 'https://chan4077.github.io/help', title: 'Help', icon: 'help-circle'},
                { link: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'google-plus' },
                { link: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings' }

            ];
        }
    }
})