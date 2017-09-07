var app = angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.directives']);
app.config(($mdIconProvider, $interpolateProvider) => {
	$mdIconProvider.defaultIconSet('/img/mdi.svg')
		.icon('website-logo', '/img/website.svg');
	$interpolateProvider.startSymbol('{(');
	$interpolateProvider.endSymbol(')}');
})

app.controller('MainController', ($scope, $mdDialog, $mdToast, $log, $mdUtil, $mdBottomSheet, $mdMenu) => {
	$scope.refreshPage = () => {
		window.location.reload(true);
	};
	$scope.favouriteTooltip = {};
	$scope.markFavourite = {};
	$scope.toggleFavourite = (id) => {
		if ($scope.markFavourite[id]) {
			$scope.markFavourite[id] = false;
			$scope.favouriteTooltip = 'Mark as favourite';
			$mdToast.show(
				$mdToast.simple()
					.textContent('Removed favourite')
					.position('bottom left')
					.hideDelay(3000)
			);
			$log.info('Removed Favourite!');
		} else {
			$scope.markFavourite[id] = true;
			$scope.favouriteTooltip = 'Remove favourite';
			$mdToast.show(
				$mdToast.simple()
					.textContent('Marked as favourite')
					.position('bottom left')
					.hideDelay(3000)
					.parent(document.getElementById('container'))
			);
			$log.info('Marked as favourite!');
		}
	}
	// More menu
	var originatorEv;

	$scope.openMenu = (ev) => {
		originatorEv = ev;
		$mdMenu.open(ev);
	};
	$scope.sendFeedback = (ev) => {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io/issues/new";
	};
	// $mdDialog (end)
	$scope.cards = [
		{ avatar: '/img/logo.svg', name: 'Edric Chan', job: 'Owner', imagePath: '/img/angular_1.jpeg', imageAlt: 'Nice Flowers', postTitle: 'First Post', content: 'Welcome! This is some test post that will see if this works!', fullPost: '', halfSize: true, fixedSize: false, id: 1 },
		{ avatar: '', name: 'John Sim', job: 'Co-Author of Blog', imagePath: '', imageAlt: '', postTitle: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet', fullPost: '', halfSize: false, fixedSize: false, id: 2 },
		{ avatar: '', name: 'Joy', job: 'Designer', imagePath: '', imageAlt: '', postTitle: 'Another post!', content: 'This is my first post!', fullPost: '', halfSize: false, fixedSize: false, id: 3 }
	];
	$scope.share = (card) => {
		$mdBottomSheet.show({
			templateUrl: '/templates/sharebottomsheet.html',
			controller: 'ShareBottomSheetCtrl',
			locals: {
				card: card
			},
			parent: document.getElementById('container')
		});

	}
});
app.controller('ShareBottomSheetCtrl', ($mdBottomSheet, $scope) => {

})