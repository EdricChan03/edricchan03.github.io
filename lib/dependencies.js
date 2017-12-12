// Sidenav
angular.module('app.directives', [])
	.directive('networkToast', () => {
        /**
         * The network toast controller for when offline and online
         */
		var NetworkToastCtrl = ($scope, $mdToast, $window) => {
			var loadTmpl = '<md-toast>' +
				'<div class="md-toast-content">' +
				'<span class="md-toast-text">Welcome to the site!</span>' +
				'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
				'<md-icon md-svg-icon="close" style="color:white" />' +
				'</md-button>' +
				'</div>' +
				'</md-toast>';
			var offlineTmpl = '<md-toast>' +
				'<div class="md-toast-content">' +
				'<span class="md-toast-text" flex>You are offline.</span>' +
				'<md-button ng-click="reload()" class="md-action">' +
				'Retry' +
				'</md-button>' +
				'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
				'<md-icon md-svg-icon="close" style="color:white" />' +
				'</md-button>' +
				'</div>' +
				'</md-toast>';
			var onlineTmpl = '<md-toast>' +
				'<div class="md-toast-content">' +
				'<span class="md-toast-text" flex>Connection restored!</span>' +
				'<md-button ng-click="reload()" class="md-action">' +
				'Reload' +
				'</md-button>' +
				'<md-button ng-click="closeToast()" class="md-icon-button md-action" aria-label="Close Toast">' +
				'<md-icon md-svg-icon="close" style="color:white" />' +
				'</md-button>' +
				'</div>' +
				'</md-toast>';
            /**
             * Event listener for load
             */
			$window.addEventListener('load', () => {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template: loadTmpl,
					parent: document.querySelectorAll('div.md-padding')[0]
				});
			})
            /**
             * Event listener for offline
             */
			$window.addEventListener('offline', () => {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template: offlineTmpl
				});
			})
            /**
             * Event listener for online
             */
			$window.addEventListener('online', () => {
				$mdToast.show({
					hideDelay: 3000,
					position: 'bottom left',
					controller: ToastCtrl,
					template: onlineTmpl
				});
			})
            /**
             * The function for ToastCtrl
             */
			ToastCtrl = ($scope, $mdToast) => {
                /**
                 * Closes the toast on click
                 */
				$scope.closeToast = () => {
					$mdToast.hide();
				}
                /**
                 * Tries to reload
                 */
				$scope.reload = () => {
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
	/**
	 * Usage:
	 * @example
	 * <div id="one" class="section">
	 * 	<h3>One</h3>
	 * 	...
	 * </div>
	 * <div id="two" class="section">
	 * 	<h3>Two</h3> <!-- Can also be h1, h2, h3, h4, h5, h6 -->
	 * 	...
	 * </div>
	 */
	.directive('siteToc', () => {
		var TOCController = ($scope) => {
			$scope.divIds = document.querySelectorAll('div[id].section');
			$scope.ids = [];
			for (var i = 0; i < $scope.divIds.length; i++) {
				console.dir($scope.divIds[i]);
				$scope.ids.push({ id: $scope.divIds[i].id, name: $scope.divIds[i].children[0].innerText });
			};
		}
		return {
			restrict: 'E',
			templateUrl: '/templates/toc.html',
			transclude: true,
			controller: TOCController
		}
	})
	// Sidenav
	.directive('siteSidenav', () => {
		var SidenavController = ($scope, $mdSidenav) => {
			$scope.toggledAllLinks = false;
			$scope.toggledLinks = false;
			$scope.toggledBetaLinks = false;
			$scope.toggledProjectLinks = false;

			$scope.main = [
				{ url: '/about', title: 'About Me', icon: 'account-box' },
				{ url: '/blog', title: 'Blog', icon: 'blogger' },
				{ url: '/media', title: 'Social Media', icon: 'google-plus' },
				{ url: '/angular', title: 'Angular', icon: 'angular' },
				{ url: '/help', title: 'Help', icon: 'help-circle' }
			];
			$scope.beta = [
				{ url: '/beta', title: 'Beta (archived)' },
				{ url: '/beta/blog.html', title: 'Beta Blog (archived)' }
			];
			$scope.projects = [
				{ url: '/projects', title: 'Projects', desc: "The list of all projects." },
				{ url: '/MyFirstApp', title: 'MyFirstApp', desc: "A MacOS example app. (Work in progress)" },
				{ url: '/StudyBuddy', title: 'StudyBuddy', desc: "A study buddy compatible with Android Oreo." },
				{ url: '/md-todo', title: 'md-todo', desc: 'AngularJS Material todo extension.' }
			];
			// Toggle left sidenav
			$scope.toggleLeftMenu = () => {
				$mdSidenav('left').toggle();
			};
			$scope.toggleAllLinks = () => {
				if (!$scope.toggledLinks && !$scope.toggledBetaLinks && !$scope.toggledProjectLinks) {
					$scope.toggledAllLinks = true;
					$scope.toggledLinks = true;
					$scope.toggledProjectLinks = true;
					$scope.toggledBetaLinks = true;
					console.log('All are expanded.');
				} else {
					$scope.toggledAllLinks = false;
					$scope.toggledLinks = false;
					$scope.toggledProjectLinks = false;
					$scope.toggledBetaLinks = false;
					console.log('They are collapsed.');
				}
			};
			$scope.toggleLinks = () => {
				$scope.toggledLinks = !$scope.toggledLinks;
				console.log('Toggled links: ' + $scope.toggledLinks);
			}
			$scope.toggleBetaLinks = () => {
				$scope.toggledBetaLinks = !$scope.toggledBetaLinks;
				console.log('Toggled beta links: ' + $scope.toggledBetaLinks);
			}
			$scope.toggleProjectLinks = () => {
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
	.directive('siteToolbar', () => {
		var ToolbarController = ($scope, $mdDialog, $mdToast) => {
			$scope.hideAlert = false;
			$scope.title = document.title;
			$scope.viewGithub = () => {
				window.location.href = "https://github.com/Chan4077/chan4077.github.io";
			};
			$scope.refreshPage = () => {
				window.location.reload(true);
			};
			// $mdDialog (start)
			$scope.sendFeedback = () => {
				// Head to Github -> Create new issue
				alert('Redirecting to Github...');
				window.location.href = 'https://github.com/Chan4077/chan4077.github.io/issues/new';
			};
		}
		return {
			restrict: 'E',
			templateUrl: '/templates/toolbar.html',
			transclude: true,
			controller: ToolbarController
		};
	})
	// Speed Dial
	.directive('siteSpeedDial', () => {
		var SiteSpeedDialCtrl = ($scope, $mdDialog, $mdToast) => {
			$scope.share = (socialNum) => {
				var socialMedia, socialUrl;
				switch (socialNum) {
					case 1:
						socialMedia = "Facebook";
						socialUrl = "https://www.facebook.com/dialog/share?app_id=145634995501895&href=" + document.URL + "&text=";
						break;
					case 2:
						socialMedia = "Google+";
						socialUrl = "https://plus.google.com/share?url=" + document.URL + "&text=";
						break;
					case 3:
						socialMedia = "Twitter";
						socialUrl = "https://twitter.com/intent/tweet?url=" + document.URL + "&text=";
						break;
				}
				var sharePrompt = $mdDialog.prompt()
					.title("Share via " + socialMedia)
					.textContent("Enter the text for your post: (Please make sure you enable popups before continuing)")
					.placeholder("Post content")
					.ariaLabel("Share text for post")
					.ok("Share")
					.cancel("Cancel");
				$mdDialog.show(sharePrompt).then((result) => {
					socialUrl += result;
					window.open(socialUrl, '_blank');
				}, () => {
					var toast = $mdToast.simple()
						.textContent("You cancelled the dialog.")
						.action("Undo")
						.position("bottom left")
						.hideDelay(5000)
					$mdToast.show(toast).then((response) => {
						if (response == 'ok') {
							$scope.share(socialNum);
						}
					});
				})
			}
		}
		return {
			restrict: 'E',
			templateUrl: '/templates/speeddial.html',
			transclude: true,
			controller: SiteSpeedDialCtrl
		};
	});
// App config
angular.module('app.config', [])
	.config(($mdIconProvider, $interpolateProvider) => {
		$mdIconProvider
			.defaultIconSet('/res/mdi.svg')
			.icon('website-logo', '/img/website.svg');
		// These are to prevent collision from jekyll
		$interpolateProvider.startSymbol('{(');
		$interpolateProvider.endSymbol(')}');
	});