var blog = angular.module('blogApp', ['ngMaterial']);
blog.controller('PostController', function($scope) {
    $scope.profile = '';
    $scope.posts = [
        {author: 'Edric Chan',
        job: 'Author Of The Site',
        headline: 'Test',
        article: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...'
        }
    ];
});