var app = angular.module('ProjectApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);

app.controller('ProjectsController', ($scope) => {
	$scope.projects = [
		{ name: 'MyFirstApp', url: '/MyFirstApp' },
		{ name: 'Icons', url: '/icons' }
	];
});