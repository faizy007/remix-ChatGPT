// app/sw.js
var cacheName = "remix-app-cache-v1";
var assetsToCache = [
  "/",
  "/app"
  //   '/public/your-asset-1.css',
  //   '/public/your-asset-2.js',
  // Add more assets to cache as needed
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Delete any old caches and claim the clients
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== cacheName).map((oldCacheName) => caches.delete(oldCacheName))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
