// 古い保存データを消して、自分を終了する(現場の目 に引っ越したため)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k)))).then(() => self.registration.unregister())); });
