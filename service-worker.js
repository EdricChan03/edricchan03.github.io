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
workbox.precaching.precacheAndRoute([]);

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
