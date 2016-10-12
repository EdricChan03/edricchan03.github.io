var app = angular.module('errorApp', ['ngMaterial']);
/* Configurations
* This came from test.js
*/
app.config(function ($mdIconProvider) {
  $mdIconProvider.defaultIconSet('/img/mdi.svg');
  console.info('Successfully initialized!');
});
/*
*  Main Controller
*/
app.controller('MainController', function ($scope, $mdSidenav) {
  $scope.main = function () {
    window.location.href = "https://chan4077.github.io";
    console.info('Redirecting to main...');
  };
  $scope.about = function () {
    window.location.href = "https://chan4077.github.io/about#angular";
    console.info('Redirecting To Site...');
  };
  $scope.commit = function () {
    window.location.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
    console.info('Redirecting to Commits...');
  };
  $scope.goBack = function () {
    window.history.back();
  };
  $scope.refreshPage = function () {
    window.location.reload(true);
  };
  // Sidenav
  $scope.openLeftMenu = function () {
    $mdSidenav('left').toggle();
  };
}
);
/*
*  Sidenav Controller
*/
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