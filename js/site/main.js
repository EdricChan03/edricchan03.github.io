angular.module('AboutApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controlller('MainController', function($scope) {

});

angular.module('BetaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controller('MainController', function($scope) {

});

angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controlller('MainController', function($scope) {
  
});

angular.module('HelpApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controlller('MainController', function($scope) {
  
});

angular.module('MediaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controlller('MainController', function($scope) {
  
});

angular.module('PreferenceApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .defaultIconSet('/img/mdi.svg')
    .icon('website-logo', '/img/website.svg');
})
.controlller('MainController', function($scope) {
  
})
.directive('siteSidenav', function() {

})