var app = angular.module('HelpApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'app.config', 'app.directives']);
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
                { title: 'Help Homepage', link: '/help', icon: 'home' },
                { title: 'About Feedback', link: '/help/about_feedback.html', icon: 'help-circle' }
            ];
            $scope.toggleLeftMenu = function () {
                $mdSidenav('left').toggle();
            };
            $scope.mainSites = [
                { link: '/about', title: 'About Me', icon: 'account-box' },
                { link: '/angular', title: 'Angular', icon: 'angular' },
                { link: '/beta', title: 'Beta', icon: 'flask' },
                { link: '/blog', title: 'Blog', icon: 'blogger' },
                { link: '/help', title: 'Help', icon: 'help-circle' },
                { link: '/media', title: 'Social Media', icon: 'google-plus' }
            ];
        }
    }
})