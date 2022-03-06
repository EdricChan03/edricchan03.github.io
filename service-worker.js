importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// Code adapted from
// https://github.com/bmeurer/jekyll-workbox-plugin#write-your-own-service-worker.

// Set the names for both precache & runtime cache.
workbox.core.setCacheNameDetails({
  prefix: 'edricchan03.github.io',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

// Let the Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// Default to the `networkFirst` strategy.
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// Let Workbox handle the precaching list.
// Note: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([{"url":"/blog/2022/03/07/status-update.html","revision":"f2bcd5a512b5e9932d0038f0b606e905"},{"url":"/blog/2019/04/21/easy-calculus-differentiation-integration.html","revision":"a6db6cd74e27483e7deb7756f324e561"},{"url":"/blog/programming/2019/03/16/simplified-content-views.html","revision":"a6a713afc9e6c8572b1e53662857d547"},{"url":"/blog/2019/02/24/status-update.html","revision":"dc112dc7b8ae6bceab390be04c084c27"},{"url":"/til/stackoverflow/2019/02/06/stackoverflow-backtick.html","revision":"f120f0600eb6ca0ba100017155b522d7"}]);

// Routing for image files.
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate()
);

// Routing for Google Fonts.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate()
);

// Enable support for Google Analytics.
workbox.googleAnalytics.initialize({});
