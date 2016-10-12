var app = angular.module('testApp', ['ngMaterial', 'ngMessages']);
// Config
app.config(function ($mdIconProvider, $mdAriaProvider, $mdToastProvider) {
    $mdIconProvider.defaultIconSet('/img/mdi.svg');
    console.info('Successfully initialized!');
    $mdAriaProvider.disableWarnings();
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
    // Feedback Form ($mdToast)
    $scope.submitForm = function () {
        var toast = $mdToast.simple()
            .textContent('Form was submitted')
            .action('UNDO')
            .highlightAction(true)
            .position('bottom left')
            .hideDelay(3000);

        $mdToast.show(toast).then(function (response) {
            if (response == 'ok') {
                console.info('User clicked Undo.');
                console.log('Successfully undone');
            }
        });
    };
    // Reset Form
    $scope.resetForm = function () {
        var toast = $mdToast.simple()
            .textContent('Form was reset')
            .action('UNDO')
            .highlightAction(true)
            .position('bottom left')
            .hideDelay(3000);

        $mdToast.show(toast).then(function (response) {
            if (response == 'ok') {
                console.info('User clicked Undo.');
                console.log('Successfully undone');
            }
        });
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
            templateUrl: '/templates/whats_new_tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
    };
    $scope.settings = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            teplateUrl: '/templates/settings_tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
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
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    };
$scope.internetCheck = function internetCheck($scope, $mdToast) {
	window.setInterval(function($mdToast) {
		if (navigator.onLine) {
			console.info('User is online!');
    } else {
        $scope.nointernet = function() {
			$mdToast.show({
          hideDelay   : 3000,
          position    : 'bottom left',
          controller  : 'ToastCtrl',
          templateUrl : '/templates/toastoffline.html'
        });
		};
      };
	}, 3000);
};

});
app.controller('OfflineController', function($scope) {
    console.info('OfflineController successfully loaded!');

    $scope.closeToast = function($mdToast) {
        $mdToast.hide();
        console.info('You closed the offline toast.');
    };

});
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
        { url: '', title: 'Get Help', icon: 'help-circle' },
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
app.directive('siteSidenav', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/sidenav.html',
        transclude: true
    };
});
// Feedback Form
app.directive('siteFeedback', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/feedback.html',
        transclude: true
    };
});
// Toolbar
app.directive('siteToolbar', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/toolbar.html',
        transclude: true
    };
});
// Speed Dial
app.directive('siteSpeedDial', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/speeddial.html',
        transclude: true
    };
});