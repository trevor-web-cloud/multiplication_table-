// PWA Service Worker (cache-first) - v1.7.1-v13.4.1
const CACHE_VERSION = 'v1.7.1-v13.4.1';
const CACHE_NAME = `math-quiz-cache-${CACHE_VERSION}`;
const ASSETS = ['./','./index.html','./manifest.webmanifest','./sw.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith('math-quiz-cache-') && k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  const req = event.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : undefined))
  );
});
