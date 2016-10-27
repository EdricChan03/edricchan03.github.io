var app = angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages']);

app.controller('MainController', function($scope) {
    $scope.cards = [
        { avatar: '/img/logo.svg', name: 'Edric Chan', job: 'Owner', imagePath: '/img/angular_1.jpeg', imageAlt: 'Nice Flowers', postTitle: 'First Post', content: 'Welcome! This is some test post that will see if this works!', fullPost: ''},
        { avatar: '', name: 'John Sim', job: 'Co-Author of Blog', imagePath: '', imageAlt: '', postTitle: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet', fullPost: ''}
    ]
});