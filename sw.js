// Offline support. App files: network-first (always fresh when online). Exam banks: kept once downloaded.
const SHELL = "pf-shell-v4";
const FILES = ["./", "index.html", "config.js", "manifest.json", "icon-180-v2.png", "icon-192-v2.png", "icon-512-v2.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(SHELL).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== "pf-exams").map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET" || u.origin !== location.origin) return;   // uploads go straight to the network
  const isExam = u.pathname.includes("/exams/");
  if (isExam) {   // downloaded banks: cache first
    e.respondWith(caches.match(req, {ignoreSearch:true}).then(r => r || fetch(req).then(res => {
      if (res.ok) { const c = res.clone(); caches.open("pf-exams").then(x => x.put(req, c)); } return res; })));
    return;
  }
  e.respondWith(   // app files: network first (skip the browser cache so updates show at once), fall back to saved copy
    fetch(new Request(req.url, {cache:"no-cache", credentials:"same-origin"})).then(res => { if (res.ok) { const c = res.clone(); caches.open(SHELL).then(x => x.put(req, c)); } return res; })
      .catch(() => caches.match(req, {ignoreSearch:true}).then(r => r || caches.match("index.html")))
  );
});
