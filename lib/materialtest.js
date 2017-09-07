var app = angular.module('materialApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
// Configuration
app.config(($mdIconProvider, $mdThemingProvider) => {
	$mdThemingProvider.enableBrowserColor({
		theme: 'default',
		palette: 'primary',
		hue: '800'
	})
	// materialThemeYellowPurple
	$mdThemingProvider.theme('materialThemeYellowPurple')
		.primaryPalette('yellow')
		.accentPalette('purple')
		.warnPalette('orange')
		.backgroundPalette('grey');
});
app.controller('MaterialController', ($scope) => {
	$scope.divIds = document.querySelectorAll('div[id]');
	$scope.ids = [];
	for (var i = 0; i < $scope.divIds.length; i++) {
		console.dir($scope.divIds[i]);
		$scope.ids.push({ id: $scope.divIds[i].id, name: $scope.divIds[i].children[0].innerText });
	}
	$scope.goToSrc = ()=> {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io/blob/master/angular/material.html";
	}
});