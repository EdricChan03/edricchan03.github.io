var app = angular.module('HelpApp', ['ngMaterial']);
// Config
app.config(function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet('/img/mdi.svg');
    console.info('Successfully initialized!');
});
app.controller('HelpController', function ($scope, $mdDialog) {
    console.info('Loaded HelpController!');
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    $scope.sendFeedback = function (ev) {
        $mdDialog.show({
            controller: FeedbackController,
            templateUrl: '/templates/feedbackhelp.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        })
            .then(function (answer) {
                $scope.status = 'Your answer was: "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
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
app.controller('SearchController', function ($scope) {
    console.info('Loaded SearchController!');
    $scope.search = '  ';
});
// Sidenav
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
        { url: 'https://chan4077.github.io/help', title: 'Get Help', icon: 'help-circle' },
    ];
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
})