var app = angular.module('HelpApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'app.config']);
app.controller('HelpController', function ($scope, $mdDialog) {
    console.info('Loaded HelpController!');
    $scope.refreshPage = function () {
        window.location.reload(true);
    };
    // mdDialog
    $scope.sendFeedback = function (ev) {
        console.debug('Redirecting to Github...');
        window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
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
            $scope.toggleLeftMenu = function () {
                $mdSidenav('left').toggle();
            };
            $scope.mainSites = [
                { link: '/', title: 'Main', icon: 'home' },
                { link: '/about', title: 'About Me', icon: 'account-box' },
                { link: '/angular', title: 'Angular', icon: 'angular' },
                { link: '/beta', title: 'Beta', icon: 'website-logo' },
                { link: '/blog', title: 'Blog', icon: 'blogger' },
                { link: '/help', title: 'Help', icon: 'help-circle' },
                { link: '/media', title: 'Social Media', icon: 'google-plus' }
            ];
        }
    }
})