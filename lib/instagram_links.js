var app = angular.module('instagramLinksApp', ['ngMaterial', 'app.config', 'app.directives']);
app.controller('MainController', ($scope) => {
	$scope.links = [
		{
			postUrl: 'https://example.com',
			postDate: '29-01-2018',
			postTitle: 'Post title',
			linkId: 'postId-one',
			linkActions: [
				{
					btnText: 'Link #1',
					btnLink: 'https://example.com'
				},
				{
					btnText: 'Link #2',
					btnLink: 'https://example.com'
				}
			]
		},
		{
			postUrl: 'https://example.com',
			postDate: '29-01-2018',
			postTitle: 'Post title',
			linkId: 'postId-two',
			linkActions: [
				{
					btnText: 'Link #1',
					btnLink: 'https://example.com'
				},
				{
					btnText: 'Link #2',
					btnLink: 'https://example.com'
				}
			]
		},
		{
			postUrl: 'https://example.com',
			postDate: '29-01-2018',
			postTitle: 'Post title',
			linkId: 'postId-three',
			linkActions: [
				{
					btnText: 'Link #1',
					btnLink: 'https://example.com'
				},
				{
					btnText: 'Link #2',
					btnLink: 'https://example.com'
				}
			]
		},
		{
			postUrl: 'https://example.com',
			postDate: '29-01-2018',
			postTitle: 'Post title',
			linkId: 'postId-four',
			linkActions: [
				{
					btnText: 'Link #1',
					btnLink: 'https://example.com'
				},
				{
					btnText: 'Link #2',
					btnLink: 'https://example.com'
				}
			]
		}
	];
})