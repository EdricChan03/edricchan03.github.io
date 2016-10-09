var app = angular.module('testApp', ['ngMaterial', 'ngMessages']);
// Config
app.config(function ($mdThemingProvider, $mdunicodeProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('purple');
    $mdIconProvider.defaultFontSet('mdi')
                   .defaultIconSet('/img/mdi.svg');
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

    $scope.about_site = function () {
        window.location.href = "https://chan4077.github.io/about#angular";
    };
    $scope.fabitems = [
        { name: 'Facebook', unicode: '&#xF20D;' },
        { name: 'Twitter', unicode: '&#xF545;' },
        { name: 'Google+', unicode: '&#xF2BD;' }
    ];
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    };

});

app.controller('SideNavController', function ($scope, $mdSidenav) {
    console.info('SideNavController successfully loaded!');

    $scope.top = [
        { url: 'https://chan4077.github.io', title: 'Main', unicode: '&#xF2DC;' },
        { url: 'https://chan4077.github.io/about', title: 'About Me', unicode: '&#xF006;' },
        { url: 'https://chan4077.github.io/blog', title: 'Blog', unicode: '&#xF0AE;' },
        { url: 'https://chan4077.github.io/media', title: 'Social Media', unicode: '&#xF2BD;' },
        { url: 'https://chan4077.github.io/angular', title: 'Angular', unicode: '&#xF6B1;' },
    ];
    $scope.other = [
        { url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', unicode: '&#xF2A4;' },
        { url: 'https://chan4077.github.io/preferences', title: 'Preferences', unicode: '&#xF493;' },
        { url: '', title: 'Submit Feedback', unicode: '&#xF362;' },
        { url: '', title: 'Get Help', unicode: '&#xF2D7;' },
    ];
    $scope.made = [
        { url: 'https://materialdesignunicodes.com', title: 'MaterialDesignunicodes', unicode: '&#xF001;' },
        { url: 'https://material.angularjs.org/latest', title: 'Angular Material', unicode: '&#xF6B1;' },
        { url: 'https://angularjs.org', title: 'Angular', unicode: '&#xF6B1;' },
        { url: 'https://pages.github.com', title: 'Github Pages', unicode: '&#xF2A4;' }
    ]
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    }
});