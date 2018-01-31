var app = angular.module('errorApp', ['ngAria', 'ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize', 'app.config', 'app.directives']);
app.controller('MainController', ($scope, $mdSidenav, $mdDialog, $mdToast) => {
	/**
	 * Goes back to the previoud history item
	 */
	$scope.goBack = () => {
		window.history.back();
	};
	// Checks if user wanted to go to Angular RSS Reader, which has been renamed to RSS Reader at https://chan4077.github.io/rss-reader
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