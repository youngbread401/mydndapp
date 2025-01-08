self.addEventListener('install', (e) => {
    console.log('Service Worker installed');
    e.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/app.js',
            ]);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker activated');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});