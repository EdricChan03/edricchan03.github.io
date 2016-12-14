self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('chan4077.github.io').then(cache => {
      return cache.addAll([
        '/',
        // Main
        '/index.html',
        '/index.html',
        // 404 Site
        '/404.html',
        // CSS
        '/css/angular-material.min.css',
        '/css/angular.css',
        '/css/error.css',
        '/css/material.min.css',
        '/css/main.css',
        '/css/test.css',
        // JS
        '/js/site/404.js',
        '/js/angular/1.6.0/angular-animate.min.js',
        '/js/angular/1.6.0/angular-aria.min.js',
        '/js/angular/angular-material.min.js',
        '/js/angular/1.6.0/angular-messages.min.js',
        '/js/angular/1.6.0/angular.min.js',
        '/js/angular/1.6.0/angular.js',
        '/js/site/main.js',
        '/js/material.min.js',
        '/js/site/preferences.js',
        '/js/site/test.js',
        '/js/site/todo.js',
        '/js/site/yourname.js',
        // Fonts
        // Roboto
        '/fonts/Roboto/LICENSE.txt',
        '/fonts/Roboto/Roboto.eot',
        '/fonts/Roboto/Roboto.svg',
        '/fonts/Roboto/Roboto.ttf',
        '/fonts/Roboto/Roboto.woff',
        '/fonts/Roboto/Roboto.woff2',
        // Menlo
        '/fonts/Menlo/Menlo.eot',
        '/fonts/Menlo/Menlo.woff',
        '/fonts/Menlo/Menlo.woff2',
        '/fonts/Menlo/Menlo.ttf',
        '/fonts/Menlo/Menlo.svg',
        // Material Icons
        '/fonts/MaterialIcons/MaterialIcons-Regular.eot',
        '/fonts/MaterialIcons/MaterialIcons-Regular.woff',
        '/fonts/MaterialIcons/MaterialIcons-Regular.woff2',
        '/fonts/MaterialIcons/MaterialIcons-Regular.ttf',
        '/fonts/MaterialIcons/MaterialIcons-Regular.svg',
        // Font.css
        '/fonts/fonts.css',
        // Angular
        '/angular/angularjs.html',
        '/angular/angulartodo.html',
        '/angular/index.html',
        '/angular/material.html',
        // Beta Site
        '/beta/index.html',
        '/beta/blog.html',
        // About
        '/about/index.html',
        // Media
        '/media/index.html',
        // Preferences
        '/preferences/index.html',
        // Templates
        '/templates/speeddial.html',
        '/templates/feedbackhelp.html',
        '/templates/settings_tmpl.html',
        '/templates/sidenav.html',
        '/templates/toastoffline.html',
        '/templates/toolbar.html',
        '/templates/whats_new_tmpl.html',
        // Images
        '/img/angular_1.jpeg',
        '/img/blogger.png',
        '/img/error.svg',
        '/img/facebook-logo.svg',
        '/img/Github-Mark.svg',
        '/img/logo.svg',
        '/img/mdi.svg',
        '/img/wallpaper.jpg',
        '/img/website.svg',
        // Wiki Images
        '/wiki/img/wiki_beta.jpg',
        '/wiki/img/wiki_mainpage.jpg',
        '/wiki/img/wiki_nav.jpg',
        '/wiki/img/wiki_project.jpg',
        // Favicon
        '/favicon.ico',
        // Help
        '/help/index.html',
        '/help/about_feedback.html',
        '/help/about_settings.html',
        // jQuery
        '/jquery/index.html'
      ])
        .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});