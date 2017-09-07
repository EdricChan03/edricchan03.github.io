var app = angular.module('errorApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
/*
*  Main Controller
*/
app.controller('MainController', ($scope, $mdSidenav) => {
	$scope.main = () => {
		window.location.href = "https://chan4077.github.io";
	};
	$scope.about = () => {
		window.location.href = "https://chan4077.github.io/about#angular";
	};
	$scope.commit = () => {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
	};
	$scope.goBack = () => {
		window.history.back();
	};
	$scope.refreshPage = () => {
		window.location.reload(true);
	};
	$scope.help = () => {
		window.location.href = "https://chan4077.github.io/help";
		console.info('Redirecting to Help site...');
	}
})