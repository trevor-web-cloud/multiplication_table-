self.addEventListener('install', e => {
  e.waitUntil(caches.open('math-quiz-v13-2').then(cache => {
    return cache.addAll(['./','./index.html','./manifest.webmanifest']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
