var app = angular.module('testApp', ['ngMaterial']);
// Config
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('purple');
});
app.controller('MainController', function ($scope, $mdSidenav, $mdDialog) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    $scope.openRightMenu = function () {
        $mdSidenav('right').toggle();
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
        $scope.feedbackbeta.$setPristine();
        // Reset validation errors
        $scope.feedbackbeta.$setUntouched();
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
            controller: DialogController,
            templateUrl: 'whats_new_tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
    };
    $scope.settings = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            teplateUrl: 'settings_tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
    };

    // $mdDialog (end)
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    };

});

app.controller('SideNavController', function ($scope) {
    $scope.urls = [
        { url: 'https://chan4077.github.io', icon: 'home' },
        { url: 'https://chan4077.github.io/about', icon: 'account_box' },
        { url: 'https://chan4077.github.io/blog', icon: '' },
        { url: 'https://chan4077.github.io/media', icon: 'group' },
        { url: 'https://chan4077.github.io/notes', icon: 'insert_drive_file'},
        { url: 'https://chan4077.github.io/preferences', icon: 'settings' },
        { url: 'https://chan4077.github.io/angular', icon: '' }
    ];
});