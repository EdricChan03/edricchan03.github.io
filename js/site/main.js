angular.module('AboutApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controlller('MainController', function($scope) {

});

angular.module('BetaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controller('MainController', function($scope) {

});

angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controlller('MainController', function($scope) {
  
});
angular.module('DefaultApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controller('DefaultController', function($scope) {

})
angular.module('HelpApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controlller('MainController', function($scope) {
  
});

angular.module('MediaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controlller('SocialController', function($scope) {
  $scope.social = [
    {name: 'Facebook', url: 'https://facebook.com/Chan4077'},
    {name: 'Google+', url: 'https://plus.google.com/108173317645034603378'},
    {name: 'Twitter', url: 'https://twitter.com/Chan4077'},
    {name: 'Github', url: 'https://github.com/Chan4077'},
    {name: 'YouTube', url: 'https://www.youtube.com/channel/UCr2qrcCxls5FnYXsNFtVEzw'},
    {name: 'Codepen', url: 'https://codepen.io/Chan4077'},
    {name: 'Pinterest', url: 'https://pinterest.com/edricchan1997'},
    {name: 'StackOverflow', url: 'http://stackoverflow.com/users/6782707/edric'},
    {name: 'Instagram', url: 'https://instagram.com/chanedric'}
  ];
});

angular.module('PreferenceApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controlller('MainController', function($scope) {
  
});
// testApp
angular.module('testApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controller('MainController', function ($scope, $mdSidenav, $mdDialog, $mdToast) {
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
.run(['$rootScope', '$window', '$scope', '$mdToast', function ($window, $rootScope, $mdToast, $scope) {
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