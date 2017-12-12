var app = angular.module('errorApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize', 'app.config', 'app.directives']);
/*
*  Main Controller
*/
app.controller('MainController', ($scope, $mdSidenav, $mdDialog, $mdToast) => {
	$scope.main = () => {
		window.location.href = "https://chan4077.github.io";
	};
	$scope.about = () => {
		window.location.href = "https://chan4077.github.io/about#angular";
	};
	$scope.commit = () => {
		window.location.href = "https://github.com/Chan4077/chan4077.github.io/commits/master";
	};
	$scope.goBack = () => {
		window.history.back();
	};
	$scope.refreshPage = () => {
		window.location.reload(true);
	};
	$scope.help = () => {
		window.location.href = "https://chan4077.github.io/help";
		console.info('Redirecting to Help site...');
	}
	setTimeout(() => {

		var redirectConfirm = $mdDialog.confirm()
			.title("Redirect?")
			.htmlContent("<p>Redirect to the new website at <a href=\"/rss-reader\">https://chan4077.github.io/rss-reader</a>?</p>")
			.ariaLabel("Redirect confirmation")
			.ok("Redirect")
			.cancel("Cancel");
		if (window.location.href.indexOf('angular-rss-reader') !== -1) {
			$mdDialog.show(redirectConfirm).then(() => {
				window.location.href = "https://chan4077.github.io/rss-reader";
			}, () => {
				var cancelRedirectToast = $mdToast.simple()
					.textContent("Redirect was cancelled")
					.action("Undo");
				$mdToast.show(cancelRedirectToast).then((response) => {
					if (response == "ok") {
						window.location.href = "https://chan4077.github.io/rss-reader";
					}
				})
			})
		}
	}, 2000);
})