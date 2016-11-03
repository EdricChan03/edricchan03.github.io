var app = angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages']);

app.config(function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');

    console.info('Successfully initialized!');
});
app.controller('MainController', function ($scope, $mdDialog) {
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    $scope.markFavourite = "";
    $scope.toggleFavourite = function() {
        if ($scope.markFavourite === "") {
            $scope.markFavourite = "md-warn";
        } else {
            $scope.markFavourite = "";
        }
    }
    // More menu
    var originatorEv;

    $scope.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
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
    $scope.cards = [
        { avatar: '/img/logo.svg', name: 'Edric Chan', job: 'Owner', imagePath: '/img/angular_1.jpeg', imageAlt: 'Nice Flowers', postTitle: 'First Post', content: 'Welcome! This is some test post that will see if this works!', fullPost: '', halfSize: true, fixedSize: false },
        { avatar: '', name: 'John Sim', job: 'Co-Author of Blog', imagePath: '', imageAlt: '', postTitle: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet', fullPost: '', halfSize: false, fixedSize: false },
        { avatar: '', name: 'Joy', job: 'Designer', imagePath: '', imageAlt: '', postTitle: 'Another post!', content: 'This is my first post!', fullPost: '', halfSize: false, fixedSize: false }
    ];
});