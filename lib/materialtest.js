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

});