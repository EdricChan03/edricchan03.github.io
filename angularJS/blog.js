var blog = angular.module('blogApp', ['ngMaterial']);
blog.controller('PostController', function($scope) {
    $scope.profile = '';
    $scope.posts = [
        {
            "Author":'Edric Chan', 
            "Job":'Author Of The Site', 
            "Headline":'Test', 
            "Article":'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...'},
        {
            "Author":'John Lim', 
            "Job":'UX Designer', 
            "Headline":'Note', 
            "Article":'This card was made by me!'}
    ];
});