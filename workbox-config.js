/**
 * Configuration for the Workbox CLI to generate a service worker JS file
 *
 * See https://developers.google.com/web/tools/workbox/guides/generate-complete-sw#configure for more info
 */
module.exports = {
  "globDirectory": "_site",
  "globPatterns": [
    "**/*.{html,png,css,ico,js}"
  ],
  "globIgnores": [
    // There aren't any _ prefixed directories when the site is built or when served
    "_*/**",
    // We only want to cache CSS/JS files
    "node_modules/**/*.{html,md}",
    // Ignore this file as it won't be included when the site is built/served
    "workbox-config.js"
  ],
  "swDest": "service-worker.js",
  "offlineGoogleAnalytics": true,
  // Exclude URLs that are separate from the main site.
  "navigationFallbackBlacklist": [/rss-reader/],
  // Define runtime caching rules.
  "runtimeCaching": [{
    // Match any request ends with .png, .jpg, .jpeg or .svg.
    "urlPattern": /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    "handler": "CacheFirst",

    "options": {
      // Use a custom cache name.
      "cacheName": "images",

      // Only cache 10 images.
      "expiration": {
        "maxEntries": 10
      },
    },
  }, {
    // See https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts for more info
    // Match any Google Font API requests
    "urlPattern": /^https:\/\/fonts\.googleapis\.com/,
    "handler": "StaleWhileRevalidate",
    "options": {
      "cacheName": "google-fonts-stylesheets"
    }
  }, {
    // Match any requests to Google Fonts fonts
    "urlPattern": /^https:\/\/fonts\.gstatic\.com/,
    "handler": "CacheFirst",
    "options": {
      "cacheName": "google-fonts-webfonts",
      "cacheableResponse": {
        statuses: [0, 200]
      },
      "expiration": {
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      }
    }
  }],
};
