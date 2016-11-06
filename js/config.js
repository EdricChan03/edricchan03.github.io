angular.module('app.config', [])
.config(function ($mdIconProvider, $mdToastProvider, $log) {
    $mdIconProvider
        .defaultIconSet('/img/mdi.svg')
        .icon('website-logo', '/img/website.svg');
    $log.debug('Successfully initialized!');
});