// Sidenav
angular.module('app.directives', [])
	.directive('networkToast', function () {
        /**
         * The network toast controller for when offline and online
         */
		var NetworkToastCtrl = function ($scope, $mdToast, $window) {
            /**
             * Event listener for load
             */
			$window.addEventListener('load', function () {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template:
					'<md-toast>' +
					'<div class="md-toast-content">' +
					'<span class="md-toast-text">Welcome to the site!</span>' +
					'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
					'<md-icon md-svg-icon="close" style="color:white" />' +
					'</md-button>' +
					'</div>' +
					'</md-toast>'
				});
			})
            /**
             * Event listener for offline
             */
			$window.addEventListener('offline', function () {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template:
					'<md-toast>' +
					'<div class="md-toast-content">' +
					'<span class="md-toast-text" flex>You are offline.</span>' +
					'<md-button ng-click="reload()" class="md-action">' +
					'Retry' +
					'</md-button>' +
					'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
					'<md-icon md-svg-icon="close" style="color:white" />' +
					'</md-button>' +
					'</div>' +
					'</md-toast>'
				});
			})
            /**
             * Event listener for online
             */
			$window.addEventListener('online', function () {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template:
					'<md-toast>' +
					'<div class="md-toast-content">' +
					'<span class="md-toast-text" flex>Connection restored!</span>' +
					'<md-button ng-click="reload()" class="md-action">' +
					'Reload' +
					'</md-button>' +
					'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
					'<md-icon md-svg-icon="close" style="color:white" />' +
					'</md-button>' +
					'</div>' +
					'</md-toast>'
				});
			})
            /**
             * The function for ToastCtrl
             */
			function ToastCtrl($scope, $mdToast) {
                /**
                 * Closes the toast on click
                 */
				$scope.closeToast = function () {
					$mdToast.hide();
				}
                /**
                 * Tries to reload
                 */
				$scope.reload = function () {
					window.location.reload(true);
				}
			}
		}
		return {
			restrict: 'E',
			transclude: true,
			controller: NetworkToastCtrl
		};
	})
	.directive('siteSidenav', function () {
		var SidenavController = function ($scope, $mdSidenav) {
			$scope.toggledAllLinks = false;
			$scope.toggledLinks = false;
			$scope.toggledBetaLinks = false;
			$scope.toggledProjectLinks = false;
			$scope.toggledOtherLinks = false;

			$scope.main = [
				{ url: '/about', title: 'About Me', icon: 'account-box' },
				{ url: '/blog', title: 'Blog', icon: 'blogger' },
				{ url: '/media', title: 'Social Media', icon: 'google-plus' },
				{ url: '/angular', title: 'Angular', icon: 'angular' },
			];
			$scope.beta = [
				{ url: '/beta', title: 'Beta (archived)' },
				{ url: '/beta/blog.html', title: 'Beta Blog (archived)' }
			];
			$scope.other = [
				{ url: 'https://github.com/Chan4077/chan4077.github.io', title: 'Project Page', icon: 'github-circle' },
				{ url: '/help', title: 'Get Help', icon: 'help-circle' },
				{ url: '/beta', title: 'Beta', icon: 'flask' },
				{ url: '/beta/blog.html', title: 'Beta Blog', icon: 'flask' },
				{ url: 'https://github.com/Chan4077/chan4077.github.io/wiki/Sites', title: 'Sitemap', icon: 'sitemap' }
			];
			$scope.projects = [
				{ url: '/projects', title: 'Projects' },
				{ url: '/MyFirstApp', title: 'MyFirstApp' },
				{ url: '/icons', title: 'Icons' }
			];
			// Toggle left sidenav
			$scope.toggleLeftMenu = function () {
				$mdSidenav('left').toggle();
			};
			$scope.toggleAllLinks = function () {
				if (!$scope.toggledLinks && !$scope.toggledOtherLinks && !$scope.toggledProjectLinks) {
					$scope.toggledAllLinks = true;
					$scope.toggledLinks = true;
					$scope.toggledProjectLinks = true;
					$scope.toggledOtherLinks = true;
					$scope.toggledBetaLinks = true;
					console.log('All are expanded.');
				} else {
					$scope.toggledAllLinks = false;
					$scope.toggledLinks = false;
					$scope.toggledProjectLinks = false;
					$scope.toggledOtherLinks = false;
					$scope.toggledBetaLinks = false;
					console.log('They are collapsed.');
				}
			};
			$scope.toggleLinks = function () {
				$scope.toggledLinks = !$scope.toggledLinks;
				console.log('Toggled links: ' + $scope.toggledLinks);
			}
			$scope.toggleBetaLinks = function () {
				$scope.toggledBetaLinks = !$scope.toggledBetaLinks;
				console.log('Toggled beta links: ' + $scope.toggledBetaLinks);
			}
			$scope.toggleOtherLinks = function () {
				$scope.toggledOtherLinks = !$scope.toggledOtherLinks;
				console.log('Toggled other links: ' + $scope.toggledOtherLinks);
			}
			$scope.toggleProjectLinks = function () {
				$scope.toggledProjectLinks = !$scope.toggledProjectLinks;
				console.log('Toggled project links: ' + $scope.toggledProjectLinks);
			}
		};
		return {
			restrict: 'E',
			templateUrl: '/templates/sidenav.html',
			transclude: true,
			controller: SidenavController
		};
	})
	.directive('siteToolbar', function () {
		return {
			restrict: 'E',
			templateUrl: '/templates/toolbar.html',
			transclude: true,
			controller: function ToolbarController($scope, $location, $mdDialog, $mdToast) {
				console.info('Loaded site-toolbar!');
				$scope.hideAlert = false;
				$scope.title = document.title;
				$scope.viewGithub = function () {
					window.location.href = "https://github.com/Chan4077/chan4077.github.io";
				};
				$scope.refreshPage = function () {
					window.location.reload(true);
				};
				// $mdDialog (start)
				$scope.sendFeedback = function () {
					// Head to Github -> Create new issue
					alert('Redirecting to Github...');
					window.location.href = 'https://github.com/Chan4077/chan4077.github.io/issues/new';
				};
			}
		};
	})
	// Speed Dial
	.directive('siteSpeedDial', function () {
		return {
			restrict: 'E',
			templateUrl: '/templates/speeddial.html',
			transclude: true
		};
	})
	// Controllers
	.controller('SideNavController', function ($scope, $mdSidenav) {

	})
// App config
angular.module('app.config', [])
	.config(function ($mdIconProvider, $interpolateProvider, $locationProvider) {
		$mdIconProvider
			.defaultIconSet('/img/mdi.svg')
			.icon('website-logo', '/img/website.svg');
		// These are to prevent collision from jekyll
		$interpolateProvider.startSymbol('{(');
		$interpolateProvider.endSymbol(')}');
		$locationProvider.html5Mode(true);
	});