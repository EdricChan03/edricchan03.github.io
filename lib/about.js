var app = angular.module('AboutApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
app.controller('MainController', ($scope, $mdSidenav) => {
	$scope.toggleLeftMenu = () => {
		$mdSidenav('left').toggle();
	}
	$scope.links = [
		{ url: 'https://chanziyangedric.blogspot.com', title: 'My Main blog' },
		{ url: 'https://githubpageschan4077.firebaseapp.com', title: 'V2 of my website' }
	]
});
// Directives