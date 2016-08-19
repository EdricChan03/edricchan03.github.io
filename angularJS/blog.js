var blog = angular.module('blogApp', ['ngMaterial']);
blog.controller('PostController', function($scope) {
    $scope.profile = '';
    $scope.posts = [
        {author: 'Edric Chan'}
    ];
});