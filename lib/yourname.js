var app = angular.module('nameApp', ['ngMaterial']);
app.config(($interpolateProvider)=> {
	$interpolateProvider.startSymbol('{(');
	$interpolateProvider.endSymbol(')}');
});
app.controller('NameController', ($scope)=> {

});