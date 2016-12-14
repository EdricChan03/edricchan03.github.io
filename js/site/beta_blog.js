var app = angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages']);
app.config(function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');
})

app.controller('MainController', function ($scope, $mdDialog, $mdToast, $log, $mdUtil) {
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    $scope.favouriteTooltip = {};
    $scope.markFavourite = {};
    $scope.toggleFavourite = function (id) {
        if ($scope.markFavourite[id]) {
            $scope.markFavourite[id] = false;
            $scope.favouriteTooltip = 'Mark as favourite';
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Removed favourite')
                    .position('bottom left')
                    .hideDelay(3000)
            );
            $log.info('Removed Favourite!');
        } else {
            $scope.markFavourite[id] = true;
            $scope.favouriteTooltip = 'Remove favourite';
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Marked as favourite')
                    .position('bottom left')
                    .hideDelay(3000)
            );
            $log.info('Marked as favourite!');
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
        { avatar: '/img/logo.svg', name: 'Edric Chan', job: 'Owner', imagePath: '/img/angular_1.jpeg', imageAlt: 'Nice Flowers', postTitle: 'First Post', content: 'Welcome! This is some test post that will see if this works!', fullPost: '', halfSize: true, fixedSize: false, id: 1 },
        { avatar: '', name: 'John Sim', job: 'Co-Author of Blog', imagePath: '', imageAlt: '', postTitle: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet', fullPost: '', halfSize: false, fixedSize: false, id: 2 },
        { avatar: '', name: 'Joy', job: 'Designer', imagePath: '', imageAlt: '', postTitle: 'Another post!', content: 'This is my first post!', fullPost: '', halfSize: false, fixedSize: false, id: 3 }
    ];
    var mainContent = document.querySelector("[role='main']");
    var scrollContent = mainContent.querySelector('md-content[md-scroll-y]')
    $scope.scrollTop = function () {
        $mdUtil.animateScrollTo(scrollContent, 0, 200);
    };

});
app.directive('blogScrollClass', function () {
    /** Directive which applies a specified class to the element when being scrolled */
    return {
        restrict: 'A',
        link: function (scope, element, attr) {

            var scrollParent = element.parent();
            var isScrolling = false;

            // Initial update of the state.
            updateState();

            // Register a scroll listener, which updates the state.
            scrollParent.on('scroll', updateState);

            function updateState() {
                var newState = scrollParent[0].scrollTop !== 0;

                if (newState !== isScrolling) {
                    element.toggleClass(attr.docsScrollClass, newState);
                }

                isScrolling = newState;
            }
        }
    };
});