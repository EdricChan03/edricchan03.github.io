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
    // Menu ngRepeat
    $scope.menu = [
        { text: 'What\'s New', icon: 'new_releases', onclick: 'whats_new($event)'},
        { text: 'Settings', icon: 'settings', onclick: 'settings($event)'},
        { text: 'Report A Problem', icon: 'report_problem', onclick: ''},
        { text: 'Submit Bug Report', icon: 'bug_report', onclick: ''}
    ];
    // End ngRepeat

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
    $scope.top = [
        { url: 'https://chan4077.github.io', title: 'Main', icon: 'home', class: 'material-icons' },
        { url: 'https://chan4077.github.io/about', title: 'About Me', icon: 'account_box', class: 'material-icons' },
        { url: 'https://chan4077.github.io/blog', title: 'Blog', icon: '', class: '' },
        { url: 'https://chan4077.github.io/media', title: 'Social Media', icon: 'group', class: 'material-icons' },
        { url: 'https://chan4077.github.io/preferences', title: 'Preferences', icon: 'settings', class: 'material-icons' },
        { url: 'https://chan4077.github.io/angular', title: 'Angular', icon: '' },
        { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: '' }
    ];
});