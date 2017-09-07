var app = angular.module('PostsApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
app.controller('PostController', ($scope) => {

});
app.controller('ToolbarController', ($scope) => {
	$scope.viewGithub = () => {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io";
	};
	$scope.refreshPage = () => {
		window.location.reload(true);
	};
	// $mdDialog (start)
	$scope.sendFeedback = (ev) => {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
	};
})
