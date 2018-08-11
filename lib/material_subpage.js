var app = angular.module('materialApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives']);
// Configuration
app.config(($mdIconProvider, $mdThemingProvider) => {
  $mdThemingProvider.enableBrowserColor({
    theme: 'default',
    palette: 'primary',
    hue: '800'
  })
  // materialThemeYellowPurple
  $mdThemingProvider.theme('materialThemeYellowPurple')
    .primaryPalette('yellow')
    .accentPalette('purple')
    .warnPalette('orange')
    .backgroundPalette('grey');
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
app.controller('MaterialController', ($scope, $mdDialog, $mdToast) => {
  $scope.goToSrc = () => {
    window.location.href = "https://github.com/Chan4077/chan4077.github.io/blob/master/angular/material.html";
  }
  $scope.statuses = ['one', 'two', 'three'];
  $scope.messages = [
    {
      author: 'Mary',
      text: 'Hey there! Want to grab some takeover food for dinner?',
      imgSrc: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
      author: 'John',
      text: 'Happy birthday Sam!',
      imgSrc: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
      author: 'Sally',
      text: 'Sam, have you seen this new game called dollar master??',
      imgSrc: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    {
      author: 'BSB',
      text: 'Hey there Sam, you have just withdrawn $1000 from the bank. Reply 0 to verify so, or reply 3 to state that you did not do so.',
      imgSrc: 'https://www.appointbetterboards.co.nz/Custom/Appoint/img/avatar-large.png'
    }
  ]
  $scope.reply = (msg, ev) => {
    console.log(msg);
    var DialogController = ($scope, $mdDialog, item) => {
      $scope.item = item;
      $scope.replyMsg = "";
      console.log($scope.item);
      $scope.close = () => {
        $mdDialog.hide();
        if ($scope.replyMsg != "") {
          alert("You replied: " + "\"" + $scope.replyMsg + "\"");
        }
      }
    }
    $mdDialog.show({
      targetEvent: ev,
      templateUrl: '/templates/material-demo/replydialog.html',
      locals: {
        item: msg
      },
      controller: DialogController
    });
  }
  $scope.showSnackBar = (action = '', hideDelay = 3000) => {
    if (action !== '') {
      $mdToast.show(
        $mdToast
          .simple()
          .action(action)
          .textContent('I\'m a toast!')
          .position('bottom left')
          .hideDelay(hideDelay)
      );
    } else {
      $mdToast.show(
        $mdToast
          .simple()
          .textContent('I\'m a toast!')
          .position('bottom left')
          .hideDelay(hideDelay)
      );
    }
  };
});
