angular.module('AboutApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope) => {
	});
angular.module('AngularApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('AngularController', ($scope) => {
		$scope.links = [
			{ title: 'AngularJS Todo', desc: 'Add todos and archive them!', icon: 'format-list-checks', url: 'angularjstodo.html' },
			{ title: 'Hello World AngularJS', desc: 'A hello world in AngularJS, but with an input.', icon: 'angularjs', url: 'angularjs.html' },
			{ title: 'AngularJS Material Playground', desc: 'Play around with features of AngularJS Material.', icon: 'star', url: 'material.html' }
		];
	})
angular.module('BetaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope) => {

	});

angular.module('BlogApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('BlogController', ($scope) => {

	});
angular.module('DefaultApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('DefaultController', ($scope) => {

	})
angular.module('HelpApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope) => {

	});
angular.module('MainApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope) => {
	})
	.controller('ToastCtrl', ($scope) => {
        /**
         * Closes the toast
         */
		$scope.closeToast = () => {
			$mdToast.hide();
		}
	});
angular.module('MediaApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('SocialController', ($scope) => {
		$scope.social = [
			{ name: 'Facebook', url: 'https://facebook.com/EdricChan03', icon: 'facebook-box' },
			{ name: 'Google+', url: 'https://plus.google.com/+EdricChan03', icon: 'google-plus-box' },
			{ name: 'Twitter', url: 'https://twitter.com/EdricChan03', icon: 'twitter-box' },
			{ name: 'Github', url: 'https://github.com/Chan4077', icon: 'github-box' },
			{ name: 'YouTube', url: 'https://www.youtube.com/channel/UCr2qrcCxls5FnYXsNFtVEzw', icon: 'youtube-play' },
			{ name: 'Codepen', url: 'https://codepen.io/Chan4077', icon: 'codepen' },
			{ name: 'Pinterest', url: 'https://pinterest.com/edricchan1997', icon: 'pinterest-box' },
			{ name: 'StackOverflow', url: 'http://stackoverflow.com/users/6782707/edric', icon: 'stackoverflow' },
			{ name: 'Instagram', url: 'https://instagram.com/chanedric', icon: 'instagram' },
			{ name: 'Reddit', url: 'https://reddit.com/user/Chan4077', icon: 'reddit' },
			{ name: 'Genius', url: 'https://genius.com/EdricChan'}
		];
		$scope.orderby = "";
	});

angular.module('PreferenceApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope) => {

	});
// testApp
angular.module('testApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
	.controller('MainController', ($scope, $mdSidenav, $mdDialog, $mdToast) => {
		// Refresh page, direct from server
		console.info('MainController successfully loaded!');
		// Sidenav
		$scope.toggleLeftMenu = () => {
			$mdSidenav('left').toggle();
		};
		$scope.features = {
			'sharing': true,
			'experiments': false
		};
	});