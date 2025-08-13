self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cake-store').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'app.js',
        'manifest.json',
        'assets/cake-texture.png',
        'assets/candle.png',
        'assets/fire.gif',
        'assets/smoke.gif',
        'assets/confetti.js',
        'assets/happy-birthday.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
