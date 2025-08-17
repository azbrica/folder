const CACHE_NAME = "my-cache-v2";

// Saat install → bikin cache kosong
self.addEventListener("install", (event) => {
  self.skipWaiting(); // langsung aktif
});

// Saat fetch → simpan otomatis ke cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // kalau sudah ada di cache → pakai cache
      if (response) {
        return response;
      }

      // kalau belum ada → ambil dari network + simpan ke cache
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // fallback kalau offline & file ga ada di cache
        return new Response("⚠️ Offline, file belum tersimpan di cache.", {
          headers: { "Content-Type": "text/plain" }
        });
      });
    })
  );
});

// Bersihkan cache lama saat activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
