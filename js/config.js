angular.module('app.config', [])
.config(function ($mdIconProvider, $mdToastProvider, $rootScopeProvider) {
    $mdIconProvider
        .defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');
    console.info('Successfully initialized!');
});