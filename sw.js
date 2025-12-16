const cacheName = 'tile-converter-v1';
const assets = [
  './',
  './index.html',
  // Add your CSS and JS file names below so they are saved
  // Example: './style.css', './script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
