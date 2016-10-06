self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('example1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/404.html',
        '/about/index.html',
        '/media/index.html',
        '/preferences/index.html',
        // Layouts
        '/_layouts/default.html',
        '/_layouts/post.html',
        // YML
        '/_config.yml',
        // CSS
        '/css/angular-material.min.css',
        '/css/angular.css',
        '/css/error.css',
        '/css/main.css',
        '/css/test.css',
        // JS
        '/js/404.js',
        '/js/angular-animate.min.js',
        '/js/angular-aria.min.js',
        '/js/angular-material.min.js',
        '/js/angular-messages.min.js',
        '/js/angular.min.js',
        '/js/app.js',
        '/js/main.js',
        '/js/preferences.js',
        '/js/test.js',
        '/js/todo.js',
        '/js/yourname.js',
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
        // Font.css
        '/fonts/fonts.css',
        // Images
        '/img/angular_1.jpeg',
        '/img/blogger.png',
        '/img/error.svg',
        '/img/facebook-logo.svg',
        '/img/Github-Mark.svg',
        '/img/logo.svg',
        // Material Design Icons
        '/img/mdi.svg',
        '/img/wallpaper.jpg',
        '/img/website.svg',
        // Wiki Images
        '/wiki/img/wiki_beta.jpg',
        '/wiki/img/wiki_mainpage.jpg',
        '/wiki/img/wiki_nav.jpg',
        '/wiki/img/wiki_project.jpg'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});