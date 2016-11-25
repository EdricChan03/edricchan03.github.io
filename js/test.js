var app = angular.module('testApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'app.config', 'app.directives']);

app.controller('MainController', function ($scope, $mdSidenav, $mdDialog, $mdToast) {
    // Refresh page, direct from server
    console.info('MainController successfully loaded!');
    // Sidenav
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    // Initialize switches
    $scope.switch = {
        form_debug: false,
    };
    $scope.fabitems = [
        { name: 'Facebook', icon: 'facebook-box' },
        { name: 'Twitter', icon: 'twitter-box' },
        { name: 'Google+', icon: 'google-plus' }
    ];
});
/*
app.run(['$rootScope', '$window', '$scope', '$mdToast', function ($window, $rootScope, $mdToast, $scope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function () {
            $rootScope.online = false;
        });
    }, false);
    $window.addEventListener("online", function () {
        $rootScope.$apply(function () {
            $rootScope.online = true;
        });
    }, false);
    $rootScope.$broadcast('online');

    $scope.$on('online', function () {
        if ($rootScope.online) {
            console.info('User is online');
        } else {
            console.error('User is offline');
            $mdToast.show({
                hideDelay: 3000,
                position: 'bottom left',
                controller: 'ToastCtrl',
                templateUrl: '/templates/toastoffline.html'
            });
        };
    });
}])

app.controller('OfflineController', function ($scope) {
    console.info('OfflineController successfully loaded!');

    $scope.closeToast = function ($mdToast) {
        $mdToast.hide();
        console.info('You closed the offline toast.');
    };

});
*/